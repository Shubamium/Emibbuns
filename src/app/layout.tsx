import type { Metadata } from "next";
import {  Quicksand,Patrick_Hand } from "next/font/google";
import "./globals.scss";
import Navigation from "./components/navigation/Navigation";
import { CSSProperties } from "react";
import Loading from "./components/loading/Loading";
import Presence from "./components/presence/Presence";
import NavigationData from "./components/navigationData/NavigationData";

const quicksand = Quicksand({ subsets: ["latin"] });
const patrick = Patrick_Hand({ weight:['400'],subsets: ["latin"] });


const meta = {
	title: "𓍢ִ໋ emi's garden ⋆｡˚♡𓍢ִ໋🌷͙֒✧˚",
  description: `
	Emibbuns is a golden bunny girl with a heart full of love ♡ She can't wait to bring a smile to your face ⋆ ˚｡⋆୨୧˚ Catch her often on Twitch & YouTube where she'll talk your ear off! C'mon it'll be fun! Click here to meet her and her garden family ⋆ ˚｡⋆୨୧˚
	`,
}


const title = meta.title

const description = meta.description
const banner = 'https://i.ibb.co/4Vq3dQ0/banner.jpg'

export const metadata: Metadata = {
	title: title,

	metadataBase: new URL('https://emibbuns.com'),

	openGraph:{
		url:'https://emibbuns.com',
		title:title,
		description:description,
		authors:"shubamium",
		images:[
			banner
		]
	},
		twitter:{
		title:title,
		card:'summary_large_image',
		images:[
			banner
		]
	},
	description: description
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className} style={{'--fontAlt':patrick.style.fontFamily,'--fontMain':quicksand.style.fontFamily } as CSSProperties}>
				<div className="bg-sky ni"></div>
				<img src="/backgrounds/forestry.png" className="bg_mt ni" alt="" />
				<Presence>
					{children}
				</Presence>
				<NavigationData/>
				<Loading/>
			</body>
    </html>
  );
}
