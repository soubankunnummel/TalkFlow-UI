import type { Metadata } from "next";
import { Inter, } from "next/font/google";
import "./globals.css";
import Nave from "./components/Navebar/Nave";
import Footer from "./components/Footer/Footer";
import StoreProvider from "@/lib/providers/StoreProvider";
import ToastProvider from "@/lib/providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest:"/manifest.json",
  title: "TalkFlow",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primery text-white ">
      <body className={inter.className}>
        <StoreProvider>{children}</StoreProvider>
        <ToastProvider/>
      </body>
    </html>
  );
}
