import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SkipLink from "@/components/layout/SkipLink";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { siteConfig } from "@/config";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body
      suppressHydrationWarning
      className="bg-light text-dark font-primary flex min-h-screen w-full flex-col">
        <SmoothScrollProvider>
          <SkipLink />
          <Navbar />
          <main id="main" className="w-full flex-1">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
