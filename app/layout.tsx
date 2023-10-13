import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import { RainbowKitContextProvider } from "@/context/rainbowKitContext";

const roboto = Roboto_Flex({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "The Agents",
  description: "AgentsDAO powered by web3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <RainbowKitContextProvider>{children}</RainbowKitContextProvider>
      </body>
    </html>
  );
}
