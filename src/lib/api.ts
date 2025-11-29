export interface SearchParams {
  destination: string
  checkIn: string
  checkOut: string
  guests: number
}

export interface Hotel {
  id: number
  name: string
  location: string
  rating: number
  price: number
  originalPrice: number
  image: string
  amenities: string[]
  type: string
}

// Sample hotels across Cambodia and international destinations
const mockHotels: Hotel[] = [
  // Khmer Hotels
  {
    id: 1,
    name: "Angkor Palace Resort",
    location: "Siem Reap, Cambodia",
    rating: 4.8,
    price: 180,
    originalPrice: 250,
    image: "/angkor-palace-resort.jpg",
    amenities: ["WiFi", "Restaurant", "Spa", "Pool", "Temple Tours"],
    type: "Heritage Resort",
  },
  {
    id: 2,
    name: "Royal Phnom Penh Hotel",
    location: "Phnom Penh, Cambodia",
    rating: 4.6,
    price: 160,
    originalPrice: 220,
    image: "/royal-phnom-penh-hotel.jpg",
    amenities: ["WiFi", "Business Center", "Rooftop Bar", "Gym", "Concierge"],
    type: "Luxury Hotel",
  },
  {
    id: 3,
    name: "Island Paradise Resort",
    location: "Sihanoukville, Cambodia",
    rating: 4.7,
    price: 140,
    originalPrice: 190,
    image: "/sihanoukville-island-resort.jpg",
    amenities: ["Beach Access", "Water Sports", "Pool", "Restaurant", "Bar"],
    type: "Beach Resort",
  },
  {
    id: 4,
    name: "Battambang Heritage House",
    location: "Battambang, Cambodia",
    rating: 4.5,
    price: 95,
    originalPrice: 140,
    image: "/battambang-heritage-hotel.jpg",
    amenities: ["WiFi", "Local Tours", "Restaurant", "Garden"],
    type: "Boutique Hotel",
  },
  {
    id: 5,
    name: "Kampot Riverside Lodge",
    location: "Kampot, Cambodia",
    rating: 4.6,
    price: 110,
    originalPrice: 160,
    image: "/kampot-riverside-lodge.jpg",
    amenities: ["River View", "Kayaking", "Local Cuisine", "WiFi"],
    type: "Riverside Lodge",
  },
  // International Hotels
  {
    id: 6,
    name: "Grand Plaza Hotel",
    location: "Paris, France",
    rating: 4.8,
    price: 450,
    originalPrice: 600,
    image: "/paris-grand-plaza.jpg",
    amenities: ["WiFi", "Restaurant", "Gym", "Spa", "Concierge"],
    type: "Luxury Hotel",
  },
  {
    id: 7,
    name: "Burj Marina Resort",
    location: "Dubai, United Arab Emirates",
    rating: 4.9,
    price: 520,
    originalPrice: 700,
    image: "/dubai-burj-marina-resort.jpg",
    amenities: ["Beach", "Pool", "Spa", "Restaurant", "Water Sports"],
    type: "Luxury Resort",
  },
  {
    id: 8,
    name: "Tokyo Modern Suites",
    location: "Tokyo, Japan",
    rating: 4.7,
    price: 380,
    originalPrice: 500,
    image: "/tokyo-modern-hotel.jpg",
    amenities: ["WiFi", "Restaurant", "Gym", "Rooftop Bar"],
    type: "Modern Hotel",
  },
]

export async function searchHotels(params: SearchParams): Promise<Hotel[]> {
  // Mock API call with filtering
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = mockHotels.filter((hotel) =>
        hotel.location.toLowerCase().includes(params.destination.toLowerCase()),
      )
      resolve(filtered.length > 0 ? filtered : mockHotels.slice(0, 6))
    }, 500)
  })
}

export async function getHotelDetails(id: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const hotel = mockHotels.find((h) => h.id === id) || mockHotels[0]
      resolve({
        ...hotel,
        reviews: Math.floor(Math.random() * 5000) + 100,
        description: `Experience luxury at ${hotel.name}. Located in ${hotel.location}, this ${hotel.type} offers exceptional service and world-class amenities.`,
        rooms: [
          { type: "Standard", price: hotel.price, available: 5 },
          { type: "Deluxe", price: hotel.price * 1.3, available: 3 },
          { type: "Suite", price: hotel.price * 1.8, available: 2 },
        ],
      })
    }, 300)
  })
}

export async function createBooking(hotelId: number, roomType: string, checkIn: string, checkOut: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        bookingId: "BK-" + new Date().getFullYear() + "-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
        status: "confirmed",
        message: "Booking created successfully",
      })
    }, 1000)
  })
}
