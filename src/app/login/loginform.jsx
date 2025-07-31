'use client';
import Button from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import Input from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, User, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        // credentials: 'include', // if using cookies
      });

      const data = await res.json();
      console.log('Login response:', data);
      
      if (!res.ok) throw new Error(data?.detail || 'Login failed');

      alert('Login successful');
      localStorage.setItem('access', data.access);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex-1 flex items-center justify-center py-12">
      <Card className="w-full max-w-md border-0 shadow-xl">
        <CardContent className="p-8 space-y-8">
          <form className="text-center space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-muted-foreground text-lg">
              Log in to your NextShop account to continue shopping
            </p>
          </form>

          <div className="space-y-6">
            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="text"
                placeholder="Username"
                className="h-12 text-lg"
                value={username}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                className="h-12 text-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button type="submit" size="lg" className="w-full h-12 text-lg">
                Log In
              </Button>
            </form>

            {/* Forgot Password */}
            <div className="text-center">
              <Link
                href="/forgot-password"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Social Login */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-muted" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12">
                <Facebook className="h-5 w-5 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" className="h-12">
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" className="h-12">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </Button>
              <Button variant="outline" className="h-12">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link
                  href="/signup"
                  className="text-primary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
