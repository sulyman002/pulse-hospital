import localFont from "next/font/local";
import { Sofia } from "next/font/google";


export const sofia = Sofia({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-sofia",
});

const metropolis = localFont({
    src: [
        {
            path: "../../public/woff2/Metropolis-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/woff2/Metropolis-SemiBold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/woff2/Metropolis-Bold.woff2",
            weight: "700",
            style: "normal",
        }

    ],
    variable: "--font-metropolis",
});

export { metropolis };