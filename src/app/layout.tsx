import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";

const DMSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "K-Tool Malaysia",
  description: "World class precision engineering and tooling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DMSans.className} antialiased bg-[#FBFBFB]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
