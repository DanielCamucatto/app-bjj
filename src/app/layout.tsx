import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "./contexts/ThemeContext";
import "../app/styles/globals.css";
import Header from "../app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import InstallPWA from "@/app/services/pwa";
import ServiceWorkerRegistration from "../app/services/serviceWorker";

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
  title: "Rafael Riello BJJ",
  description: "Página oficial do Rafael Riello BJJ",
  icons: {
    icon: '/favicon.ico',
    apple: '/icon-192x192.png',
  },
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <InstallPWA />
          <ServiceWorkerRegistration />
        </body>
      </ThemeProvider>
    </html>
  );
}
