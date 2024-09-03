import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="bg-slate-200 max-w-7xl mx-auto shadow-xl border-1 min-h-[52rem] border-gray-600">
          <Header />
          {children}
        </div>
        <footer className="max-w-7xl mx-auto bg-orange-500 p-10 text-center text-slate-200">
          Footer
        </footer>
      </body>
    </html>
  );
}
