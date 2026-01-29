import { Eye, Key } from "lucide-react";

const page = () => {
  return (
    <section className="min-h-screen bg-blue-50">
      <div className="mx-auto max-w-7xl pt-16 md:pt-30">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-30 w-full px-5 md:px-16">
          {/* welcome info */}
          <div className="flex flex-col gap-16 pt-8">
            <div className="space-y-4">
              <h1 className="font-800 text-6xl font-bold secondary-text">
                Create an account
              </h1>
              <p className="font-500 text-3xl primary-text flex max-w-70">
                Provide some basic information to get started.
              </p>
            </div>
            
          </div>
          {/* Login form */}

          <div className="rounded-xl h-auto py-5 border border-[#DFE8FC] drop-shadow-2xl shadow-2xl flex flex-col gap-10 w-full">
            <div className="flex items-center gap-4 border-b border-gray-300 pb-5 px-5">
              <div className="rounded-3.75 p-1 flex items-center justify-center bg-[#DFE8FC]">
                <Key size={24} className="primary-text" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className={`secondary-text text-1xl`}>Sign up</h3>
                <p className="font-500 text-xs text-[#8E919C]">
                  Setup your practice
                </p>
              </div>
            </div>

            <form className="flex flex-col gap-5 w-full px-5">
              {/* practice name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="practiceName"
                  className="text-[#8E919C] font-500 text-sm"
                >
                  Practice name
                </label>
                {/* i will later implement RHF here */}
                <input
                  type="text"
                  name="practiceName"
                  id="practiceName"
                  placeholder="St Luke's Hospital"
                  className="border border-[#DFE8FC] focus:border-[#2254D3] px-2 py-2 rounded-md outline-[#2254D3] secondary-text placeholder:text-[#7b7e86] text-base"
                />
              </div>
              {/* email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[#8E919C] font-500 text-sm"
                >
                  Email
                </label>
                {/* i will later implement RHF here */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="border border-[#DFE8FC] focus:border-[#2254D3] px-2 py-2 rounded-md outline-[#2254D3] secondary-text placeholder:text-[#7b7e86] text-base"
                />
              </div>
              {/* phone number */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phoneNumber"
                  className="text-[#8E919C] font-500 text-sm"
                >
                  Phone number
                </label>
                {/* i will later implement RHF here */}
                <input
                  type="number"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="08012345678"
                  className="border border-[#DFE8FC] focus:border-[#2254D3] px-2 py-2 rounded-md outline-[#2254D3] secondary-text placeholder:text-[#7b7e86] text-base"
                />
              </div>

              {/* password */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="text-[#8E919C] font-500 text-sm"
                >
                  Password
                </label>
                {/* i will later implement RHF here */}
                <div className="flex items-center border border-[#DFE8FC] focus:border-[#2254D3] px-2 py-2 rounded-md outline-[#2254D3]">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="outline-0 secondary-text placeholder:text-[#7b7e86] text-base flex-1"
                  />
                  <Eye size={24} className="text-[#8E919C]" />
                </div>
              </div>

              <button className="primary-bg text-base font-700 text-semibold text-white py-2 px-4 rounded-md outline-0">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
