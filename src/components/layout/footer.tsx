import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <img src="/logo.jpg" alt="logo" />
              </div>
              <span className="text-xl font-bold text-primary">Bottum</span>
            </div>
            <p className="text-secondary-foreground text-sm">Your gateway to luxury hotel experiences worldwide.</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-secondary-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-secondary-foreground hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-foreground hover:text-primary transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-secondary-foreground hover:text-primary transition">
                  Search Hotels
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-foreground hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-secondary-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-primary transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-primary transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-primary transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-secondary-foreground hover:text-primary transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-secondary-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-secondary-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:it.thatchan@gmainl.ocm" className="hover:text-primary transition">
                  it.thatchan@gmainl.ocm
                </a>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:+8550978798818" className="hover:text-primary transition">
                  0978798818
                </a>
              </li>
              <li className="flex items-center gap-2 text-secondary-foreground">
                <span className="text-base">f</span>
                <a
                  href="https://facebook.com/that.boss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  that.boss
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-secondary-foreground">© 2025 LuxeStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
