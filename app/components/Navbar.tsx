"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <Link href="/" className="text-2xl font-bold">Alquila360</Link>

      <div className="flex gap-6 text-gray-700">
        <Link href="/properties" className="hover:text-black transition">Propiedades</Link>
        <Link href="/support" className="hover:text-black transition">Soporte</Link>
        <Link href="/login" className="hover:text-black transition">Log in</Link>
      </div>
    </nav>
  );
}

