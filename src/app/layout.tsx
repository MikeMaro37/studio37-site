import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mike Maro — Art Director & CG Supervisor",
  description:
    "Commercials for modern brands. Art direction, CG supervision and AI video production for fashion, sport and lifestyle.",
  metadataBase: new URL("https://mikemaro.com"),
  openGraph: {
    title: "Mike Maro — Art Director & CG Supervisor",
    description: "Commercials for modern brands.",
    url: "https://mikemaro.com",
    siteName: "Mike Maro",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}