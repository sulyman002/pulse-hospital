"use client";

import { listboxSort, pharmacistList } from "@/app/lib/data";
import { PharmacistData } from "@/app/types/types";
import PharmacistCard from "@/app/ui/PharmacistCard";
import { ChevronDown, Plus, Search } from "lucide-react";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { useState } from "react";

const Pharmacy = () => {
  const handleCardClick = (pharmacist: PharmacistData) => {
    console.log("Clicked pharmacist:", pharmacist);
    // Add your logic here (e.g., navigate to detail page, open modal, etc.)
  };

  const [sort, setSort] = useState(listboxSort[0])
  return (
    <section className="py-4 px-20 flex flex-col">
      <div className="flex items-center justify-between pb-6 border-b border-[#E6E8EC]">
        <p className="secondary-text font-700 font-semibold uppercase">
          Pharmacists
        </p>

        <div className="flex items-center gap-1">
          <div className="h-8 w-8 rounded-full bg-black"></div>
          <div className="h-8 w-8 rounded-full bg-black"></div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {/* Two buttons */}
        {/* Listbox button */}
        <Listbox value={sort} onChange={setSort}>
          <div className="relative">
            <ListboxButton
              className={`flex items-center rounded-lg bg-[#071232] py-1 px-2 gap-6`}
            >
              <p className="text-white text-sm">{sort.name}</p>
              <div className="flex items-center justify-center h-6 w-6 rounded-md bg-[#DFE8FC36]">
                <ChevronDown size={12} className="text-white cursor-pointer" />
              </div>
            </ListboxButton>
            <ListboxOptions className="absolute mt-1 z-99 max-height-60 w-full overflow-auto rounded-md bg-[#071232] py-1 px-2 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {listboxSort.map((sort) => (
                <ListboxOption
                  value={sort}
                  key={sort.id}
                  className={({ focus }) => `
                  relative cursor-pointer select-none py-2 pl-4 text-sm ${
                    focus ? "bg-[#42485c] text-white" : "text-white"
                  }
                  `}
                >
                  {sort.name}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
        {/* Green button */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center tertiary-bg rounded-lg text-white gap-1 py-1 px-4">
            <div className="rounded-md bg-[#18BD78] p-1">
              <Plus size={14} className="text-white" />
            </div>
            <p className="font-800 text-base text-white">Add</p>
          </div>
        </div>
        {/* Search Bar */}
        <div className="flex-1 flex items-center gap-1 rounded-sm bg-[#F3F4F8]">
          <input
            type="text"
            placeholder="Search  for a pharmacist"
            className="w-full outline-0 py-2 px-3 placeholder:text-sm placeholder:text-[#828A95] secondary-text"
          />
          <Search
            size={20}
            className="mx-4 cursor-pointer hover:scale-109 transition duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        {/* Pharmacist Cards will go here */}
        {pharmacistList.map((pharmacist) => (
          <PharmacistCard
            key={pharmacist.id}
            cardImage={pharmacist.cardImage}
            name={pharmacist.name}
            altText={`${pharmacist.name}'s profile`}
            onCardClick={() => handleCardClick(pharmacist)}
          />
        ))}
      </div>
    </section>
  );
};

export default Pharmacy;
