import type { Metadata } from "next";
import "./globals.css";
import "../styles/reset.css"
import {Montserrat} from 'next/font/google'
import {Providers} from "@/app/providers";
import {Header} from "@/components/Header/Header";

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
          <Providers>
          <Header/>
            {children}
          </Providers>
      </body>
    </html>
  );
}
