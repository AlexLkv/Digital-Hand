"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-zinc-900/90 backdrop-blur-md py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Digital <span className="text-purple-500">Hand</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="#concept"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Концепция
              </Link>
            </li>
            <li>
              <Link
                href="#problem"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Проблема
              </Link>
            </li>
            <li>
              <Link
                href="#product"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Продукт
              </Link>
            </li>
            <li>
              <Link
                href="#advantages"
                className="text-white hover:text-purple-400 transition-colors"
              >
                Преимущества
              </Link>
            </li>
          </ul>
        </nav>

        <Button asChild className="bg-purple-600 hover:bg-purple-700">
          <Link href="#preorder">Предзаказ</Link>
        </Button>
      </div>
    </header>
  )
}
