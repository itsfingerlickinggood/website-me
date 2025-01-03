"use client";
import React from "react";
import Link from "next/link"; // Import Link to handle routing

export default function Home() {
  const items = [
    { title: "Sketches", emoji: "🐼", href: "/sketches" },
    { title: "Blog", emoji: "📒", href: "/blog" },
    { title: "Research", emoji: "🧮", href: "/research" },
    { title: "Photos", emoji: "🖼️", href: "/photos" },
    { title: "File", emoji: "📂", href: "/file" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-8">Sonu Babu.</h1>

      <div className="grid gap-4 text-center">
        {items.map(({ title, emoji, href }, index) => (
          <Link key={index} href={href}>
            <div className="relative bg-white rounded-lg shadow-md p-4 group transition-all duration-300 ease-in-out hover:z-20">
              <h2 className="text-lg font-medium flex items-center justify-between transition-opacity duration-300 group-hover:opacity-100">
                <span className="mr-2">{title}</span>
                <span className="ml-2 text-3xl">{emoji}</span>
              </h2>
            </div>
          </Link>
        ))}
      </div>

      <h3 className="text-sm text-gray-600 mt-8 z-10">[2005].</h3>
    </div>
  );
}
