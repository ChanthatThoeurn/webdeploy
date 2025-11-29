"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Users, MapPin, Search, LocateOffIcon as LocationIcon } from "lucide-react"
import { Button } from "@/src/components/ui/button"

export default function HomePage() {
  const [formData, setFormData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `/search?destination=${formData.destination}&checkIn=${formData.checkIn}&checkOut=${formData.checkOut}&guests=${formData.guests}`
  }

  const khmerLocations = ["Phnom Penh", "Siem Reap", "Sihanoukville", "Battambang", "Kampot", "Koh Rong", "Mondulkiri"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="absolute inset-0 -z-10">
          <img src="/luxury-hotel-lobby-elegant.jpg" alt="Luxury Hotel" className="w-full h-full object-cover opacity-40" />
        </div>

        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Discover Your <span className="text-primary">Perfect Stay</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed">
            Experience luxury hotels across Cambodia and worldwide with exclusive deals and personalized service
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {/* Destination */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3 text-left">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="City or hotel name"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  required
                />
              </div>

              {/* Check-in */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3 text-left">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Check-in
                </label>
                <input
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  required
                />
              </div>

              {/* Check-out */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3 text-left">
                  <Calendar className="inline w-4 h-4 mr-2" />
                  Check-out
                </label>
                <input
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                  required
                />
              </div>

              {/* Guests */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3 text-left">
                  <Users className="inline w-4 h-4 mr-2" />
                  Guests
                </label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: Number.parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition"
            >
              <Search className="w-5 h-5" />
              Search Hotels
            </Button>
          </form>
        </div>
      </section>

      {/* Quick Access - Khmer Destinations */}
      <section className="py-12 px-4 bg-background border-b">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <LocationIcon className="w-5 h-5 text-primary" />
            Popular Khmer Destinations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {khmerLocations.map((location) => (
              <Link key={location} href={`/search?destination=${location}`}>
                <button className="w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition font-medium text-sm">
                  {location}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections - Main */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Featured <span className="text-primary">Collections</span>
          </h2>
          <p className="text-center text-foreground/70 mb-16 text-lg">
            Explore our hand-picked selection of luxury hotels worldwide
          </p>

          {/* Khmer Heritage Collection */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-1 h-10 bg-primary rounded-full" />
              Khmer Heritage & Adventure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Angkor Temples Retreat",
                  location: "Siem Reap",
                  image: "/angkor-temples-luxury-hotel-cambodia.jpg",
                  link: "/search?destination=Siem Reap",
                  desc: "Explore UNESCO heritage sites with world-class comfort",
                },
                {
                  title: "Royal Palace Luxury",
                  location: "Phnom Penh",
                  image: "/phnom-penh-luxury-hotel-royal-palace.jpg",
                  link: "/search?destination=Phnom Penh",
                  desc: "Experience Cambodia's cultural capital in style",
                },
                {
                  title: "Island Paradise",
                  location: "Sihanoukville",
                  image: "/sihanoukville-beach-resort-cambodia.jpg",
                  link: "/search?destination=Sihanoukville",
                  desc: "Pristine beaches and tropical island escapes",
                },
                {
                  title: "Mountain Serenity",
                  location: "Mondulkiri",
                  image: "/mondulkiri-mountain-lodge-cambodia.jpg",
                  link: "/search?destination=Mondulkiri",
                  desc: "Hidden gem with waterfalls and jungle adventure",
                },
              ].map((collection) => (
                <Link key={collection.location} href={collection.link}>
                  <div className="group cursor-pointer h-full">
                    <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-lg">
                      <img
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white/90 text-sm mb-1">{collection.location}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                      {collection.title}
                    </h3>
                    <p className="text-foreground/70 text-sm">{collection.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* International Collection */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-1 h-10 bg-accent rounded-full" />
              International Luxury Destinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Paris Elegance",
                  image: "/paris-luxury-hotel-romantic.jpg",
                  link: "/search?destination=Paris",
                  desc: "Experience romance and luxury in the City of Light",
                },
                {
                  title: "Dubai Opulence",
                  image: "/dubai-luxury-resort-modern.jpg",
                  link: "/search?destination=Dubai",
                  desc: "Discover world-class resorts and stunning desert retreats",
                },
                {
                  title: "Tokyo Serenity",
                  image: "/tokyo-luxury-hotel-japanese.jpg",
                  link: "/search?destination=Tokyo",
                  desc: "Blend of tradition and modern luxury in Japan's capital",
                },
              ].map((collection) => (
                <Link key={collection.title} href={collection.link}>
                  <div className="group cursor-pointer">
                    <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-lg">
                      <img
                        src={collection.image || "/placeholder.svg"}
                        alt={collection.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition">
                      {collection.title}
                    </h3>
                    <p className="text-foreground/70">{collection.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Special Offers Collection */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-1 h-10 bg-red-500 rounded-full" />
              Special Offers & Deals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Early Bird Discount",
                  subtitle: "Book 30+ days ahead",
                  discount: "Up to 40% OFF",
                  bg: "bg-gradient-to-br from-blue-500 to-blue-600",
                },
                {
                  title: "Last Minute Deals",
                  subtitle: "Book within 7 days",
                  discount: "Up to 30% OFF",
                  bg: "bg-gradient-to-br from-purple-500 to-purple-600",
                },
                {
                  title: "Extended Stay",
                  subtitle: "Stay 5+ nights",
                  discount: "20% Savings",
                  bg: "bg-gradient-to-br from-green-500 to-green-600",
                },
                {
                  title: "Group Bookings",
                  subtitle: "4+ rooms & above",
                  discount: "Exclusive Rates",
                  bg: "bg-gradient-to-br from-orange-500 to-orange-600",
                },
              ].map((offer) => (
                <div
                  key={offer.title}
                  className={`${offer.bg} rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition transform hover:scale-105`}
                >
                  <h4 className="text-2xl font-bold mb-2">{offer.title}</h4>
                  <p className="text-white/90 mb-4">{offer.subtitle}</p>
                  <p className="text-4xl font-bold text-white">{offer.discount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Types Collection */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-secondary-foreground text-center mb-16">
            Choose Your Perfect Hotel Type
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏰", type: "Luxury Hotels", count: "2,500+", desc: "Premium 5-star properties" },
              { icon: "🏖️", type: "Beach Resorts", count: "800+", desc: "Tropical paradise getaways" },
              { icon: "🏔️", type: "Mountain Lodges", count: "450+", desc: "Serene mountain retreats" },
              { icon: "🏙️", type: "City Hotels", count: "3,200+", desc: "Urban luxury accommodations" },
            ].map((hotel) => (
              <div key={hotel.type} className="bg-background rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-5xl mb-4">{hotel.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{hotel.type}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{hotel.count}</p>
                <p className="text-foreground/70">{hotel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">Why Choose LuxeStay?</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Best Price Guarantee", desc: "Lowest rates guaranteed or we match the difference" },
              { title: "Secure Booking", desc: "100% secure payment processing with data encryption" },
              { title: "24/7 Support", desc: "Round-the-clock customer support in multiple languages" },
              { title: "Instant Confirmation", desc: "Immediate booking confirmation and digital receipts" },
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
