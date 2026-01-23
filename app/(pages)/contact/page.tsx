'use client'

import React from "react"

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to submit form')
      }

      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
      })

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Build Something Great
            </h1>
            <p className="text-lg text-foreground/70">
              Contact us to discuss your enterprise infrastructure needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <Mail className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:hello@7layers.io" className="text-foreground/70 hover:text-accent transition-colors">
                      hello@7layers.io
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+1-555-7-LAYERS" className="text-foreground/70 hover:text-accent transition-colors">
                      +1 (555) 7-LAYERS
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-accent flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold mb-1">Office</p>
                    <p className="text-foreground/70">
                      Silicon Valley, CA<br />
                      Enterprise District
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-4 bg-muted rounded-lg border border-border">
                <p className="text-sm text-foreground/70">
                  <strong>Response Time:</strong> We typically respond within 24 business hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {success ? (
                <div className="flex flex-col items-center justify-center py-12 px-6 bg-card border border-accent/20 rounded-lg">
                  <CheckCircle className="text-accent mb-4" size={48} />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-foreground/70 text-center">
                    We've received your inquiry and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="">Select a service...</option>
                      <option value="cloud_migration">Cloud Migration</option>
                      <option value="security">Security & Compliance</option>
                      <option value="optimization">Performance Optimization</option>
                      <option value="team_augmentation">Team Augmentation</option>
                      <option value="data_architecture">Data Architecture</option>
                      <option value="devops">DevOps & Automation</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                      placeholder="Tell us about your project and infrastructure needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 py-3 bg-accent text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-xs text-foreground/50 text-center">
                    We'll respond to your inquiry within 24 hours. Privacy is important to us.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
