import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BYL Kanban Board",
  description: "A Kanban board for managing tasks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased py-4 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64`}
      >
        <Link href="/">
          <h1 className="text-4xl font-bold text-center mb-8">BYL Kanban Board</h1>
        </Link>
        {children}
      </body>
    </html>
  );
}
