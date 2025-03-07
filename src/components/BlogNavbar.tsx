"use client"
import { useState, useEffect } from "react"
import { DarkModeToggle } from "./DarkModeToggle"
import Link from "next/link"
import { Menu, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"

const BlogNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm py-4" : "py-6",
      )}
    >
      <div className="container mx-auto px-5 flex items-center justify-between">
        <Link href="/blog" className="text-2xl font-semibold tracking-tight relative group">
          <span className="relative z-10"> Blogs by Rahul</span>
          {/* <span className="absolute bottom-0 left-0 w-full h-[6px] bg-primary/70 rounded-sm transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 -z-10"></span> */}
        </Link>

        <div className="flex items-center gap-8">
          <nav className="flex gap-6 items-center">
            <Link href="/t" className="text-sm font-medium hover:text-primary transition-colors">
              Tech
            </Link>
            <Link href="/c" className="text-sm font-medium hover:text-primary transition-colors">
              Travel
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <DarkModeToggle />
          </div>
        </div>

        {/* <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button> */}
      </div>

      {/* Mobile menu */}
      {/* {isMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-background z-40 p-6 md:hidden">
          <nav className="flex flex-col gap-6 text-lg">
            <Link
              href="/t"
              className="p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tech
            </Link>
            <Link
              href="/c"
              className="p-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Travel
            </Link>
          </nav>
        </div>
      )} */}
    </header>
  )
}

export default BlogNavbar

