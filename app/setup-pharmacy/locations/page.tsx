"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { people } from "@/app/lib/data";
import { useState } from "react";

const Locations = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    // grid grid-cols-1 md:grid-cols-2 gap-12
    <section className="">
      <div className="w-full border-b border-[#E6E8EC] pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full ">
            <label className="block text-sm text-[#8E919C] mb-2">
              Select number of locations
            </label>

            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
              <div className="relative mt-1 w-full outline-0 secondary-text border border-[#DDDDDF] rounded-lg focus:ring-1 focus:ring-[#2254D3] focus:border-transparent">
                {/* The Button / Trigger */}
                <ListboxButton className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none sm:text-sm">
                  <span className="block truncate">{selectedPerson.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    {/* Using the Solid Chevron here */}
                    <ChevronDownIcon
                      className="h-5 w-5 text-blue-600"
                      aria-hidden="true"
                    />
                  </span>
                </ListboxButton>

                {/* The Dropdown Menu */}
                <ListboxOptions className="absolute mt-1 max-height-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {people.map((person) => (
                    <ListboxOption
                      key={person.id}
                      value={person}
                      className={({ focus }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          focus ? "bg-blue-100 text-blue-900" : "text-gray-900"
                        }`
                      }
                    >
                      {person.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
        </div>
      </div>

      <div className="flex w-full gap-6 flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          <div className="bg-[#DFE8FC4D] p-6 rounded-lg flex flex-col gap-4 w-full  pb-10">
            <div>
              <label className="block text-sm primary-text mb-2">
                Enter branch address
              </label>
              <input
                type="text"
                placeholder="3a, Omorinre Johnson Street, Lekki Phase One."
                className="outline-0 bg-white w-full px-4 py-2 secondary-text  border border-[#2254D3] rounded-sm focus:ring-1 focus:ring-[#2254D3] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm primary-text mb-2">
                Emergency phone number
              </label>
              <input
                type="text"
                placeholder="3a, Omorinre Johnson Street, Lekki Phase One."
                className="outline-0 bg-white w-full px-4 py-2 secondary-text  border border-[#2254D3] rounded-sm focus:ring-1 focus:ring-[#2254D3] focus:border-transparent"
              />
            </div>
          </div>
          <div className="bg-[#DFE8FC4D] p-6 rounded-lg flex flex-col gap-4 w-full pb-10">
            <div>
              <label className="block text-sm primary-text mb-2">
                Enter branch address
              </label>
              <input
                type="text"
                placeholder="3a, Omorinre Johnson Street, Lekki Phase One."
                className="outline-0 bg-white w-full px-4 py-2 secondary-text  border border-[#2254D3] rounded-sm focus:ring-1 focus:ring-[#2254D3] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm primary-text mb-2">
                Emergency phone number
              </label>
              <input
                type="text"
                className="outline-0 bg-white w-full px-4 py-2 secondary-text  border border-[#2254D3] rounded-sm focus:ring-1 focus:ring-[#2254D3] focus:border-transparent"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#DFE8FC4D] p-6 rounded-lg flex flex-col gap-4 w-full  pb-10">
            <div>
              <label className="block text-sm primary-text mb-2">
                Enter branch address
              </label>
              <input
                type="text"
                placeholder="3a, Omorinre Johnson Street, Lekki Phase One."
                className="outline-0 bg-white w-full px-4 py-2 secondary-text  border border-[#2254D3] rounded-sm focus:ring-1 focus:ring-[#2254D3] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm primary-text mb-2">
                Select services offered
              </label>
              <input
                type="text"
                placeholder="3a, Omorinre Johnson Street, Lekki Phase One."
                className="outline-0 bg-white w-full px-4 py-2 secondary-text  border border-[#2254D3] rounded-sm focus:ring-1 focus:ring-[#2254D3] focus:border-transparent"
              />
            </div>
          </div>
          <div className="w-full">
            <button className="text-base w-full font-700 text-semibold rounded-lg px-12 py-2 text-white primary-bg cursor-pointer ">
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
