import { Metadata } from "next";

import { Montserrat, Josefin_Sans } from "next/font/google";

import { Footer, Navbar } from "@/components";

import { ThemeProvider } from "@/providers";

import "./globals.css";

const josefin_sans = Josefin_Sans({
  variable: "--josefin-sans-font",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--montserrat-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piaic-farasat.vercel.app"),
  title: "PIAIC - Modernizing Pakistan with Cutting-Edge Technologies",
  description:
    "The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.",
  keywords:
    "PIAIC, Presidential Initiative for Artificial Intelligence & Computing, full stack, web development, cloud computing, web3, experience, professional, mern, mern stack, mernstack, jamstack, next, nextjs, jam stack, serverless, netlify, vercel, solidity, ethereum, truffle, hardhat, bnb, gas optimization, smart contract, smart contract auditor, polygon, matic, google cloud, google cloud platform, gcp, amazon web services, aws, amazon cloud, divine, divine virtuality, fiverr, upwork, freelancing, programming, tech",
  openGraph: {
    title: "PIAIC - Modernizing Pakistan with Cutting-Edge Technologies",
    description:
      "The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
        alt: "PIAIC Logo  ",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "logo.png",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${montserrat.variable}  ${josefin_sans.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
