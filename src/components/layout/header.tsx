"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Menu, X, MapPin, User, LogOut } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { getCurrentUser, logoutUser } from "@/src/lib/auth"
import type { AuthUser } from "@/src/lib/types"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)
  const router = useRouter()

  useEffect(() => {
    setUser(getCurrentUser())
  }, [])

  const handleLogout = () => {
    logoutUser()
    setUser(null)
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <img src="/logo.jpg" alt="logo" />
            </div>
            <span className="text-2xl font-bold text-primary hidden sm:inline">Bottum</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/search" className="text-foreground hover:text-primary transition">
              Search Hotels
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:flex text-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/account">
                    <User className="w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden sm:flex text-foreground hover:text-primary"
                  onClick={handleLogout}
                >
                  <LogOut className="w-5 h-5" />
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" className="hidden sm:flex text-foreground hover:text-primary" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button className="hidden sm:flex bg-primary hover:bg-primary/90" asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground hover:text-primary transition"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/search" className="block px-4 py-2 text-foreground hover:bg-secondary rounded transition">
              Search Hotels
            </Link>
            <Link href="/about" className="block px-4 py-2 text-foreground hover:bg-secondary rounded transition">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-foreground hover:bg-secondary rounded transition">
              Contact
            </Link>
            {user ? (
              <>
                <Link href="/account" className="block px-4 py-2 text-foreground hover:bg-secondary rounded transition">
                  My Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-foreground hover:bg-secondary rounded transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block px-4 py-2 text-foreground hover:bg-secondary rounded transition">
                  Sign In
                </Link>
                <Link href="/signup" className="block px-4 py-2 text-foreground hover:bg-secondary rounded transition">
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
