// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* الشعار */}
          <div className="text-2xl font-extrabold tracking-widest cursor-pointer select-none">
            <Link href="/">MyStore</Link>
          </div>

          {/* زر القائمة للموبايل */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* روابط القائمة */}
          <div className={`flex-col sm:flex-row sm:flex gap-8 sm:items-center ${isOpen ? "flex" : "hidden"} sm:flex`}>
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-purple-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="px-3 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-purple-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="px-3 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-purple-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Cart
            </Link>
            <Link
              href="/checkout"
              className="px-3 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-purple-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Checkout
            </Link>
            <Link
            href="/contact"
            className="px-3 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-purple-700 transition"
            onClick={() => setIsOpen(false)}
            >
            Contact
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-purple-700 transition"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
