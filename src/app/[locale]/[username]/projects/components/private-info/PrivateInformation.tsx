import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import formSchema from './private-info-validation';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { X, Search, Clock, PlusSquare } from 'lucide-react';
import Conditional from '@/components/utils/ConditionalRendering';
import { users, Users } from './mock-data/users';

export default function PrivateInformation() {
  const t = useTranslations('UserInfo');
  const [suggestions, setSuggestions] = useState<Users[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [hasNameSelected, setHasNameSelected] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: '',
      personalNr: '',
      email: ''
    },
  });

  const clearName = () => {
    form.resetField('fullname');
    form.resetField('personalNr');
    form.resetField('email');
    setInputValue('');
    setIsDisabled(false);
    setHasNameSelected(false);
    setSuggestions([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 0) {
      const filteredUsers = users.filter((user) =>
        user.fullname.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredUsers);
      setSelectedIndex(null); // Reset selected index when input changes
    } else {
      setSuggestions([]);
    }

    form.setValue('fullname', value);
  };

  const handleSuggestionClick = (user: Users) => {
    fillForm(user);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        // Move down the list
        setSelectedIndex((prevIndex) =>
          prevIndex === null || prevIndex === suggestions.length - 1
            ? 0
            : prevIndex + 1
        );
      } else if (e.key === 'ArrowUp') {
        // Move up the list
        setSelectedIndex((prevIndex) =>
          prevIndex === null || prevIndex === 0
            ? suggestions.length - 1
            : prevIndex - 1
        );
      } else if (e.key === 'Enter' && selectedIndex !== null) {
        fillForm(suggestions[selectedIndex]);
        setIsDisabled(true);
        e.preventDefault(); // Prevent form submission if Enter is pressed
      }
    }
  };

  const fillForm = (user: Users) => {
    form.setValue('fullname', user.fullname);
    form.setValue('personalNr', user.idNo);
    form.setValue('email', user.email);
    setInputValue(user.fullname);
    setIsDisabled(true);
    setHasNameSelected(true);
    setSuggestions([]);
  };

  return (
    <Form {...form}>
      <form className="space-y-2">
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel>{t('tabs.information.private.fields.fullname')}</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="text"
                    {...field}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown} // Handle keyboard navigation
                    className="
                      px-2
                      py-1
                      pr-10
                      bg-background
                      focus:outline-blue-300
                      focus-outline-4
                      disabled:text-foreground
                      disabled:bg-muted
                      disabled:opacity-1"
                    autoComplete="off"
                    disabled={isDisabled}
                  />
                  <Conditional showWhen={inputValue === ''}>
                    <Search
                      className="
                        absolute
                        right-2
                        top-1/2
                        transform
                        -translate-y-1/2 
                        h-5 w-5 
                        text-gray-400
                        cursor-pointer"
                    />
                  </Conditional>
                  <Conditional showWhen={inputValue !== ''}>
                    <X
                      className="
                        absolute
                        right-2
                        top-1/2
                        transform
                        -translate-y-1/2 
                        h-5 w-5 
                        text-gray-400
                        cursor-pointer"
                      onClick={clearName}
                    />
                  </Conditional>
                </div>
              </FormControl>
              <Conditional showWhen={suggestions.length > 0 || inputValue !== ''}>
                <div
                  className={`absolute left-0 right-0 bg-background rounded mt-1 ${
                    suggestions.length > 0 || inputValue !== ''
                      ? 'border border-border'
                      : 'border-0'
                  }`}
                >
                  <Conditional showWhen={!hasNameSelected}>
                    <div className="w-full px-4 py-2">
                      <FormItem className="relative">
                        <FormControl>
                          <div>
                            <Input
                              type="text"
                              className="bg-background focus:bg-secondary"
                              value={inputValue}
                              readOnly
                              disabled
                            />
                            <PlusSquare
                              className="
                                absolute
                                right-2
                                top-1/2
                                transform
                                -translate-y-1/2 
                                h-5 w-5 
                                text-gray-400
                                cursor-pointer"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    </div>
                  </Conditional>
                  <Conditional showWhen={suggestions.length > 0}>
                    <Separator />
                    <div className="w-full bg-background px-4 py-2 text-sm text-foreground flex place-content-center">
                      <Clock className="h-4 w-4 mr-2" /> Från systemet
                    </div>
                    <ul>
                      {suggestions.map((user, index) => (
                        <li
                          key={user.fullname}
                          className={`p-5 cursor-pointer ${
                            selectedIndex === index ? 'bg-background' : 'hover:bg-secondary'
                          }`}
                          onClick={() => handleSuggestionClick(user)}
                        >
                          <span>{user.fullname}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex w-full border-1 border-black border-solid place-content-center">
                      <Button
                        className="mb-2 bg-white text-blue-500 hover:bg-gray-100 rounded-b-md"
                        onClick={() => alert('Load more results...')}
                      >
                        Visa fler resultat
                      </Button>
                    </div>
                  </Conditional>
                </div>
              </Conditional>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="personalNr"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('tabs.information.private.fields.idNo')}</FormLabel>
              <FormControl>
                <Input type="text" {...field} disabled={isDisabled} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('tabs.information.fields.email')}</FormLabel>
              <FormControl>
                <Input type="email" {...field} disabled={isDisabled} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
