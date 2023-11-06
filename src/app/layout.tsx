import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { APP_NAME } from "@/const/game";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_NAME,
  authors: {
    url: "https://land.osairo.xyz",
    name: "WeDAOLabs",
  },
  keywords: ["fully on-chain game", "web3", "block chain", "Autonomous"],
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  icons: ["/favicon.ico"],
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: "An infinite, unstoppable, decentralized Autonomous  World!",
    images: "https://app.happiairdrop.xyz/osairo-island.png",
    site: "https://osairo.xyz",
  },
  description: "An infinite, unstoppable, decentralized Autonomous  World!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
