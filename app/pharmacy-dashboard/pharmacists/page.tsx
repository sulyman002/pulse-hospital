"use client";

import { ArrowLeft, ChevronDown, Plus } from "lucide-react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { useState } from "react";

const Pharmacists = () => {
  const methods = [
    { id: 1, name: "Other methods" },
    { id: 2, name: "First method" },
    { id: 3, name: "Second method" },
    { id: 4, name: "Third method" },
    { id: 5, name: "Fourth method" },
  ];
  const [method, setMethod] = useState(methods[0]);
  return (
    <section className="py-4 px-20 flex flex-col">
      <div className="flex items-center justify-between pb-6 border-b border-[#E6E8EC]">
        <div className="flex items-center gap-5">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#DFE8FC]">
            <ArrowLeft size={16} className="primary-text" />
          </div>
          <p className="secondary-text font-500 text-base uppercase font-medium">
            Add Pharmacists
          </p>
        </div>

        <div className="flex items-center gap-1">
          <div className="h-8 w-8 rounded-full bg-black"></div>
          <div className="h-8 w-8 rounded-full bg-black"></div>
        </div>
      </div>

      {/* via-email */}

      <div className="flex justify-between mt-6">
        <div className="flex flex-col flex-1">
          <h3 className="secondary-text font-500 text-xl">Invite via email</h3>
          <p className="font-400 text-base text-[#8E919C] ">
            Enter the work email and staff number of pharmacists to send an
            invite
          </p>
        </div>

        <Listbox value={method} onChange={setMethod}>
          <div className="relative">
            <ListboxButton
              className={`flex items-center rounded-lg bg-[#071232] p-2 gap-6`}
            >
              <p className="text-white text-base">{method.name}</p>
              <div className="flex items-center justify-center h-6 w-6 rounded-md bg-[#DFE8FC36]">
                <ChevronDown size={12} className="text-white cursor-pointer" />
              </div>
            </ListboxButton>
            <ListboxOptions className="absolute mt-1 max-height-60 w-full overflow-auto rounded-md bg-[#071232] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {methods.map((method) => (
                <ListboxOption
                  value={method}
                  key={method.id}
                  className={({ focus }) => `
                  relative cursor-pointer select-none py-2 pl-4 text-sm ${
                    focus ? "bg-[#42485c] text-white" : "text-white"
                  }
                  `}
                >
                  {method.name}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
      <div className="bg-[#DFE8FC4D] rounded-lg p-4 grid grid-cols-2 w-2/3 mt-6 gap-6 ">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col w-full gap-2">
            <label className="primary-text text-sm ">Email address</label>
            <input
              type="email"
              className="outline-none py-2 px-2 rounded-sm bg-white secondary-text focus:ring-[#2254D3] focus:ring-1"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="primary-text text-sm ">Email address</label>
            <input
              type="email"
              className="outline-none py-2 px-2 rounded-sm bg-white secondary-text focus:ring-[#2254D3] focus:ring-1"
            />
          </div>
          <div className="flex">
            <div className="flex items-center justify-center bg-full py-1 px-2 bg-[#DFE8FC] gap-2 rounded-full">
              <div className="flex items-center justify-center  primary-bg rounded-full">
                <Plus size={24} className="text-white" />
              </div>
              <p className="text-base font-500 primary-text">Add another</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col w-full gap-2">
            <label className="primary-text text-sm ">
              Staff/Employee number
            </label>
            <input
              type="number"
              className="outline-none py-2 px-2 rounded-sm bg-white secondary-text focus:ring-[#2254D3] focus:ring-1"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="primary-text text-sm ">
              Staff/Employee number
            </label>
            <input
              type="number"
              className="outline-none py-2 px-2 rounded-sm bg-white secondary-text focus:ring-[#2254D3] focus:ring-1"
            />
          </div>

          <div className="flex w-full mt-6">
            <button className="text-base w-full font-700 text-semibold rounded-lg px-12 py-1 text-white primary-bg cursor-pointer ">
              Send invites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pharmacists;
