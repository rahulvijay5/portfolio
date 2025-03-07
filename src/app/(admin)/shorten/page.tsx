'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ShortenPage() {
  const [longUrl, setLongUrl] = useState('')
  const [slug, setSlug] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [password, setPassword] = useState('')
  const [isAuthorized, setIsAuthorized] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!longUrl) {
      toast({
        title: "Error",
        description: "Please enter a long URL to shorten",
        variant: "destructive",
      })
      return
    }
    setIsLoading(true)

    try {
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: longUrl, customSlug: slug }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error)
      }

      await navigator.clipboard.writeText(data.shortUrl)
      
      toast({
        title: "URL shortened and copied to clipboard!",
        description: data.shortUrl,
      })
      
      setLongUrl('')
      setSlug('')
    } catch (error) {
      toast({
        title: "Failed to shorten URL",
        description: (error as Error).message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handlePasswordSubmit = () => {
    if (password === process.env.NEXT_PUBLIC_UPLOAD_PASSWORD) {
      setIsAuthorized(true);
      setIsModalOpen(false);
      toast({
        title: "Access Granted",
        description: "You can now use the URL shortener.",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Try again!",
        variant: "destructive",
      });
    }
    setPassword("");
  };

  if (!isAuthorized) {
    return (
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              I told you{" "}
              <span className="text-red-500 font-bold text-2xl">not</span> to
              use this page!
            </DialogTitle>
            <DialogDescription/>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <Input
              type="password"
              placeholder="Now tell the password!"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="max-w-sm"
            />
            <Button onClick={handlePasswordSubmit}>Submit</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <div className="min-h-screen p-8 bg-white dark:bg-black text-black dark:text-white bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">URL Shortener</h1>
          <p className="text-gray-600 dark:text-gray-400">Create and track shortened URLs</p>
        </div>

        <Card className="bg-gray-100 dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <CardHeader>
            <CardTitle>Create New Short URL</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="url"
                  placeholder="Enter the long URL to shorten"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Custom short URL (optional)"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase())}
                  className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                />
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Your short URL will be: rahulvijay.site/{slug || '[random-slug]'}
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                {isLoading ? 'Creating...' : 'Create Short URL'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/shorten/manage">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Manage Your Shortened URLs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}