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
        <div className="mt-6 rounded-lg primary-bg p-8 "> 
            <div className="flex flex-col">
                


            </div>
        </div>

    </section>
  );
};

export default page;
