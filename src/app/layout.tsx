import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/ui/navbar";
import "./globals.css";
import "boxicons/css/boxicons.min.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: [ "300"]
});

export const metadata: Metadata = {
  title: "Paguyuban KSE Unila",
  description: "Generated by Rafly"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased overflow-x-hidden bg-slate-200`}
      >
        <Navbar />  
        {children}
      </body>
    </html>
  );
}
