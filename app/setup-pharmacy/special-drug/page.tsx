"use client";

import { Check, CheckIcon, ChevronDown, ChevronUp, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SpecialDrug = () => {
  const [expand, setExpand] = useState(false);
  const openExpand = () => {
    setExpand(!expand);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="rounded-md bg-[#F5F8FE] p-3 flex flex-col">
        <div className={` ${expand ? "border-b pb-3" : ""}  border-[#DFE8FC]  flex items-start`}>
          <div className="flex items-center gap-4 flex-1">
           <div className="rounded-md primary-bg flex items-center justify-center p-1">
            <CheckIcon size={12} className="text-white" />
           </div>
            <p className="primary-text text-lg">Antiretrovirals (ARV)</p>
          </div>

          <div onClick={openExpand} className="primary-text">
            {expand ? <ChevronDown /> : <ChevronUp />}
          </div>
        </div>

        {expand && (
          <div className="w-full flex flex-col gap-2 py-4">
            <div className="flex flex-col gap-2">
              {/* <Link href={} */}
              <p className="primary-text text-sm">
                What antiretroviral drugs do you have?
              </p>
              <input
                type="text"
                placeholder="Remdesivir"
                className="outline-0 bg-white w-full px-4 py-2 secondary-text  border border-[#2254D3] rounded-sm focus:ring-1 focus:ring-[#2254D3] focus:border-transparent"
              />

             <div className="flex">
               <div className="flex items-center justify-center gap-2 rounded-full bg-[#DFE8FC] py-1 px-2">
                <div className="primary-bg  text-white flex items-center justify-center rounded-full">
                  <Plus size={16} />
                </div>
                <p className="text-sm primary-text">
                  add another drug
                </p>
              </div>
             </div>
            </div>
            <div className="w-full border-t pt-4 border-[#DFE8FC]">
            <button className="text-base w-full font-700 text-semibold rounded-lg px-12 py-2 text-white primary-bg cursor-pointer ">
              Save
            </button>
          </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialDrug;
