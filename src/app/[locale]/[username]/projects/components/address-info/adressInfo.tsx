// AddressForm.tsx - Ensuring onClose is correctly received and triggered
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { setAddressForm, reset } from '@/app/[locale]/redux/ground-surface-slice';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import formSchema from './address-info-validation';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import Countries from './countries';
import GoogleSearchForm from './google-form';
import { Button } from '@/components/ui/button';
import { useMapContext } from '../../../../providers/map-context-provider';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const AddressForm: React.FC<any> = () => {
  const { send } = useMapContext();
  const dispatch = useAppDispatch()
  const savedForm = useAppSelector(state => state.map.addressForm.saved);
  const postalCode = useAppSelector(state => state.map.addressComponents.postalCode);
  const coordinates = useAppSelector(state => state.map.geometry.location);
  const formatedAddress = useAppSelector(state => state.map.addressComponents.formatedAddress);
  const [coordsOutput, setCoordsOutput] = useState('');
  const t = useTranslations('UserInfo');

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postNo: '',
      coordinates: '',
    },
  });

  useEffect(() => {
    setCoordsOutput(`${coordinates.lat} , ${coordinates.lng}`);
  }, [coordinates]);

  const handleSave = () => {
    console.log('AddressForm: Triggering onClose');
    send({ type: 'SET_CURRENT_COORDS', coords: coordinates })
    dispatch(setAddressForm(true))
  };

  const handleReset = () => {
    console.log('AddressForm: Triggering reset');
    // dispatch(reset())
  }

  return (
    <Form {...form}>
      <div className='space-y-4'>
        <Countries />
        <GoogleSearchForm />
        <div className="flex space-x-4 z-2">
          <FormField
            control={form.control}
            name="postNo"
            render={({ field }) => (
              <FormItem className="w-1/3">
                <FormLabel>{t('tabs.information.fields.zipcode')}</FormLabel>
                <FormControl>
                  <Input {...field} value={postalCode} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="coordinates"
            render={({ field }) => (
              <FormItem className="w-2/3 z-2">
                <FormLabel>{t('tabs.information.fields.coordinates')}</FormLabel>
                <FormControl>
                  <Input {...field} value={coordsOutput} disabled />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex space-x-4 z-2">
          <Button 
            className="mt-4 bg-secondary"
            onClick={handleSave}
            disabled={savedForm || formatedAddress === ''}
            >
            Save
          </Button>
          <Button 
            className="mt-4 bg-secondary"
            onClick={handleReset}
            disabled={coordinates.lat === ''}
            >
            Reset
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default AddressForm;
