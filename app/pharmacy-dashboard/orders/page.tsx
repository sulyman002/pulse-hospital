import { pharmacistList } from "@/app/lib/data";
import { PharmacistData } from "@/app/types/types";
import PharmacistCard from "@/app/ui/PharmacistCard";
import { Plus, Search } from "lucide-react";


const Pharmacy = () => {
  const handleCardClick = (pharmacist: PharmacistData) => {
    console.log("Clicked pharmacist:", pharmacist);
    // Add your logic here (e.g., navigate to detail page, open modal, etc.)
  };
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
