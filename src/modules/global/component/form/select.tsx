import { Listbox, Transition } from '@headlessui/react';
import type { Dispatch, SetStateAction } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';

type TypeSelected = { label: string; value: string };
export const Select = ({
  selected,
  selectedLabel, // default get by label's object, but you can custom by using this props
  setSelected,
  listOptions,
  placeHolder,
  disabled = false,
}: {
  selected: string;
  selectedLabel?: string | undefined;
  setSelected: Dispatch<SetStateAction<string>> | ((e: string) => void);
  listOptions: TypeSelected[];
  placeHolder?: string;
  disabled?: boolean;
}) => {
  return (
    <div>
      <Listbox
        as="div"
        className="space-y-1"
        value={selected}
        onChange={setSelected}
        disabled={disabled}
      >
        {({ open }) => (
          <div className="relative">
            <span className="inline-block w-full min-w-[200px] rounded-md">
              <Listbox.Button
                className={twMerge(
                  disabled ? 'bg-neutral-20' : ' bg-neutral-10',
                  'focus:shadow-outline-blue ease-in-outfocus:outline-none relative flex h-10 w-full cursor-default items-center justify-between rounded-md border border-neutral-40 px-3 py-2 transition duration-150 sm:text-sm sm:leading-5',
                )}
              >
                <span
                  className={twMerge(
                    selected ? 'text-neutral-100' : 'text-neutral-40',
                    'block truncate',
                  )}
                >
                  {selectedLabel ||
                    listOptions?.find((item) => item.value === selected)
                      ?.label ||
                    placeHolder}
                </span>
                <HiChevronDown className="text-neutral-40" />
              </Listbox.Button>
            </span>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="absolute z-30 mt-1 w-full rounded-md bg-white shadow-lg"
            >
              <Listbox.Options
                static
                className="shadow-xs z-20 max-h-60 overflow-auto rounded-md py-1 text-base leading-6 focus:outline-none sm:text-sm sm:leading-5"
              >
                {listOptions.map((item: TypeSelected, key) => (
                  <Listbox.Option key={key} value={item.value}>
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
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
};
