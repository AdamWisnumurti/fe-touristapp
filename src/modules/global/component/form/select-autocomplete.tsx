import { Combobox, Transition } from '@headlessui/react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

type TypeSelected = { label: string; value: string };
export const SelectAutoComplete = ({
  selected,
  setSelected,
  listOptions,
  placeHolder,
  disabled = false,
  ...props
}: {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>> | ((e: string) => void);
  listOptions: TypeSelected[];
  placeHolder?: string;
  disabled?: boolean;
}) => {
  const [query, setQuery] = useState('');
  const filteredList =
    query === ''
      ? listOptions
      : listOptions.filter((item) => {
          return item.label.toLowerCase()?.includes(query.toLowerCase());
        });
  return (
    <div>
      <Combobox
        as="div"
        className="space-y-1"
        value={selected}
        onChange={setSelected}
        disabled={disabled}
        {...props}
      >
        {({ open }) => (
          <div className="relative">
            <Combobox.Input
              className={twMerge(
                disabled ? 'bg-neutral-20' : ' bg-neutral-10',
                'w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900  focus:outline-primary focus:ring-0',
              )}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeHolder}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 text-neutral-40">
              <HiChevronDown />
            </Combobox.Button>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute z-30  mt-1 w-full rounded-md bg-white shadow-lg"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options
                static
                className="shadow-xs z-20 max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              >
                {filteredList.map((item: TypeSelected, key) => (
                  <Combobox.Option key={key} value={item.value}>
                    {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                    {({ selected, active }) => (
                      <div
                        className={`${
                          active ? 'bg-primary text-white' : 'text-gray-900'
                        } relative cursor-pointer select-none py-2 pl-3 pr-4`}
                      >
                        <span
                          className={`${
                            selected ? 'font-semibold' : 'font-normal'
                          } block truncate`}
                        >
                          {item.label}
                        </span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Transition>
          </div>
        )}
      </Combobox>
    </div>
  );
};
