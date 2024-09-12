import { useState, useRef, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { setMapAddress, setMapCoords, setMapCountryName } from '@/app/[locale]/redux/ground-surface-slice';
import { useForm } from 'react-hook-form';
import formSchema from './address-info-validation';
import { Input } from '@/components/ui/input'; // Assuming you have an Input component from ShadCN UI
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useTranslations } from 'next-intl';

const GoogleSearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const countryCode = useAppSelector(state => state.map.country.code);
  const formatedAddress = useAppSelector(state => state.map.addressComponents.formatedAddress) || ''; // Ensure it's always a string
  const inputContainerRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations('UserInfo');
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: ''
    },
  });

  useEffect(() => {
    const inputElement = inputContainerRef.current?.querySelector('input') as HTMLInputElement | null;
    let observer: MutationObserver | null = null;

    if (inputElement) {
      // Initialize the Google Autocomplete service
      const autocomplete = new window.google.maps.places.Autocomplete(inputElement, {
        types: ['address'],
        componentRestrictions: { country: countryCode || 'se' },
      });

      // Listener for place_changed event on Google Autocomplete
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const formattedAddress: any = place.formatted_address || ''; // Ensure it's always a string
        const addressComponents: any = place.address_components;

        if (place && addressComponents && formattedAddress) {
          dispatch(setMapAddress({
            formatedAddress: formattedAddress,
            administrativeAreaLevel3: addressComponents.filter((component: any) =>
              component.types.includes('administrative_area_level_3'))[0]?.long_name || '',
            administrativeAreaLevel2: addressComponents.filter((component: any) =>
              component.types.includes('administrative_area_level_2'))[0]?.long_name || '',
            administrativeAreaLevel1: addressComponents.filter((component: any) =>
              component.types.includes('administrative_area_level_1'))[0]?.long_name || '',
            locality: addressComponents.filter((component: any) =>
              component.types.includes('locality'))[0]?.long_name || '',
            postalCode: addressComponents.filter((component: any) =>
              component.types.includes('postal_code'))[0]?.long_name || 'n/a',
            route: addressComponents.filter((component: any) =>
              component.types.includes('route'))[0]?.long_name || '',
            streetNumber: addressComponents.filter((component: any) =>
              component.types.includes('street_number'))[0]?.long_name || '',
          }));
          dispatch(setMapCountryName({
            name: addressComponents.filter((component: any) =>
              component.types.includes('country'))[0]?.long_name || '',
          }));
          dispatch(setMapCoords({ lat: place.geometry?.location?.lat(), lng: place.geometry?.location?.lng() }));
          setInputValue(formattedAddress);
        }
      });

      // Define the event listener for mousedown events inside useEffect
      const handleMouseDown = (event: Event): void => {
        event.stopPropagation(); // Prevent event from bubbling up to undesired elements
      };

      // Use MutationObserver to attach event listeners when .pac-container is added
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if ((node as Element).classList?.contains('pac-container')) {
              // Correctly add the event listener using type assertions
              (node as Element).addEventListener('mousedown', handleMouseDown);
              // Ensure the dropdown is displayed above any overlays
              (node as HTMLElement).style.zIndex = '1001'; // Ensure visibility above overlays
            }
          });
        });
      });

      // Start observing the document body for changes
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      // Cleanup function to remove listeners and disconnect the observer when the component unmounts
      return () => {
        document.querySelectorAll('.pac-container').forEach((container) => {
          // Remove the mousedown listener using the same function reference
          (container as Element).removeEventListener('mousedown', handleMouseDown);
        });
        if (observer) {
          observer.disconnect(); // Disconnect the observer to clean up
        }
      };
    }
  }, [countryCode, dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <FormField
      control={form.control}
      name="address"
      render={({ field }) => (
        <FormItem className="">
          <FormLabel>{t('tabs.information.fields.address')}</FormLabel>
          <FormControl>
            <div ref={inputContainerRef}>
              <Input
                type="text"
                value={formatedAddress || inputValue} // Ensure it's always a defined value
                disabled={!countryCode || formatedAddress !== ''}
                onChange={handleInputChange}
                placeholder="Enter an address..."
                onClick={(e) => e.stopPropagation()} // Prevent click events from propagating up
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default GoogleSearchForm;
