import type { AuthUser } from "./types"

const STORAGE_KEY = "hotel_booking_user"

export function getCurrentUser(): AuthUser | null {
  if (typeof window === "undefined") return null
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? JSON.parse(stored) : null
}

export function setCurrentUser(user: AuthUser): void {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

export function clearCurrentUser(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem(STORAGE_KEY)
}

export function loginUser(email: string, password: string): AuthUser | null {
  // Mock login - in production, call your backend API
  const user: AuthUser = {
    id: `user_${Date.now()}`,
    email,
    name: email.split("@")[0],
    phone: "",
    createdAt: new Date(),
  }
  setCurrentUser(user)
  return user
}

export function signupUser(email: string, password: string, name: string): AuthUser | null {
  // Mock signup - in production, call your backend API
  const user: AuthUser = {
    id: `user_${Date.now()}`,
    email,
    name,
    phone: "",
    createdAt: new Date(),
  }
  setCurrentUser(user)
  return user
}

export function logoutUser(): void {
  clearCurrentUser()
}

export function updateUserProfile(updates: Partial<AuthUser>): AuthUser | null {
  if (typeof window === "undefined") return null
  const currentUser = getCurrentUser()
  if (!currentUser) return null

  const updatedUser = {
    ...currentUser,
    ...updates,
    id: currentUser.id, // Prevent changing ID
    createdAt: currentUser.createdAt, // Prevent changing creation date
  }
  setCurrentUser(updatedUser)
  return updatedUser
}
