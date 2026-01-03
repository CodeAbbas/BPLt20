import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google"; // Changed fonts
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter' 
});

const oswald = Oswald({ 
  subsets: ["latin"], 
  variable: '--font-oswald' 
});

export const metadata: Metadata = {
  title: {
    template: '%s | BPL T20',
    default: 'BPL T20 2026 - Live Scores & Stats',
  },
  description: 'Official Bangladesh Premier League Updates',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}