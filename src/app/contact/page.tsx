"use client"

import type React from "react"
import { Mail, Phone, Clock, MessageSquare, Send } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Message submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen pt-20 pb-20 bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-20 px-4 mb-20 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance">Get in Touch With Us</h1>
          <p className="text-xl text-foreground/70 max-w-3xl text-balance">
            Have questions about our hotels? Need help with your booking? Our dedicated team is here to assist you 24/7.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* Quick Contact Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Email Card */}
          <div className="group bg-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground/60 mb-2 uppercase tracking-wide">Email</h3>
            <a
              href="mailto:it.thatchan@gmainl.ocm"
              className="text-lg font-bold text-foreground hover:text-primary transition"
            >
              it.thatchan@gmainl.ocm
            </a>
            <p className="text-xs text-foreground/50 mt-2">Response within 2 hours</p>
          </div>

          {/* Phone Card */}
          <div className="group bg-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground/60 mb-2 uppercase tracking-wide">Phone</h3>
            <a href="tel:+8550978798818" className="text-lg font-bold text-foreground hover:text-primary transition">
              +855 978 798 818
            </a>
            <p className="text-xs text-foreground/50 mt-2">Mon - Sun, 24 hours</p>
          </div>

          {/* Facebook Card */}
          <div className="group bg-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground/60 mb-2 uppercase tracking-wide">Facebook</h3>
            <a
              href="https://facebook.com/that.boss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-foreground hover:text-primary transition"
            >
              @that.boss
            </a>
            <p className="text-xs text-foreground/50 mt-2">Message us anytime</p>
          </div>

          {/* Hours Card */}
          <div className="group bg-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-sm font-semibold text-foreground/60 mb-2 uppercase tracking-wide">Hours</h3>
            <p className="text-lg font-bold text-foreground">24/7 Available</p>
            <p className="text-xs text-foreground/50 mt-2">Always ready to help</p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column - Info */}
          <div className="lg:col-span-1">
            {/* Contact Details */}
            <div className="bg-secondary rounded-xl p-8 border border-border mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Details</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/60 mb-1">Email Address</p>
                    <a
                      href="mailto:it.thatchan@gmainl.ocm"
                      className="text-foreground hover:text-primary transition font-medium"
                    >
                      it.thatchan@gmainl.ocm
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/60 mb-1">Phone Number</p>
                    <a href="tel:+8550978798818" className="text-foreground hover:text-primary transition font-medium">
                      +855 978 798 818
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/60 mb-1">Facebook Messenger</p>
                    <a
                      href="https://facebook.com/that.boss"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition font-medium"
                    >
                      Message @that.boss
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-secondary rounded-xl p-8 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Business Hours
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-foreground/70">Monday - Sunday</span>
                  <span className="font-semibold text-foreground">24 Hours</span>
                </div>
                <p className="text-foreground/60 text-xs">
                  Our team is available round the clock to assist with your booking needs.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-secondary rounded-xl p-8 md:p-12 border border-border">
              <div className="flex items-center gap-3 mb-8">
                <Send className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Send us a Message</h2>
              </div>

              {submitted && (
                <div className="bg-green-100/80 border border-green-300 text-green-800 px-6 py-4 rounded-lg mb-8 font-medium">
                  <p className="font-bold mb-1">Thank you for reaching out!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-foreground/40 transition"
                  />
                </div>

                {/* Email and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Email Address *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-foreground/40 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+855 978 798 818"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-foreground/40 transition"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Subject *</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Message *</label>
                  <textarea
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-foreground/40 resize-none transition"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-secondary rounded-xl p-12 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">What are your response times?</h4>
                <p className="text-foreground/70 text-sm">
                  We aim to respond to all inquiries within 2 hours during business hours.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Can I modify my booking?</h4>
                <p className="text-foreground/70 text-sm">
                  Yes! Contact us before your check-in date to make modifications to your booking.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-foreground mb-2">What's your cancellation policy?</h4>
                <p className="text-foreground/70 text-sm">
                  Cancellations are free up to 7 days before check-in. Late cancellations may incur charges.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Do you offer group bookings?</h4>
                <p className="text-foreground/70 text-sm">
                  Contact us for special group rates and customized packages.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
