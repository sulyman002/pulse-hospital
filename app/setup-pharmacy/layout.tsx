"use client";

import { usePathname, useRouter } from "next/navigation";
import { tabs } from "../lib/data";

const SetupLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <main className="bg-gray-50 min-h-screen p-8">
      <div className="mx-auto max-w-6xl ">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white">
              H
            </div>
            <div>
              <h1 className="text-xl secondary-text font-700 font-bold">
                Setup Hospital
              </h1>
              <p className="text-sm text-[#8E919C]">Supply some information</p>
            </div>
          </div>
        </div>

        {/* Main Container */}
    <div className="bg-white space-y-6 rounded-lg border border-[#DFE8FC] p-4">
          {/* Tab Navigation */}
          <div className="flex flex-col md:flex-row md:gap-0 gap-6 items-center border-b border-[#E6E8EC] ">
            <div className="gap-8 flex flex-1">
                {tabs.map((tab) => {
              const isActive = pathname === tab.path;
              return (
                <button
                  key={tab.path}
                  onClick={() => router.push(tab.path)}
                  className={`
                    pb-4 px-2 text-sm font-medium transition-colors cursor-pointer relative
                    ${
                      isActive
                        ? "primary-text text-base"
                        : "text-[#8E919C] hover:text-gray-700"
                    }
                  `}
                >
                  {tab.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 primary-bg" />
                  )}
                </button>
              );
            })}
            </div>
            <div className="flex w-full md:w-auto">
                <button className="text-base w-full font-700 text-semibold rounded-lg px-12 py-1 text-white tertiary-bg cursor-pointer ">Next</button>
            </div>
          </div>

          {/* Tab Content */}
          {children}
        </div>
      </div>
    </main>
  );
};

export default SetupLayout;


