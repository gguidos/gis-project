import React from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { setMapCountryCode } from '@/app/[locale]/redux/ground-surface-slice';
import formSchema from './address-info-validation';
import { useTranslations } from 'next-intl';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

export default function Countries() {
  const dispatch = useAppDispatch();
  const t = useTranslations('UserInfo');
  const tc = useTranslations('Countries');
  const defaultValue = useAppSelector(state => state.map.country.code) || '';

  const countries = [
    { name: tc('dk'), value: 'dk' },
    { name: tc('fi'), value: 'fi' },
    { name: tc('no'), value: 'no' },
    { name: tc('se'), value: 'se' },
    // Add more countries as needed
  ];

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: defaultValue, // Set the default value here
    },
  });

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    form.setValue('country', e.target.value);
    dispatch(setMapCountryCode({ code: e.target.value }));
  };

  return (
    <FormField
      control={form.control}
      name="country"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t('tabs.information.fields.country')}</FormLabel>
          <FormControl>
            <select
              {...field}
              disabled={defaultValue !== ''}
              onChange={handleCountryChange}
              className="w-full border rounded p-2"
              value={field.value || ''} // Ensure value is always defined
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.name}
                </option>
              ))}
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
