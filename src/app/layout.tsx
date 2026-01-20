import type { Metadata } from "next";
import "./globals.css";
import "../styles/reset.css"
import {Montserrat} from 'next/font/google'
import {Header} from "@/components/header/Header";

const montserrat = Montserrat({
    subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Next Movie App"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header/>
        {children}
      </body>
    </html>
  );
}
