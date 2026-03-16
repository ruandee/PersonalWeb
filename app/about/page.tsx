"use client"

import { useState, useRef, useEffect } from "react"
import { NavigationSidebar } from "../components/navigation-sidebar"
import { Footer } from "../components/footer"

const workExperience = [
  {
    id: 1,
    role: "Finance Officer / Hope For Hearing KW",
    date: "Sept 2023 – Oct 2024",
  },
  {
    id: 2,
    role: "Production and broadcast / Chengdu Jiguangshe",
    date: "Aug 2022 – Mar 2023",
  },
]

const bioLines = [
  { label: "—", text: "Hello, I'm Dee." },
  { label: "", text: "I'm interested in quantitative research." },
  { label: "—", text: "I'm passionate about studying data" },
  { label: "", text: "to help me solve all types of problems." },
  { label: "", text: "My favourite areas to explore include equity research and consumer behaviour." },
  { label: "", text: "My hobbies are playing puzzle games, cuddling my cat, and taking pictures." },
  { label: "—", text: "In my free time, I enjoy(?) relaxing(??) with some continental philosophy." },
  { label: "", text: "I also like to read strange books such as those by Carl Jung." },
  
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="stars" />
      <NavigationSidebar />

      <div className="relative z-10 flex flex-col items-center min-h-screen px-4 py-20 fade-in">

        <h1 className="text-3xl md:text-4xl font-light text-white mb-20 tracking-[0.3em]">
          <span className="text-[#84d1f0]">ABOUT</span> ME
        </h1>

        <AboutBio />

        <div className="w-px h-24 bg-[#2a2a2a] my-20" />

        <h2 className="text-3xl md:text-4xl font-light text-white mb-16 tracking-[0.3em]">
          <span className="text-[#84d1f0]">WORK</span> EXPERIENCE
        </h2>

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

function AboutBio() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered.current) {
          hasTriggered.current = true
          bioLines.forEach((_, i) => {
            setTimeout(() => {
              setVisibleLines((prev) => [...prev, i])
            }, i * 120)
          })
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="max-w-2xl w-full space-y-3">
      {bioLines.map((line, i) => (
        <div
          key={i}
          className="flex items-baseline gap-4 transition-all duration-700"
          style={{
            opacity: visibleLines.includes(i) ? 1 : 0,
            transform: visibleLines.includes(i) ? "translateY(0)" : "translateY(10px)",
          }}
        >
          <span className="text-[#84d1f0] text-xs tracking-widest w-4 shrink-0 select-none">
            {line.label}
          </span>
          <span className="text-white/80 text-lg md:text-xl font-light leading-relaxed tracking-wide">
            {line.text}
          </span>
        </div>
      ))}
    </div>
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
        <h3 className={`text-lg md:text-xl font-light tracking-wider pt-2 px-4 transition-all duration-300 ${
          isHovered ? "text-[#84d1f0] drop-shadow-[0_0_8px_rgba(132,209,240,0.8)]" : "text-white"
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