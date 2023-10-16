import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { RainbowKitContextProvider } from "@/context/rainbowKitContext";
import StyledComponentsRegistry from "./registry";

const sfRounded = localFont({
  src: [
    {
      path: ".././assets/fonts/SFProRounded/SF-Pro-Rounded-Ultralight.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: ".././assets/fonts/SFProRounded/SF-Pro-Rounded-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: ".././assets/fonts/SFProRounded/SF-Pro-Rounded-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: ".././assets/fonts/SFProRounded/SF-Pro-Rounded-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: ".././assets/fonts/SFProRounded/SF-Pro-Rounded-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: ".././assets/fonts/SFProRounded/SF-Pro-Rounded-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: ".././assets/fonts/SFProRounded/SF-Pro-Rounded-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: ".././assets/fonts/SFProRounded/SF-Pro-Rounded-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: ".././assets/fonts/SFProRounded/SF-Pro-Rounded-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

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
      <body className={sfRounded.className}>
        <RainbowKitContextProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </RainbowKitContextProvider>
      </body>
    </html>
  );
}
