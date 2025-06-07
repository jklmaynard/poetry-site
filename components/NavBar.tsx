// app/components/NavBar.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // Optional: icons for hamburger menu

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-lg font-semibold">
            <Link href="/" className="text-gray-700 hover:text-black">
              James Maynard Poetry
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-black">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">
              Books
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/about" className="block py-2 text-gray-700 hover:text-black">
            About
          </Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-black">
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}