"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Star, MapPin, Wifi, Utensils, Dumbbell, ChevronLeft, X, ChevronRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { getCurrentUser } from "@/src/lib/auth"
import type { AuthUser } from "@/src/lib/types"

// Mock data
const HOTEL_DETAILS: Record<number, any> = {
  1: {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "Paris, France",
    rating: 4.8,
    reviews: 2341,
    price: 450,
    originalPrice: 650,
    images: ["/luxury-5-star-hotel-room-paris.jpg", "/hotel-lobby-elegant-design.jpg", "/hotel-restaurant-dining.png"],
    description:
      "Experience unparalleled luxury at the Grand Plaza Hotel, a 5-star gem in the heart of Paris. With stunning views of the Eiffel Tower and world-class amenities, this hotel offers the perfect blend of elegance and comfort.",
    amenities: [
      { name: "Free WiFi", icon: <Wifi className="w-6 h-6" /> },
      { name: "Restaurant & Bar", icon: <Utensils className="w-6 h-6" /> },
      { name: "Fitness Center", icon: <Dumbbell className="w-6 h-6" /> },
      { name: "Spa Services", icon: <Utensils className="w-6 h-6" /> },
      { name: "24/7 Concierge", icon: <MapPin className="w-6 h-6" /> },
      { name: "Business Center", icon: <Wifi className="w-6 h-6" /> },
    ],
    rooms: [
      { type: "Standard Room", price: 450, guests: 2, size: "35m²" },
      { type: "Deluxe Room", price: 580, guests: 2, size: "45m²" },
      { type: "Suite", price: 850, guests: 4, size: "65m²" },
    ],
  },
  2: {
    id: 2,
    name: "Ocean View Resort",
    location: "Dubai, UAE",
    rating: 4.9,
    reviews: 3102,
    price: 520,
    originalPrice: 750,
    images: ["/luxury-beachfront-resort-dubai.jpg", "/hotel-beach-pool-resort.jpg", "/hotel-suite-ocean-view.jpg"],
    description:
      "An exceptional beachfront resort offering world-class service and amenities. Enjoy pristine beaches, fine dining, and unforgettable sunsets over the Arabian Gulf.",
    amenities: [
      { name: "Free WiFi", icon: <Wifi className="w-6 h-6" /> },
      { name: "Beach Access", icon: <MapPin className="w-6 h-6" /> },
      { name: "Multiple Pools", icon: <Dumbbell className="w-6 h-6" /> },
      { name: "Water Sports", icon: <MapPin className="w-6 h-6" /> },
      { name: "Fine Dining", icon: <Utensils className="w-6 h-6" /> },
      { name: "Spa Resort", icon: <Utensils className="w-6 h-6" /> },
    ],
    rooms: [
      { type: "Beachfront Room", price: 520, guests: 2, size: "40m²" },
      { type: "Ocean View Suite", price: 720, guests: 2, size: "55m²" },
      { type: "Presidential Suite", price: 1200, guests: 4, size: "80m²" },
    ],
  },
  3: {
    id: 3,
    name: "Zen Garden Hotel",
    location: "Tokyo, Japan",
    rating: 4.7,
    reviews: 1895,
    price: 380,
    originalPrice: 550,
    images: [
      "/japanese-zen-garden-hotel.jpg",
      "/modern-japanese-hotel-interior.jpg",
      "/placeholder.svg?height=600&width=900",
    ],
    description:
      "A harmonious blend of traditional Japanese aesthetics and modern luxury. Immerse yourself in serenity with our zen gardens, traditional tea ceremonies, and contemporary amenities.",
    amenities: [
      { name: "Free WiFi", icon: <Wifi className="w-6 h-6" /> },
      { name: "Zen Garden", icon: <MapPin className="w-6 h-6" /> },
      { name: "Traditional Spa", icon: <Utensils className="w-6 h-6" /> },
      { name: "Japanese Cuisine", icon: <Utensils className="w-6 h-6" /> },
      { name: "Tea Ceremony", icon: <Dumbbell className="w-6 h-6" /> },
      { name: "Yoga Studio", icon: <Dumbbell className="w-6 h-6" /> },
    ],
    rooms: [
      { type: "Standard Room", price: 380, guests: 2, size: "32m²" },
      { type: "Premium Room", price: 520, guests: 2, size: "42m²" },
      { type: "Luxury Suite", price: 780, guests: 4, size: "60m²" },
    ],
  },
}

export default function HotelPage() {
  const params = useParams()
  const router = useRouter()
  const hotelId = Number.parseInt(params.id as string)
  const hotel = HOTEL_DETAILS[hotelId]

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedRoom, setSelectedRoom] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  const handleBooking = () => {
    if (!user) {
      router.push("/login")
      return
    }
    // Proceed to booking confirmation
    alert(`Booking ${hotel.rooms[selectedRoom].type} at ${hotel.name}`)
  }

  if (!hotel) {
    return <div className="text-center py-20">Hotel not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Gallery Section */}
      <div className="relative h-96 md:h-screen bg-muted overflow-hidden">
        <img
          src={hotel.images[selectedImage] || "/placeholder.svg"}
          alt={hotel.name}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => setShowLightbox(true)}
        />

        {/* Image Navigation */}
        <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto">
          {hotel.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                selectedImage === idx ? "border-primary" : "border-border"
              }`}
            >
              <img src={hotel.images[idx] || "/placeholder.svg"} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/search" className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ChevronLeft className="w-5 h-5" />
            Back to Search
          </Link>

          <h1 className="text-5xl font-bold text-foreground mb-4">{hotel.name}</h1>
          <p className="flex items-center gap-2 text-foreground/70 text-xl mb-4">
            <MapPin className="w-5 h-5" />
            {hotel.location}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${i < Math.floor(hotel.rating) ? "fill-accent text-accent" : "text-border"}`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">{hotel.rating}</span>
            <span className="text-foreground/70">({hotel.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-primary">${hotel.price}</span>
            <span className="text-2xl line-through text-foreground/50">${hotel.originalPrice}</span>
            <span className="text-lg font-bold text-accent">Save ${hotel.originalPrice - hotel.price}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">About</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">{hotel.description}</p>
            </section>

            {/* Amenities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {hotel.amenities.map((amenity: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-primary transition"
                  >
                    <div className="text-primary">{amenity.icon}</div>
                    <p className="text-card-foreground font-semibold text-center">{amenity.name}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6">Guest Reviews</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((_, idx) => (
                  <div key={idx} className="pb-6 border-b border-border">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-bold text-foreground">Guest {idx + 1}</p>
                        <p className="text-sm text-foreground/70">Verified stay</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground/70">
                      "An exceptional experience. The staff was incredibly attentive, the rooms were immaculate, and the
                      amenities exceeded expectations."
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-8 shadow-lg sticky top-24">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">Select Room Type</h3>

              <div className="space-y-4 mb-8">
                {hotel.rooms.map((room: any, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedRoom(idx)}
                    className={`w-full p-4 rounded-xl border-2 transition text-left ${
                      selectedRoom === idx ? "border-primary bg-primary/10" : "border-border hover:border-primary"
                    }`}
                  >
                    <p className="font-bold text-card-foreground">{room.type}</p>
                    <p className="text-sm text-card-foreground/70 mb-2">
                      {room.guests} guests • {room.size}
                    </p>
                    <p className="font-bold text-primary">${room.price} per night</p>
                  </button>
                ))}
              </div>

              {/* Booking Button */}
              <Button
                onClick={handleBooking}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 mb-4 text-lg"
              >
                {user ? "Proceed to Booking" : "Sign In to Book"}
              </Button>

              <div className="text-center text-sm text-card-foreground/70">
                <p>Non-refundable rate</p>
                <p>Secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={() => setSelectedImage((prev) => (prev - 1 + hotel.images.length) % hotel.images.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <img
            src={hotel.images[selectedImage] || "/placeholder.svg"}
            alt=""
            className="max-w-4xl max-h-screen object-contain"
          />

          <button
            onClick={() => setSelectedImage((prev) => (prev + 1) % hotel.images.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  )
}
