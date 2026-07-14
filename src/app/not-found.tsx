import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-300px)] flex-col items-center justify-center bg-white px-4 py-16">
        <Image
          src="/404.png"
          alt="404 page not found"
          width={900}
          height={900}
          priority
          className="h-auto w-full max-w-[900px] animate-pulse-soft object-contain"
        />
        <Link
          href="/"
          className="mt-6 text-sm font-medium text-black transition-opacity hover:opacity-70"
        >
          ↩ Return to Homepage
        </Link>
      </main>
      <Footer />
    </>
  );
}
