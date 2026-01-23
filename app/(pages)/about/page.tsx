import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Award, Users, Target } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver best-in-class infrastructure solutions that exceed expectations.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Your success is our success. We work as an extension of your team.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and proven methodologies.',
    },
  ]

  const team = [
    { role: 'Founder & CEO', count: '1' },
    { role: 'Solution Architects', count: '12' },
    { role: 'Infrastructure Engineers', count: '25' },
    { role: 'DevOps Specialists', count: '18' },
    { role: 'Security Engineers', count: '15' },
    { role: 'Support Engineers', count: '20' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Building Enterprise Infrastructure Since 2009
            </h1>
            <p className="text-lg text-foreground/70">
              15 years of transforming how enterprises architect, deploy, and scale their infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-b border-border py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-foreground/70 mb-4">
                To architect engineered infrastructure solutions that enable Fortune 500 companies to scale, innovate, and compete in the digital age.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                We believe that infrastructure is not a cost center—it's a competitive advantage. Our mission is to help enterprises leverage that advantage.
              </p>
              <p className="text-lg text-foreground/70">
                With a team of seasoned engineers and a proven methodology, we've transformed infrastructure for some of the world's most demanding enterprises.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-card border border-border rounded-lg">
                <p className="text-4xl font-bold text-accent mb-2">15+</p>
                <p className="text-foreground/70">Years Experience</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <p className="text-4xl font-bold text-accent mb-2">150+</p>
                <p className="text-foreground/70">Enterprise Clients</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <p className="text-4xl font-bold text-accent mb-2">500+</p>
                <p className="text-foreground/70">Successful Projects</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-lg">
                <p className="text-4xl font-bold text-accent mb-2">99.99%</p>
                <p className="text-foreground/70">Uptime Average</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-b border-border py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="p-6 border border-border rounded-lg bg-background">
                  <Icon className="text-accent mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-b border-border py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {team.map((member, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-lg text-center">
                <p className="text-3xl font-bold text-accent mb-2">{member.count}</p>
                <p className="text-foreground/70">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Why Our Team Stands Out</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold mb-2">Deep Expertise</p>
                <p className="text-foreground/70">
                  Average 12+ years of enterprise infrastructure experience per team member.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Continuous Learning</p>
                <p className="text-foreground/70">
                  Certified in the latest cloud platforms and infrastructure technologies.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">24/7 Availability</p>
                <p className="text-foreground/70">
                  Round-the-clock support to ensure your infrastructure always runs smoothly.
                </p>
              </div>
              <div>
                <p className="font-semibold mb-2">Proven Results</p>
                <p className="text-foreground/70">
                  Track record of delivering projects on time and within budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="border-b border-border py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Our Journey</h2>

          <div className="space-y-8">
            <div className="flex gap-4 pb-8 border-l-2 border-accent pl-6 relative">
              <div className="absolute -left-3 top-0 w-4 h-4 bg-accent rounded-full" />
              <div>
                <p className="font-bold text-accent mb-1">2009</p>
                <p className="font-semibold mb-2">Founded</p>
                <p className="text-foreground/70">
                  7Layers was founded with a vision to revolutionize enterprise infrastructure.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pb-8 border-l-2 border-accent pl-6 relative">
              <div className="absolute -left-3 top-0 w-4 h-4 bg-accent rounded-full" />
              <div>
                <p className="font-bold text-accent mb-1">2012</p>
                <p className="font-semibold mb-2">Cloud Migration Pioneer</p>
                <p className="text-foreground/70">
                  Early adopters of AWS. Helped enterprises transition to cloud infrastructure at scale.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pb-8 border-l-2 border-accent pl-6 relative">
              <div className="absolute -left-3 top-0 w-4 h-4 bg-accent rounded-full" />
              <div>
                <p className="font-bold text-accent mb-1">2017</p>
                <p className="font-semibold mb-2">Expanded Globally</p>
                <p className="text-foreground/70">
                  Opened offices in multiple regions to serve our growing client base worldwide.
                </p>
              </div>
            </div>

            <div className="flex gap-4 pb-8 border-l-2 border-accent pl-6 relative">
              <div className="absolute -left-3 top-0 w-4 h-4 bg-accent rounded-full" />
              <div>
                <p className="font-bold text-accent mb-1">2024</p>
                <p className="font-semibold mb-2">Today</p>
                <p className="text-foreground/70">
                  Serving 150+ enterprise clients with 500+ successful projects and counting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
