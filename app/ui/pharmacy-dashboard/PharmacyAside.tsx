
import { pharmacyDashboardTabs } from "@/app/lib/data"
import * as Icons from "lucide-react"
import Image from "next/image"


const PharmacyAside = () => {
  return (
    <section className="w-48 flex flex-col bg-[#8C92A3]/40">
        {/* pattern */}
        <div className=""></div>
        {/* Menus */}
        <div className="flex flex-col">
            <div className="flex flex-1 flex-col gap-6">
                {
                    pharmacyDashboardTabs.map((tab, index) => {
                        const Icon = Icons[tab.icon as keyof typeof Icons];
                        return (
                        <div key={index} className="flex items-center gap-2 rounded-lg p-2">
                            <Icon size={20} />
                            <p className="text-base font-500">{tab.name}</p>

                        </div>
                    )
                    })
                }
            </div>
            <div className="flex items-center justify-center">
                <Image src="/sign-out.svg" alt="sign-out" width={24} height={24} />
                <p className="text-[#F01919] text-base font-500">Logout</p>
            </div>
        </div>
        {/* pattern */}
        <div className=""></div>
    </section>
  )
}

export default PharmacyAside