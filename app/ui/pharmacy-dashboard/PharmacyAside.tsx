"use client"
import { pharmacyDashboardTabs } from "@/app/lib/data"
import * as Icons from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
    


const PharmacyAside = () => {

    const pathname = usePathname();


  return (
    <aside className="w-48 flex flex-col bg-[#8C92A3]/40">
        {/* pattern */}
        <div className=""></div>
        {/* Menus */}
        <div className="flex flex-col">
            <div className="flex flex-1 flex-col gap-6">
                {
                    pharmacyDashboardTabs.map((tab, index) => {
                        const Icon = Icons[tab.icon as keyof typeof Icons] as Icons.LucideIcon;
                        const isActive = pathname.startsWith(tab.path);
                        return (
                        <Link href={tab.path} key={index} className={`flex items-center gap-2 rounded-lg p-2 ${isActive ? "bg-[#DFE8FC] primary-text" : "text-[#8E919C]"}`}>
                            <Icon size={20} />
                            <p className="text-base font-500">{tab.title}</p>
                        </Link>
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
    </aside>
  )
}

export default PharmacyAside