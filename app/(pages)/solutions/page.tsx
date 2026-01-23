'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArrowRight, ArrowUpRight, Zap, Shield, TrendingUp, Users, Lock, Code } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Zap,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime.',
      benefits: [
        'Zero downtime migrations',
        'Cost optimization strategies',
        'Multi-cloud architecture support',
        'Custom migration planning',
      ],
      cta: 'Learn More',
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security architecture for regulated industries.',
      benefits: [
        'SOC 2, ISO 27001 compliance',
        'Zero-trust architecture',
        'Advanced threat detection',
        'Security audits & assessments',
      ],
      cta: 'Learn More',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Maximize infrastructure efficiency and reduce operational costs.',
      benefits: [
        'Cost reduction up to 40%',
        'Performance tuning',
        'Resource optimization',
        'Capacity planning',
      ],
      cta: 'Learn More',
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'Expert engineers to scale your technical capabilities.',
      benefits: [
        'Senior architects',
        'Dedicated DevOps engineers',
        'Full-time or project basis',
        'Knowledge transfer included',
      ],
      cta: 'Learn More',
    },
    {
      icon: Lock,
      title: 'Data Architecture',
      description: 'Scalable, secure data infrastructure for modern applications.',
      benefits: [
        'Database optimization',
        'Data pipeline architecture',
        'Big data solutions',
        'Data security & governance',
      ],
      cta: 'Learn More',
    },
    {
      icon: Code,
      title: 'DevOps & Automation',
      description: 'Streamline deployment pipelines and infrastructure management.',
      benefits: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Automated deployments',
        'Monitoring & observability',
      ],
      cta: 'Learn More',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 border-b border-border/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cloud-migration.jpg"
            alt="Solutions"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Services</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
              Enterprise Solutions <span className="text-accent">Engineered for Scale</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Six comprehensive infrastructure services designed for Fortune 500 enterprises. Custom-built for your unique challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <div
                  key={index}
                  className="group relative flex flex-col p-10 border border-border/50 rounded-2xl bg-card/50 hover:border-accent/50 hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/40 group-hover:to-accent/10 transition-colors">
                    <Icon className="text-accent" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">{solution.title}</h3>
                  <p className="text-foreground/70 mb-8 flex-grow leading-relaxed">{solution.description}</p>

                  <div className="space-y-3 mb-8">
                    {solution.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-bold group/arrow"
                  >
                    {solution.cta}
                    <ArrowUpRight size={18} className="group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="border-t border-b border-border/50 py-32 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-20">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Methodology</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 text-balance">
              The 7Layers <span className="text-accent">Approach</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: '01',
                title: 'Discovery & Assessment',
                desc: 'Comprehensive audit of your current infrastructure, identifying optimization opportunities and architectural gaps.',
              },
              {
                num: '02',
                title: 'Strategic Roadmapping',
                desc: 'Develop a phased transformation plan that aligns perfectly with your business objectives.',
              },
              {
                num: '03',
                title: 'Implementation & Excellence',
                desc: 'Flawless execution with minimal disruption, backed by dedicated support and continuous optimization.',
              },
            ].map((step, i) => (
              <div key={i} className="space-y-6 group">
                <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/50 opacity-30 group-hover:opacity-100 transition-opacity">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-balance">
            Ready to <span className="text-accent">Transform Your Infrastructure</span>?
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Let's discuss which of our solutions aligns with your enterprise vision and technical requirements.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-accent to-accent/80 text-primary rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
          >
            <span>Schedule Your Consultation</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
