import { Key } from "lucide-react";

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
                Complete signup
              </h1>
              <p className="font-500 text-3xl primary-text flex max-w-90">
                Select your type of practice to complete your registration
              </p>
            </div>
          </div>
          {/* Login form */}

          <div className="rounded-xl h-auto py-5 border border-[#DFE8FC] drop-shadow-2xl shadow-2xl flex flex-col gap-10 w-full">
            <div className="flex items-center gap-4 border-b border-gray-300 pb-5 px-5">
              <div className="rounded-3.75 p-1 flex items-center justify-center bg-[#DFE8FC]">
                <Key size={24} className="primary-text" />
              </div>

              <h3 className={`secondary-text text-1xl`}>
                Select your practice type
              </h3>
            </div>

            <form className="flex flex-col gap-5 w-full px-5">
              {/* Listbox will be here */}

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
