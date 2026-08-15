import type { Metadata, Viewport } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const name = "Digitalbank";
const title = `${name} | Next generation digital banking`;
const description =
  "Take your financial life online. One Digitalbank account for spending, saving, budgeting, investing, and much more.";
const siteUrl =
  "https://digital-bank-landing-page.abdelrhman-ahmed8881.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2d314d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${publicSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
