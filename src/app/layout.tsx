import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ByteHub",
  description: "ByteHub is a learning platform for tech enthusiasts to build skills in foundational subjects like Computer Networks and Operating Systems, and explore trending fields like Machine Learning and Cloud Computing. Perfect for interview prep, ByteHub provides interactive tools for hands-on learning and upskilling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col items-center">
          <Header />
          <div className="xl:w-[80%] max-xl:w-full max-xl:p-5">
          {children}
          </div>
 
        </div>

      </body>
    </html>
  );
}
