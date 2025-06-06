import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import path from "path";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: "400"
})

export const metadata: Metadata = {
  title: {
    default: "BIOSFERA",
    template: "BIOSFERA | %s",
  },
  description: "BIOSFERA is a platform dedicated to environmental education, wildlife conservation, and inspiring sustainable action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

