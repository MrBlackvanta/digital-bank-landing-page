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
const cardImages = [
  {
    url: "/opengraph-image.jpg",
    width: 1200,
    height: 630,
    alt: "The Digitalbank app on four phone screens",
  },
];

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
    images: cardImages,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: cardImages,
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
