"use client"

import { useState } from "react"
import Link from "next/link"
import { NavigationSidebar } from "components/navigation-sidebar"
import { Footer } from "components/footer"

export default function Home() {
  const [showNotification, setShowNotification] = useState(true)

  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="stars" />
      
      <NavigationSidebar />

      <div 
        className={`fixed top-6 right-8 md:right-12 z-50 transition-all duration-500 ease-in-out ${
          showNotification ? "translate-x-0 opacity-100" : "translate-x-[200%] opacity-0"
        }`}
      >
        <div className="group relative bg-[#1a1a1a]/90 border border-[#2a2a2a] px-3 py-2 rounded-lg flex items-center gap-2 hover:border-[#84d1f0]/30 transition-colors duration-300">
          <span className="w-2 h-2 bg-white rounded-full blink" />
          <span className="text-xs text-white/90 tracking-wide">seeking winter 2027 co-op</span>
          <button
            onClick={() => setShowNotification(false)}
            className="ml-1 w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white/50 hover:text-white"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 1L9 9M9 1L1 9" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-2 tracking-wider">
          {"hi! i'm "}
          <span className="text-[#84d1f0]">dee!</span>
        </h1>

        <p className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] mb-12 uppercase">
          PMATH at University of Waterloo
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <NavButton href="/about" label="ABOUT ME" />
          <NavButton href="/projects" label="MY PROJECTS" />
          <NavButton href="/work" label="WORK" />
        </div>
      </div>

      <Footer />
    </main>
  )
}

function NavButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <div className="group relative px-6 py-3 cursor-pointer transition-all duration-300 btn-glow">
        <div className="absolute inset-0 border border-[#2a2a2a] group-hover:border-[#84d1f0] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(132,209,240,0.1)]" />
        
        <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-transparent group-hover:border-[#84d1f0] transition-colors duration-300" />
        <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-transparent group-hover:border-[#84d1f0] transition-colors duration-300" />
        <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-transparent group-hover:border-[#84d1f0] transition-colors duration-300" />
        <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-transparent group-hover:border-[#84d1f0] transition-colors duration-300" />
        
        <span className="relative text-sm tracking-[0.2em] text-white group-hover:text-[#84d1f0] transition-colors duration-300">
          {label}
        </span>
      </div>
    </Link>
  )
}
