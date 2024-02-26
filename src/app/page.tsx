"use client";
import Feature from "@/components/Features";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Feature />
    </main>
  );
}
