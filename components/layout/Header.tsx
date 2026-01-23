'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/98 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative w-10 h-10">
            <Image
              src="/images/7layer-logo-removebg-preview.png"
              alt="7Layers Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="hidden sm:inline font-bold text-lg tracking-tight">7Layers</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden sm:inline-block px-6 py-2 bg-gradient-to-r from-accent to-accent/80 text-primary rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-md"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card/80 backdrop-blur">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors py-3 border-b border-border/30 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-primary rounded-full text-sm font-semibold text-center mt-4 hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
