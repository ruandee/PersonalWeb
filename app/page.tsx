"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { NavigationSidebar } from "./components/navigation-sidebar"
import { Footer } from "./components/footer"

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
  { label: "", text: "My favourite areas to explore include equity research," },
  { label: "", text: "options trading, and consumer behaviour." },
  { label: "—", text: "In my free time, I enjoy(?) relaxing(?)" },
  { label: "", text: "with some continental philosophy." },
  { label: "—", text: "I'm passionate about studying data" },
  { label: "", text: "to help me solve all types of problems." },
]

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

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-2 tracking-wider">
          {"hi! i'm "}
          <span className="text-[#84d1f0]">dee!</span>
        </h1>
        <p className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] mb-12 uppercase">
          PMATH at University of Waterloo
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <NavButton href="/projects" label="MY PROJECTS" />
        </div>
      </div>

      <section className="relative z-10 flex flex-col items-center px-4 py-32">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-16 tracking-[0.3em]">
            ABOUT <span className="text-[#84d1f0]">ME</span>
          </h2>
        </ScrollReveal>
        <BioReveal />
      </section>

      <div className="relative z-10 flex justify-center">
        <div className="w-px h-24 bg-[#2a2a2a]" />
      </div>

      <section className="relative z-10 flex flex-col items-center px-4 py-32">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-16 tracking-[0.3em]">
            WORK <span className="text-[#84d1f0]">EXPERIENCE</span>
          </h2>
        </ScrollReveal>

        <div className="max-w-2xl w-full">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[#2a2a2a]" />
            <div className="space-y-12">
              {workExperience.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 100}>
                  <TimelineItem item={item} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.7s ease, transform 0.7s ease`,
      }}
    >
      {children}
    </div>
  )
}

function BioReveal() {
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
          <span
            className="text-xs tracking-widest w-4 shrink-0 select-none"
            style={{
              color: line.label ? "#84d1f0" : "transparent",
              textShadow: line.label ? "0 0 8px rgba(132,209,240,0.8), 0 0 16px rgba(132,209,240,0.4)" : "none",
            }}
          >
            {line.label || "—"}
          </span>
          <span className="text-xs md:text-sm text-white/80 font-light leading-relaxed tracking-[0.15em] uppercase">
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
        <h3
          className={`text-xs md:text-sm font-light tracking-[0.15em] uppercase pt-2 px-4 transition-all duration-300 ${
            isHovered
              ? "text-[#84d1f0] drop-shadow-[0_0_8px_rgba(132,209,240,0.8)]"
              : "text-white"
          }`}
        >
          {item.role}
        </h3>
        <span className="text-[10px] text-white/40 tracking-wider px-4 pb-2 block">
          {item.date}
        </span>
      </div>
    </div>
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