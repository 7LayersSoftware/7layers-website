'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArrowRight, ArrowUpRight, Shield, Zap, TrendingUp, Users, Lock, Code } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { width, height } = heroRef.current.getBoundingClientRect()
      const x = (clientX / width - 0.5) * 20
      const y = (clientY / height - 0.5) * 20
      heroRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const solutions = [
    {
      icon: Zap,
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud infrastructure with zero downtime.',
      image: '/images/cloud-migration.jpg',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security infrastructure and regulatory compliance.',
      image: '/images/security-infrastructure.jpg',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Maximize infrastructure efficiency and reduce operational costs.',
      image: '/images/digital-transformation.jpg',
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'Expert engineers to scale your technical capabilities.',
      image: '/images/enterprise-solutions.jpg',
    },
    {
      icon: Lock,
      title: 'Data Architecture',
      description: 'Scalable, secure data infrastructure for modern applications.',
      image: '/images/security-infrastructure.jpg',
    },
    {
      icon: Code,
      title: 'DevOps & Automation',
      description: 'Streamline deployment pipelines and infrastructure management.',
      image: '/images/cloud-migration.jpg',
    },
  ]

  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Enterprise Clients', value: '150+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Uptime Guarantee', value: '99.99%' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden">
      <Header />

      {/* Hero Section - Premium Dark with Layered Image */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-infrastructure.jpg"
            alt="Infrastructure"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center text-center max-w-5xl">
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent">Engineered for Enterprise Scale</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8 text-balance animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Architecture <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/60">Beyond Limits</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-12 text-balance animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Enterprise IT infrastructure solutions engineered for Fortune 500 companies. We architect systems that scale infinitely while maintaining security and performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-accent text-primary rounded-full font-semibold overflow-hidden hover:shadow-2xl transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <span className="relative z-10">Start Your Transformation</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link
              href="/projects"
              className="group px-8 py-4 border-2 border-accent/30 text-foreground rounded-full font-semibold hover:border-accent hover:bg-accent/5 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              View Case Studies
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Solutions Section - Grid with Images */}
      <section className="relative py-32 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-20">
            <div className="inline-block mb-4">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Enterprise Solutions That Define <span className="text-accent">Tomorrow</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl">
              Comprehensive infrastructure services engineered for organizations that demand excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Image Background */}
                  <div className="absolute inset-0 overflow-hidden">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      fill
                      className="object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/40 group-hover:to-accent/10 transition-colors duration-300">
                        <Icon className="text-accent" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{solution.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{solution.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Dark Premium */}
      <section className="py-32 border-b border-border/50 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-accent to-accent/50 mb-3 group-hover:from-white group-hover:to-accent transition-all duration-300">
                  {stat.value}
                </div>
                <p className="text-foreground/60 font-medium tracking-wide uppercase text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 7Layers - Split Layout */}
      <section className="py-32 border-b border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-20">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 text-balance">
              Built on Trust, <span className="text-accent">Delivered with Precision</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { title: 'Expert Engineering', desc: 'Seasoned architects with 15+ years crafting enterprise-scale infrastructure.' },
                { title: 'Proven Excellence', desc: '500+ transformational projects completed for leading global organizations.' },
                { title: 'Security Obsessed', desc: 'Zero-trust architecture with military-grade encryption and compliance.' },
              ].map((item, i) => (
                <div key={i} className="group">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden h-96 md:h-full">
              <Image
                src="/images/enterprise-solutions.jpg"
                alt="Enterprise Solutions"
                fill
                className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/digital-transformation.jpg"
            alt="Digital Transformation"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
            Your Infrastructure <span className="text-accent">Awaits Transformation</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Join Fortune 500 companies trusting 7Layers to engineer their competitive advantage through infrastructure excellence.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-accent to-accent/80 text-primary rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span>Request Your Architecture Consultation</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
