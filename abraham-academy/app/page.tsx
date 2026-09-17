import { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import InstructorsInfo from "@/components/InstructorsInfo";

export const metadata: Metadata = {
  title: "Online Tutoring for Grades 1–12 | Math, Science, Coding & Tajweed",
  description:
    "Unlock academic success from home! Abraham Online Academy offers certified 1-on-1 virtual tutoring tailored for UK, UAE, USA, and global curricula.",
  alternates: {
    canonical: "https://abrahamonlineacademy.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <InstructorsInfo />
    </>
  );
}