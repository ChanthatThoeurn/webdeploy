"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Star, MapPin, Wifi, Utensils, Dumbbell } from "lucide-react"
import { Button } from "@/src/components/ui/button"

// Mock hotel data - in real app this would come from API
const MOCK_HOTELS = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "Paris, France",
    image: "/luxury-5-star-hotel-room.jpg",
    price: 450,
    originalPrice: 650,
    rating: 4.8,
    reviews: 2341,
    amenities: ["Free WiFi", "Restaurant", "Gym"],
    description: "A luxurious 5-star hotel in the heart of Paris with stunning views of the Eiffel Tower",
  },
  {
    id: 2,
    name: "Ocean View Resort",
    location: "Dubai, UAE",
    image: "/beachfront-resort-luxury-suite.jpg",
    price: 520,
    originalPrice: 750,
    rating: 4.9,
    reviews: 3102,
    amenities: ["Free WiFi", "Restaurant", "Beach Access"],
    description: "World-class beachfront resort with private beach access and world-renowned dining",
  },
  {
    id: 3,
    name: "Zen Garden Hotel",
    location: "Tokyo, Japan",
    image: "/modern-japanese-hotel-design-zen-garden.jpg",
    price: 380,
    originalPrice: 550,
    rating: 4.7,
    reviews: 1895,
    amenities: ["Free WiFi", "Spa", "Restaurant"],
    description: "A serene blend of traditional Japanese aesthetics with modern luxury amenities",
  },
  {
    id: 4,
    name: "Alpine Lodge",
    location: "Swiss Alps",
    image: "/mountain-lodge-chalet-snow.jpg",
    price: 420,
    originalPrice: 600,
    rating: 4.6,
    reviews: 1540,
    amenities: ["Free WiFi", "Restaurant", "Ski Access"],
    description: "Cozy mountain lodge with breathtaking alpine views and direct ski access",
  },
]

interface AmenityIcon {
  name: string
  icon: React.ReactNode
}

const AMENITY_ICONS: Record<string, AmenityIcon> = {
  "Free WiFi": { name: "Free WiFi", icon: <Wifi className="w-4 h-4" /> },
  Restaurant: { name: "Restaurant", icon: <Utensils className="w-4 h-4" /> },
  Gym: { name: "Gym", icon: <Dumbbell className="w-4 h-4" /> },
  "Beach Access": { name: "Beach Access", icon: <MapPin className="w-4 h-4" /> },
  Spa: { name: "Spa", icon: <Dumbbell className="w-4 h-4" /> },
  "Ski Access": { name: "Ski Access", icon: <MapPin className="w-4 h-4" /> },
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const [filteredHotels, setFilteredHotels] = useState(MOCK_HOTELS)
  const [sortBy, setSortBy] = useState("popular")
  const [priceRange, setPriceRange] = useState(1000)

  const destination = searchParams.get("destination") || "All Destinations"

  useEffect(() => {
    let filtered = MOCK_HOTELS
    // Filter by price
    filtered = filtered.filter((h) => h.price <= priceRange)

    // Sort
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    setFilteredHotels(filtered)
  }, [sortBy, priceRange])

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Hotels in {destination}</h1>
          <p className="text-foreground/70 text-lg">Found {filteredHotels.length} available hotels</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="bg-card rounded-2xl p-6 h-fit shadow-lg">
            <h2 className="text-xl font-bold text-card-foreground mb-6">Filters</h2>

            {/* Sort */}
            <div className="mb-8">
              <h3 className="font-semibold text-card-foreground mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold text-card-foreground mb-4">Price Range</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="100"
                  max="1000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number.parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-card-foreground">
                  <span>$100</span>
                  <span className="font-bold">${priceRange}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hotel Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredHotels.map((hotel) => (
                <Link key={hotel.id} href={`/hotel/${hotel.id}`}>
                  <div className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <img
                        src={hotel.image || "/placeholder.svg"}
                        alt={hotel.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                        ${hotel.price}
                        <span className="line-through text-sm ml-2">${hotel.originalPrice}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-card-foreground mb-2">{hotel.name}</h3>
                      <p className="text-card-foreground/70 flex items-center gap-2 mb-4">
                        <MapPin className="w-4 h-4" />
                        {hotel.location}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(hotel.rating) ? "fill-accent text-accent" : "text-border"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold text-card-foreground">{hotel.rating}</span>
                        <span className="text-sm text-card-foreground/70">({hotel.reviews})</span>
                      </div>

                      {/* Amenities */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {hotel.amenities.map((amenity, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                          >
                            {AMENITY_ICONS[amenity]?.icon}
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-card-foreground/70 text-sm mb-6 line-clamp-2">{hotel.description}</p>

                      {/* Button */}
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
