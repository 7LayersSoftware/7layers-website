'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ArrowRight, TrendingUp, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Global Financial Services Infrastructure Transformation',
      industry: 'Finance',
      challenge: 'Legacy on-premises infrastructure unable to handle growing transaction volumes and required massive capital investment.',
      solution: 'Architected multi-region AWS infrastructure with auto-scaling, achieving 99.99% uptime while reducing infrastructure costs by 35%.',
      results: ['99.99% uptime', '35% cost reduction', 'Transaction throughput +300%', '6-month delivery'],
      technologies: ['AWS', 'Kubernetes', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'Healthcare Provider Cloud Migration',
      industry: 'Healthcare',
      challenge: 'Required HIPAA-compliant infrastructure with minimal downtime during migration from traditional datacenter.',
      solution: 'Executed phased migration with zero-downtime strategy, implementing encrypted data pipelines and compliance frameworks.',
      results: ['Zero downtime migration', 'HIPAA compliance', '40% OpEx reduction', 'Patient data fully secure'],
      technologies: ['AWS', 'HIPAA-compliant architecture', 'VPN & encryption', 'Audit logging'],
    },
    {
      title: 'E-commerce Platform DevOps Implementation',
      industry: 'Retail',
      challenge: 'Manual deployments causing downtime, inability to scale during peak seasons, and lack of observability.',
      solution: 'Implemented CI/CD pipelines, containerization, and comprehensive monitoring—enabling 200 deployments per day.',
      results: ['200 deployments/day', 'Zero-downtime updates', '50% faster incident resolution', 'Auto-scaling during peaks'],
      technologies: ['Docker', 'Kubernetes', 'GitLab CI/CD', 'Prometheus', 'Grafana'],
    },
    {
      title: 'SaaS Company Infrastructure Scaling',
      industry: 'Software',
      challenge: 'Rapid growth causing infrastructure bottlenecks. Database performance degrading, API response times increasing.',
      solution: 'Optimized database architecture, implemented caching layer, and auto-scaling infrastructure.',
      results: ['API latency reduced 60%', 'Database throughput +400%', 'Cost optimized', 'Seamless scaling'],
      technologies: ['PostgreSQL', 'Redis', 'Elasticsearch', 'Kubernetes', 'AWS'],
    },
    {
      title: 'Enterprise Security & Compliance Overhaul',
      industry: 'Enterprise',
      challenge: 'Multiple security vulnerabilities, lack of compliance controls, and inconsistent security posture across infrastructure.',
      solution: 'Implemented zero-trust architecture, automated compliance scanning, and security hardening across all systems.',
      results: ['Zero critical vulnerabilities', 'SOC 2 Type II certified', 'Automated compliance', 'Security score: A+'],
      technologies: ['Terraform', 'Vault', 'Falco', 'Prometheus', 'ELK Stack'],
    },
    {
      title: 'Real-time Analytics Platform Infrastructure',
      industry: 'Analytics',
      challenge: 'Processing terabytes of data daily with strict latency requirements for real-time dashboards.',
      solution: 'Built distributed data architecture with streaming pipelines, optimized for sub-second query response.',
      results: ['Sub-second queries', '10TB+ data/day processing', '99.95% uptime', '$2M annual savings'],
      technologies: ['Kafka', 'Spark', 'Elasticsearch', 'Clickhouse', 'Kubernetes'],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 border-b border-border/50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/enterprise-solutions.jpg"
            alt="Enterprise Solutions"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">Featured Work</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-balance">
              Enterprise <span className="text-accent">Transformations</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Real-world infrastructure transformations that have delivered billions in value for Fortune 500 companies and fast-growing innovators.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative border border-border/50 rounded-2xl overflow-hidden bg-card/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                          <p className="text-accent text-xs font-bold tracking-widest uppercase">{project.industry}</p>
                        </div>
                        <h3 className="text-4xl font-bold mb-4 group-hover:text-accent transition-colors duration-300 text-balance leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      <div className="space-y-6">
                        <div className="border-l-2 border-accent/30 pl-6 py-2">
                          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Challenge</p>
                          <p className="text-foreground/80 leading-relaxed">{project.challenge}</p>
                        </div>

                        <div className="border-l-2 border-accent pl-6 py-2">
                          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">Solution</p>
                          <p className="text-foreground/80 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-2 bg-accent/10 text-accent text-xs font-semibold rounded-lg border border-accent/20 hover:bg-accent/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Results */}
                    <div>
                      <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-xl p-8 h-full flex flex-col justify-between backdrop-blur">
                        <div>
                          <p className="font-bold text-sm text-accent uppercase tracking-widest mb-6 flex items-center gap-2">
                            <TrendingUp size={18} />
                            Key Results
                          </p>
                          <ul className="space-y-4">
                            {project.results.map((result, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                                <span className="text-sm font-medium text-foreground">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-bold mt-8 group/arrow"
                        >
                          Discuss Similar Goals
                          <ArrowUpRight size={18} className="group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="border-t border-border/50 py-32 bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-20">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Track Record</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 text-balance">
              The <span className="text-accent">Measurable Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '$500M+', label: 'Cost Savings Generated', subtext: 'Across all client projects' },
              { value: '99.99%', label: 'Average Uptime', subtext: 'Reliability guaranteed' },
              { value: '150+', label: 'Enterprise Clients', subtext: 'Fortune 500 partners' },
              { value: '500+', label: 'Projects Delivered', subtext: 'With excellence' },
            ].map((stat, i) => (
              <div key={i} className="group relative p-8 border border-border/50 rounded-xl bg-card/30 hover:border-accent/50 hover:bg-card/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <p className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-accent to-accent/50 mb-3">
                    {stat.value}
                  </p>
                  <p className="text-foreground font-bold text-lg mb-1">{stat.label}</p>
                  <p className="text-foreground/60 text-sm">{stat.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-infrastructure.jpg"
            alt="Infrastructure"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-balance">
            Your Success <span className="text-accent">Starts Here</span>
          </h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the Fortune 500 companies and innovative leaders trusting 7Layers to architect their competitive advantage through infrastructure excellence.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-accent to-accent/80 text-primary rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
          >
            <span>Request Your Architecture Consultation</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
