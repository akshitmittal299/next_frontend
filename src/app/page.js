import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import Badge from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Truck, Shield, RefreshCw, Star, Menu, Search, User, Heart, ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EcommerceLanding() {
    return (
        <div className="flex flex-col min-h-screen">
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
                        <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
                            Login
                        </Link>
                        
                    </nav>

                    <div className="flex items-center space-x-4">
                        <div className="hidden lg:flex items-center space-x-2">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                {/* <Input type="search" placeholder="Search products..." className="pl-8 w-64" /> */}
                                <Input
                                    type="search"
                                    placeholder="Search products..."
                                    className="pl-8 w-64 border border-gray-300 rounded-md bg-white text-black"
                                />

                            </div>
                        </div>
                        <Button variant="ghost" size="icon" className="relative">
                            <Heart className="h-5 w-5" />
                            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                                2
                            </Badge>
                        </Button>
                        <Button variant="ghost" size="icon">
                            <User className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingBag className="h-5 w-5" />
                            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                                3
                            </Badge>
                        </Button>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 md:py-32">
                    <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
                    <div className="container relative">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">🎉 New Collection 2024</Badge>
                                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                        Shop Smart,
                                        <br />
                                        Live Better
                                    </h1>
                                    <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                                        Discover premium products at unbeatable prices. From fashion to electronics, we've got everything
                                        you need with fast, free shipping.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="text-lg px-8 h-12 group">
                                        Start Shopping
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <Button variant="outline" size="lg" className="text-lg px-8 h-12 group bg-transparent">
                                        <Play className="mr-2 h-4 w-4" />
                                        Watch Demo
                                    </Button>
                                </div>
                                <div className="grid grid-cols-3 gap-8 pt-8">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">50K+</div>
                                        <div className="text-sm text-muted-foreground">Happy Customers</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">10K+</div>
                                        <div className="text-sm text-muted-foreground">Products</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">99%</div>
                                        <div className="text-sm text-muted-foreground">Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl" />
                                <Image
                                    src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg"
                                    alt="Hero Shopping Image"
                                    width={600}
                                    height={600}
                                    className="relative rounded-3xl shadow-2xl"
                                    priority
                                />
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                            <Truck className="h-6 w-6 text-green-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">Free Shipping</div>
                                            <div className="text-xs text-muted-foreground">On orders over $50</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Indicators */}
                <section className="py-12 border-b">
                    <div className="container">
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                            <div className="text-2xl font-bold">NIKE</div>
                            <div className="text-2xl font-bold">ADIDAS</div>
                            <div className="text-2xl font-bold">APPLE</div>
                            <div className="text-2xl font-bold">SAMSUNG</div>
                            <div className="text-2xl font-bold">SONY</div>
                            <div className="text-2xl font-bold">ZARA</div>
                        </div>
                    </div>
                </section>

                {/* Featured Categories */}
                <section id="categories" className="py-20">
                    <div className="container">
                        <div className="text-center space-y-4 mb-16">
                            <Badge className="w-fit mx-auto">Categories</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold">Shop by Category</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Explore our carefully curated collections across different categories
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    name: "Fashion & Style",
                                    image: "https://images.unsplash.com/photo-1551488831-68b4d0c07528",
                                    items: "2,500+ items",
                                    color: "from-pink-500 to-rose-500",
                                },
                                {
                                    name: "Electronics",
                                    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
                                    items: "1,200+ items",
                                    color: "from-blue-500 to-cyan-500",
                                },
                                {
                                    name: "Home & Living",
                                    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
                                    items: "800+ items",
                                    color: "from-green-500 to-emerald-500",
                                },
                                {
                                    name: "Sports & Fitness",
                                    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
                                    items: "600+ items",
                                    color: "from-orange-500 to-red-500",
                                },
                            ].map((category, index) => (
                                <Card
                                    key={index}
                                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
                                >
                                    <CardContent className="p-0">
                                        <div className="relative overflow-hidden">
                                            <Image
                                                src={category.image}
                                                alt={category.name}
                                                width={300}
                                                height={250}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                                                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                                                <p className="text-sm opacity-90">{category.items}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section id="products" className="py-20 bg-muted/30">
                    <div className="container">
                        <div className="text-center space-y-4 mb-16">
                            <Badge className="w-fit mx-auto">Best Sellers</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold">Featured Products</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Handpicked products that our customers love most
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    name: "Premium Wireless Headphones",
                                    price: 199,
                                    originalPrice: 249,
                                    rating: 4.8,
                                    reviews: 124,
                                    badge: "Best Seller",
                                    image: "https://images.unsplash.com/photo-1505740106531-4243f3831145",
                                },
                                {
                                    name: "Smart Fitness Watch",
                                    price: 299,
                                    originalPrice: 399,
                                    rating: 4.9,
                                    reviews: 89,
                                    badge: "New",
                                    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
                                },
                                {
                                    name: "Designer Laptop Backpack",
                                    price: 79,
                                    originalPrice: 99,
                                    rating: 4.7,
                                    reviews: 156,
                                    badge: "Sale",
                                    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
                                },
                                {
                                    name: "Portable Bluetooth Speaker",
                                    price: 149,
                                    originalPrice: 199,
                                    rating: 4.6,
                                    reviews: 203,
                                    badge: "Popular",
                                    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
                                },
                            ].map((product, index) => (
                                <Card
                                    key={index}
                                    className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
                                >
                                    <CardContent className="p-0">
                                        <div className="relative overflow-hidden">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={320}
                                                height={280}
                                                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
                                                {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                            </Badge>
                                            <Badge className="absolute top-3 right-3 bg-primary">{product.badge}</Badge>
                                            <Button
                                                size="icon"
                                                variant="secondary"
                                                className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                                            >
                                                <Heart className="h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="p-6 space-y-4">
                                            <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                                            <div className="flex items-center space-x-2">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                                                }`}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-muted-foreground">
                                                    {product.rating} ({product.reviews} reviews)
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="space-x-2">
                                                    <span className="font-bold text-xl">${product.price}</span>
                                                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                                                </div>
                                                <Button size="sm" className="group/btn">
                                                    Add to Cart
                                                    <ShoppingBag className="ml-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="text-center mt-16">
                            <Button variant="outline" size="lg" className="group bg-transparent">
                                View All Products
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <div className="container">
                        <div className="text-center space-y-4 mb-16">
                            <Badge className="w-fit mx-auto">Why Choose Us</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold">Built for Your Success</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                We're committed to providing the best shopping experience with unmatched service
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Truck,
                                    title: "Free Fast Shipping",
                                    description: "Free shipping on orders over $50. Express delivery available worldwide with tracking.",
                                    color: "text-blue-600",
                                    bgColor: "bg-blue-100",
                                },
                                {
                                    icon: Shield,
                                    title: "Secure Payments",
                                    description: "Your payment information is encrypted and secure with bank-level SSL protection.",
                                    color: "text-green-600",
                                    bgColor: "bg-green-100",
                                },
                                {
                                    icon: RefreshCw,
                                    title: "Easy Returns",
                                    description: "30-day hassle-free return policy. No questions asked, full money-back guarantee.",
                                    color: "text-orange-600",
                                    bgColor: "bg-orange-100",
                                },
                                {
                                    icon: Star,
                                    title: "Premium Quality",
                                    description: "Carefully curated products from trusted brands and verified suppliers worldwide.",
                                    color: "text-purple-600",
                                    bgColor: "bg-purple-100",
                                },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="text-center space-y-6 group hover:scale-105 transition-transform duration-300"
                                >
                                    <div
                                        className={`mx-auto w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <feature.icon className={`h-8 w-8 ${feature.color}`} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-xl">{feature.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Special Offer Banner */}
                <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
                    <div className="container">
                        <div className="text-center space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-white/20 text-white hover:bg-white/30">Limited Time Offer</Badge>
                                <h2 className="text-3xl md:text-5xl font-bold">Get 25% Off Your First Order</h2>
                                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                                    Join thousands of satisfied customers and start your shopping journey with us today.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" variant="secondary" className="text-lg px-8 h-12">
                                    Shop Now & Save
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 h-12 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 bg-muted/30">
                    <div className="container">
                        <div className="text-center space-y-4 mb-16">
                            <Badge className="w-fit mx-auto">Testimonials</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold">What Our Customers Say</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Don't just take our word for it - hear from our satisfied customers
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Sarah Johnson",
                                    role: "Fashion Enthusiast",
                                    content:
                                        "Absolutely love shopping here! The quality is amazing and shipping is super fast. Customer service went above and beyond to help me.",
                                    rating: 5,
                                    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                                },
                                {
                                    name: "Mike Chen",
                                    role: "Tech Professional",
                                    content:
                                        "Best place for electronics! Great prices, authentic products, and excellent customer support. Highly recommend to everyone.",
                                    rating: 5,
                                    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                                },
                                {
                                    name: "Emily Davis",
                                    role: "Home Decorator",
                                    content:
                                        "Found exactly what I needed for my home. The return process was incredibly easy when I needed to exchange an item. Five stars!",
                                    rating: 5,
                                    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
                                },
                            ].map((testimonial, index) => (
                                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardContent className="p-8 space-y-6">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>
                                        <p className="text-muted-foreground italic text-lg leading-relaxed">"{testimonial.content}"</p>
                                        <div className="flex items-center space-x-4">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                width={50}
                                                height={50}
                                                className="rounded-full"
                                            />
                                            <div>
                                                <p className="font-bold text-lg">{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center space-y-8">
                            <div className="space-y-4">
                                <Badge className="w-fit mx-auto">Stay Connected</Badge>
                                <h2 className="text-3xl md:text-5xl font-bold">Never Miss a Deal</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Subscribe to our newsletter and be the first to know about new products, exclusive deals, flash sales,
                                    and special offers. Join over 50,000 happy subscribers!
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <Input type="email" placeholder="Enter your email address" className="flex-1 h-12 text-lg" />
                                <Button size="lg" className="h-12 px-8">
                                    Subscribe Now
                                </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                By subscribing, you agree to our Privacy Policy and Terms of Service. Unsubscribe anytime.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

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
                                    <span className="sr-only">Facebook</span>📘
                                </Button>
                                <Button variant="outline" size="icon">
                                    <span className="sr-only">Twitter</span>🐦
                                </Button>
                                <Button variant="outline" size="icon">
                                    <span className="sr-only">Instagram</span>📷
                                </Button>
                                <Button variant="outline" size="icon">
                                    <span className="sr-only">LinkedIn</span>💼
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
    )
}