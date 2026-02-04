import { ChevronDown } from "lucide-react";
import Image from "next/image";

const PharmacistCard = ({cardImage, name}) => {
  return (
    <div className="rounded-md bg-[#DFE8FC4D] relative group p-5">
      <div className="absolute group:hover top-5 right-5 h-5 w-5 rounded-full bg-[#DFE8FC] ">
        <ChevronDown size={16} />
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="h-30 w-30 rounded-full">
          <Image src={cardImage} alt="pharmacy card" fill className="object-cover" />
        </div>
        <p className="font-500 text-base primary-text">{name}</p>
      </div>
    </div>
  );
};

export default PharmacistCard;
