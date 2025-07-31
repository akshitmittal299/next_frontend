import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, User, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import LoginPage from "./loginform"

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">NextShop</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/deals" className="text-sm font-medium hover:text-primary transition-colors">
              Deals
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <LoginPage/>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-8 w-8 text-primary" />
                <span className="font-bold text-2xl">NextShop</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Your trusted partner for quality products at unbeatable prices. We're committed to making your shopping
                experience exceptional.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/about" className="block text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
                <Link href="/faq" className="block text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
                <Link href="/blog" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Categories</h3>
              <div className="space-y-3">
                <Link href="/categories/fashion" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Fashion
                </Link>
                <Link href="/categories/electronics" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Electronics
                </Link>
                <Link href="/categories/home-garden" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Home & Garden
                </Link>
                <Link href="/categories/sports" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Sports
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Support</h3>
              <div className="space-y-3">
                <Link href="/support" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </Link>
                <Link href="/track-order" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Track Order
                </Link>
                <Link href="/returns" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Returns
                </Link>
                <Link href="/size-guide" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Size Guide
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground">&copy; {new Date().getFullYear()} NextShop. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
