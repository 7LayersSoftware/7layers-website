import Link from 'next/link'
import Image from 'next/image'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Solutions: [
      { label: 'Cloud Migration', href: '/solutions' },
      { label: 'Infrastructure', href: '/solutions' },
      { label: 'Security', href: '/solutions' },
      { label: 'Consulting', href: '/solutions' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
    ],
  }

  return (
    <footer className="border-t border-border bg-background text-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/7layer-logo-removebg-preview.png"
                  alt="7Layers Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg tracking-tight">7Layers</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Enterprise IT infrastructure solutions engineered for Fortune 500 companies. We architect systems that scale infinitely.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 group"
              >
                <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 group"
              >
                <Github size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-6 text-foreground uppercase text-sm tracking-widest">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                    >
                      {link.label}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-foreground/60">
          <p>&copy; {currentYear} 7Layers. All rights reserved.</p>
          <p className="text-accent font-medium">Engineering Enterprise Excellence</p>
        </div>
      </div>
    </footer>
  )
}
