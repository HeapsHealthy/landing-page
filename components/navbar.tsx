"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative px-6 py-5 md:px-12">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-handwriting text-4xl font-bold text-[#FAF7F2]"
          style={{
            WebkitTextStroke: "1.5px #7A8F6B",
            paintOrder: "stroke fill",
          }}
        >
          Heaps Healthy
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-[#C46A4A] ${
                pathname === item.href ? "text-[#2E2B27]" : "text-[#5E5A54]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#2E2B27] transition-colors hover:bg-[#EFE6DA] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav className="absolute left-0 right-0 top-full z-50 border-b border-[#EFE6DA] bg-[#FAF7F2] px-6 pb-4 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors hover:text-[#C46A4A] ${
                pathname === item.href ? "text-[#2E2B27]" : "text-[#5E5A54]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
