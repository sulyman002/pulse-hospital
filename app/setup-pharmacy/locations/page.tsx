"use client";

import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { ChevronDownIcon } from "lucide-react";
import { people } from "@/app/lib/data";
import { useState } from "react";

const Locations = () => {
const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <label className="block text-sm text-[#8E919C] mb-2">
          Select number of locations
        </label>
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
          <div className="relative mt-1 w-72">
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
    </section>
  );
};

export default Locations;
