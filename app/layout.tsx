import type { Metadata } from "next";
import { Inter, Crimson_Pro, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { CookieToast } from '@/components/cookie-toast';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson-pro",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "The Coffee Project",
  description: "Strengthening local coffee culture around you. One sip at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimsonPro.variable} ${inter.variable} bg-[#FCFAF7] antialiased`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-16 ">
          {children}
        </div>
        <Analytics />
        <CookieToast />
      </body>
    </html>
  );
}
