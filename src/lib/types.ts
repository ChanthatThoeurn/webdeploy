export interface Hotel {
  id: number
  name: string
  location: string
  image: string
  price: number
  originalPrice: number
  rating: number
  reviews: number
  amenities: string[]
  description: string
}

export interface Booking {
  id: string
  hotelId: number
  userId: string
  roomType: string
  checkIn: string
  checkOut: string
  guests: number
  totalPrice: number
  status: "pending" | "confirmed" | "cancelled"
  createdAt: Date
}

export interface User {
  id: string
  name: string
  email: string
  phone: string
  memberId: string
  createdAt: Date
}

export interface AuthUser {
  id: string
  email: string
  name: string
  phone: string
  createdAt: Date
}
