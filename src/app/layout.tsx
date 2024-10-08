import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar/navbar";
import { Footer } from "@/components/layout/footer/footer";
import { RootProvider } from "@/components/layout/providers/rootProvider";
import { TokenInfo } from "@/components/wallet/tokenInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vaccine",
  description: "Vaccine",
  icons: [{
    rel: 'apple-touch-icon',
    sizes: '180x180',
    url: '/apple-touch-icon.png'
  },
  {
    rel: 'icon',
    sizes: '32x32',
    type: 'image/png',
    url: '/favicon-32x32.png'
  },
  {
    rel: 'icon',
    sizes: '16x16',
    type: 'image/png',
    url: '/favicon-16x16.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    url: '/apple-touch-icon.png'
  },
  {
    rel: 'mask-icon',
    color: '#050223',
    url: '/safari-pinned-tab.svg'
  }],
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} relative overflow-x-clip`}>
        <RootProvider>
          <TokenInfo />

          <Navbar />
          {children}
          <Footer />
        </RootProvider>
      </body>
    </html>
  );
}
