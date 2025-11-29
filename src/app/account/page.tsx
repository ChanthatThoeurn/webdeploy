"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LogOut, User, Bookmark, Settings, Check, X } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { getCurrentUser, logoutUser, updateUserProfile } from "@/src/lib/auth"
import type { AuthUser } from "@/src/lib/types"

// Mock bookings data
const mockBookings = [
  {
    id: 1,
    hotelName: "Grand Plaza Hotel",
    checkIn: "2025-03-15",
    checkOut: "2025-03-18",
    status: "Confirmed",
    roomType: "Deluxe Room",
    price: 1740,
    image: "/comfortable-hotel-room.png",
  },
  {
    id: 2,
    hotelName: "Ocean View Resort",
    checkIn: "2025-04-20",
    checkOut: "2025-04-25",
    status: "Pending",
    roomType: "Beachfront Room",
    price: 2600,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function AccountPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("bookings")
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState<AuthUser | null>(null)
  const [formData, setFormData] = useState<AuthUser | null>(null)
  const [saveMessage, setSaveMessage] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const user = getCurrentUser()
    if (!user) {
      router.push("/login")
      return
    }
    setUserData(user)
    setFormData(user)
    setLoading(false)
  }, [router])

  const handleSignOut = () => {
    logoutUser()
    setSaveMessage("")
    setTimeout(() => {
      router.push("/")
    }, 500)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (!formData) return
    setFormData((prev) => ({
      ...prev!,
      [name]: value,
    }))
  }

  const handleSaveChanges = () => {
    if (!formData) return
    const updated = updateUserProfile({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    })
    if (updated) {
      setUserData(updated)
      setIsEditing(false)
      setSaveMessage("Profile updated successfully!")
      setTimeout(() => setSaveMessage(""), 3000)
    }
  }

  const handleCancelEdit = () => {
    if (!userData) return
    setFormData(userData)
    setIsEditing(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background py-12 flex items-center justify-center">
        <p className="text-foreground">Loading...</p>
      </div>
    )
  }

  if (!userData || !formData) {
    return null
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-foreground">My Account</h1>
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="flex items-center gap-2 bg-transparent hover:bg-red-50 hover:text-red-600 border-red-200"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-lg">
              {/* Profile */}
              <div className="flex flex-col items-center mb-8 pb-8 border-b border-border">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold text-card-foreground text-center mb-1">{userData.name}</h2>
                <p className="text-sm text-card-foreground/70 text-center">{userData.email}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("bookings")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === "bookings"
                      ? "bg-primary text-primary-foreground"
                      : "text-card-foreground hover:bg-secondary"
                  }`}
                >
                  <Bookmark className="w-5 h-5" />
                  My Bookings
                </button>

                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === "profile"
                      ? "bg-primary text-primary-foreground"
                      : "text-card-foreground hover:bg-secondary"
                  }`}
                >
                  <User className="w-5 h-5" />
                  Profile Settings
                </button>

                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    activeTab === "settings"
                      ? "bg-primary text-primary-foreground"
                      : "text-card-foreground hover:bg-secondary"
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "bookings" && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">My Bookings</h2>
                <div className="space-y-6">
                  {mockBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition flex flex-col md:flex-row"
                    >
                      <img
                        src={booking.image || "/placeholder.svg"}
                        alt={booking.hotelName}
                        className="w-full md:w-48 h-48 object-cover"
                      />
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-card-foreground mb-2">{booking.hotelName}</h3>
                          <p className="text-card-foreground/70 mb-4">{booking.roomType}</p>
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-card-foreground/70">Check-in</p>
                              <p className="font-semibold text-card-foreground">{booking.checkIn}</p>
                            </div>
                            <div>
                              <p className="text-sm text-card-foreground/70">Check-out</p>
                              <p className="font-semibold text-card-foreground">{booking.checkOut}</p>
                            </div>
                            <div>
                              <p className="text-sm text-card-foreground/70">Total</p>
                              <p className="font-semibold text-primary">${booking.price}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span
                            className={`px-4 py-2 rounded-full font-semibold ${
                              booking.status === "Confirmed"
                                ? "bg-accent/20 text-accent"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {booking.status}
                          </span>
                          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Profile Settings</h2>
                  {!isEditing && (
                    <Button
                      onClick={() => setIsEditing(true)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Edit Profile
                    </Button>
                  )}
                </div>

                {saveMessage && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <p className="text-green-700">{saveMessage}</p>
                  </div>
                )}

                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition ${
                          !isEditing ? "bg-muted text-muted-foreground cursor-not-allowed" : ""
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition ${
                          !isEditing ? "bg-muted text-muted-foreground cursor-not-allowed" : ""
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className={`w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground transition ${
                          !isEditing ? "bg-muted text-muted-foreground cursor-not-allowed" : ""
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-card-foreground mb-2">Member ID</label>
                      <input
                        type="text"
                        value={userData.id}
                        disabled
                        className="w-full px-4 py-3 border border-border rounded-lg bg-muted text-muted-foreground cursor-not-allowed"
                      />
                    </div>

                    {isEditing && (
                      <div className="flex gap-4 pt-4">
                        <Button
                          onClick={handleSaveChanges}
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-3 flex items-center justify-center gap-2"
                        >
                          <Check className="w-5 h-5" />
                          Save Changes
                        </Button>
                        <Button
                          onClick={handleCancelEdit}
                          variant="outline"
                          className="flex-1 py-3 flex items-center justify-center gap-2 bg-transparent"
                        >
                          <X className="w-5 h-5" />
                          Cancel
                        </Button>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Settings</h2>
                <div className="bg-card rounded-2xl p-8 shadow-lg space-y-6">
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <div>
                      <h3 className="font-semibold text-card-foreground">Email Notifications</h3>
                      <p className="text-sm text-card-foreground/70">Receive updates about your bookings</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-6 h-6" />
                  </div>

                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <div>
                      <h3 className="font-semibold text-card-foreground">Marketing Emails</h3>
                      <p className="text-sm text-card-foreground/70">Receive exclusive deals and promotions</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-6 h-6" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-card-foreground">Two-Factor Authentication</h3>
                      <p className="text-sm text-card-foreground/70">Add an extra layer of security</p>
                    </div>
                    <input type="checkbox" className="w-6 h-6" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
