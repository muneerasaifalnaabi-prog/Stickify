import type { Metadata } from "next";
import { Inter, Titan_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const titanOne = Titan_One({
  variable: "--font-titan",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Your Unique Custom Sticker - Stickify",
  description: "Create custom stickers with a bold hand-drawn meme aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${titanOne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
