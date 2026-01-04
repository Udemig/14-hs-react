import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Bu metadata bütün sayfalara etki eder
export const metadata = {
  title: { default: "Amazon", template: "Amazon | %s" },
  description: "Amazon en popüler alışveri sitesidir...",
  keywords: ["amazon", "alışveriş", "elektronik"],
  author: "Furkan Evin",
  robots: "index,follow",
  openGraph: {
    title: "Amazon",
    description: "açıklama",
    images: ["www.resim.com"],
  },
};

// Projedeki bütün sayfaları kapsayan
// Bütün sayfaların ortak elementlerini tanımlayabileceğimiz root layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
