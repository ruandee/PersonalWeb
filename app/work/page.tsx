"use client"

import { useState } from "react"
import { NavigationSidebar } from "../components/navigation-sidebar"
import { Footer } from "../components/footer"

const workExperience = [
  {
    id: 1,
    role: "Finance Officer / Hope For Hearing KW",
    date: "Sept 2023 – Feb 2025",
  },
  {
    id: 2,
    role: "Production and broadcast / Chengdu Jiguangshe",
    date: "Aug 2022 – Mar 2023",
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="stars" />
      
      <NavigationSidebar />
      
      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-20 fade-in">
        <h1 className="text-3xl md:text-4xl font-light text-white mb-16 tracking-[0.3em]">
          <span className="text-[#84d1f0]">WORK</span> EXPERIENCE
        </h1>

        <div className="max-w-2xl w-full">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2a2a2a]" />

            <div className="space-y-12">
              {workExperience.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

function TimelineItem({ item }: { item: typeof workExperience[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative pl-12 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute left-2 top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
          isHovered 
            ? "bg-[#84d1f0] border-[#84d1f0] shadow-[0_0_10px_rgba(132,209,240,0.5)]" 
            : "bg-[#0a0a0a] border-[#84d1f0]/50"
        }`} 
      />

      <div className="relative">
        <span 
          className={`absolute -top-2 -left-2 text-[#84d1f0] transition-opacity duration-200 text-xs ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {"┌"}
        </span>
        <span 
          className={`absolute -top-2 -right-2 text-[#84d1f0] transition-opacity duration-200 text-xs ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {"┐"}
        </span>
        <span 
          className={`absolute -bottom-2 -left-2 text-[#84d1f0] transition-opacity duration-200 text-xs ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {"└"}
        </span>
        <span 
          className={`absolute -bottom-2 -right-2 text-[#84d1f0] transition-opacity duration-200 text-xs ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {"┘"}
        </span>

        <h3 className={`text-lg md:text-xl font-light tracking-wider pt-2 px-4 transition-colors duration-300 ${
          isHovered ? "text-[#84d1f0]" : "text-white"
        }`}>
          {item.role}
        </h3>
        
        <span className="text-[10px] text-white/40 tracking-wider px-4 pb-2 block">
          {item.date}
        </span>
      </div>
    </div>
  )
}
