import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google"; // 1. Import correct fonts
import Navbar from "@/components/Navbar";
import "./globals.css";

// 2. Configure Inter (Body text)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// 3. Configure Oswald (Headings/Scores)
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "BPL T20 | Official Stats & Scores",
  description: "Live scores, points table, and stats for BPL Season 12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${oswald.variable} font-sans bg-gradient-to-br from-gray-900 to-gray-800 text-slate-900`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}