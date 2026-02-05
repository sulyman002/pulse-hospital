import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface PharmacistCardProps {
  cardImage: string;
  name: string;
  altText?: string;
  onCardClick?: () => void;
  className?: string;
}

const PharmacistCard = ({
  cardImage,
  name,
  altText,
  onCardClick,
  className = "",
}: PharmacistCardProps) => {
  return (
    <div
      className={`rounded-md bg-[#DFE8FC4D] relative group py-8 cursor-pointer transition-all hover:shadow-md ${className}`}
      onClick={onCardClick}
    >
      <div className="absolute group:hover top-3 right-3 h-5 w-5 rounded-full bg-[#DFE8FC] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ChevronDown size={16} className="primary-text" />
      </div>
      <div className="flex items-center justify-center flex-col gap-4">
        <div className="h-30 w-30 rounded-full relative overflow-hidden shrink-0">
          <Image
            src={cardImage}
            alt={altText || `${name}'s profile picture`}
            fill
            className="object-cover"
          />
        </div>
        <p className="font-500 text-base primary-text">{name}</p>
      </div>
    </div>
  );
};

export default PharmacistCard;
