import { Plus, Search } from "lucide-react";
import React from "react";

const Pharmacy = () => {
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
    </section>
  );
};

export default Pharmacy;
