import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SchemaMarkup from "../components/SchemaMarkup";
import "./globals.css";

const siteUrl = "https://abrahamonlineacademy.vercel.app";

export const viewport: Viewport = {
  themeColor: "#001a41",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Abraham Online Academy | Global Education Without Borders (Grades 1–12)",
    template: "%s | Abraham Online Academy",
  },
  description:
    "World-class virtual education for Grades 1–12 across the UK, UAE, USA, Canada, Australia, and Saudi Arabia. Certified expert 1-on-1 tutors in Math, Science, Coding, English & Tajweed.",
  keywords: [
    "Abraham Online Academy",
    "Online Tutoring Grades 1-12",
    "Global Virtual School",
    "GCSE IGCSE Math Tutor",
    "AP SAT Preparation Online",
    "Learn Coding for Kids Python",
    "Online Tajweed and Quran Classes",
    "UK UAE USA Online School",
    "Personalized 1-on-1 Tutoring",
  ],
  authors: [{ name: "Tayyaba Amna (Founder)", url: siteUrl }],
  creator: "Abraham Online Academy",
  publisher: "Abraham Online Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abraham Online Academy",
    title: "Abraham Online Academy | Global Education Without Borders",
    description:
      "Empowering Grade 1–12 students globally with certified expert tutors in Math, Physics, Chemistry, Coding, English, and Tajweed.",
    images: [
      {
        url: `${siteUrl}/banner.png`,
        width: 1200,
        height: 630,
        alt: "Abraham Online Academy - Global Education Without Borders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abraham Online Academy | Global Virtual Tutoring (Grades 1–12)",
    description:
      "High-impact 1-on-1 virtual learning for students in the UK, UAE, USA, Canada, and Australia.",
    images: [`${siteUrl}/banner.png`],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <SchemaMarkup />
      </head>
      <body className="antialiased bg-white text-slate-900 font-sans">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}