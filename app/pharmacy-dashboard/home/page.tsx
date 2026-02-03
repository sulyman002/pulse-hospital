import Image from "next/image";

const page = () => {
  const userName = "Sulyman";
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const secs = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  // const formattedHoursDisplay = formattedHours < 10 ? `0${formattedHours}` : formattedHours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = secs < 10 ? `0${secs}` : secs;
  const currentTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  return (
    <section className="py-4 px-20 flex flex-col">
      <div className="flex items-center justify-between pb-6 border-b border-[#E6E8EC]">
        <div className="flex items-center">
          <p className="primary-text font-700 font-semibold">HOME</p>
          <div className="h-3.5 w-px primary-bg mx-2"></div>
          <p className="font-700 font-semibold text-[#8E919C]">
            GOOD MORNING, {userName.toLocaleUpperCase()}{" "}
          </p>
        </div>
        <div className="text-base font-500 primary-text">{currentTime}</div>
        <div className="flex items-center gap-1">
          <div className="h-8 w-8 rounded-full bg-black"></div>
          <div className="h-8 w-8 rounded-full bg-black"></div>
        </div>
      </div>
      {/* blue banner */}
      <div className="relative mt-6 rounded-lg primary-bg p-8 overflow-hidden">
        <div className="flex flex-col gap-2">
          <h2 className="font-700 text-xl text-white font-semibold">
            Add Pharmacists
          </h2>
          <p className="w-134 text-base text-white ">
            Provide some basic information to get started.Provide some basic
            information to get started.
          </p>
          <button className="tertiary-bg w-40 py-2 text-white font-700 font-medium text-center rounded-md">
            Add Pharmacist
          </button>
        </div>
        <div className="absolute right-0 bottom-0 h-full w-4/5 pointer-events-none">
          <Image
            src="/blue-banner-pattern.svg"
            alt="Blue Banner"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Order */}
      <div className="bg-[#DFE8FC4D] w-full flex items-center justify-center py-16 mt-6 rounded-xl">
        {/* right line */}
        <div className="h-0.5 w-1/3 bg-[#DDDDDF]"></div>
        {/* Text here */}
        <div className="font-500 text-base text-[#8E919C] mx-4">
          You have no orders
        </div>
        {/* left line */}
        <div className="h-0.5 w-1/3 bg-[#DDDDDF]"></div>
      </div>

      {/* Request */}
      <div className="bg-[#DFE8FC4D] w-full flex items-center justify-center py-16 mt-6 rounded-xl">
        {/* right line */}
        <div className="h-0.5 w-1/3 bg-[#DDDDDF]"></div>
        {/* Text here */}
        <div className="font-500 text-base text-[#8E919C] mx-4">
          You have no pending prescription requests 
        </div>
        {/* left line */}
        <div className="h-0.5 w-1/3 bg-[#DDDDDF]"></div>
      </div>
    </section>
  );
};

export default page;
