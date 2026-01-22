import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yeshwanth Portfolio",
  description: "Personal portfolio of Yeshwanth Balaji - Software Developer, AI Engineer, and UI/UX Designer.",
};

import { ProfileProvider } from "@/context/ProfileContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="bg-background text-foreground overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
        <ProfileProvider>
          {children}
        </ProfileProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
