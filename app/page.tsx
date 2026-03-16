"use client"

import { useState, useRef, useEffect } from "react"
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

const projects = [
  {
    id: 1,
    name: "Options Chain Analysis Tool",
    desc: "CLI-utility that gets contract data and returns information about liquidity, sentiment, and IV.",
    tags: ["Python", "yfinance", "pandas"],
    github: "https://github.com/ruandee/OC_tool",
  },
  {
    id: 2,
    name: "Mixed Effects Model",
    desc: "Modeled reaction time as a function of sleep quality and caffeine intake. Handled categorical encoding, interaction terms, post-hoc tests (residuals, heteroscedasticity checks, Shapiro-Wilk, and p-value) and visualization",
    tags: ["statsmodels", "pandas", "seaborn"],
    github: "https://github.com/ruandee/ME_Math_IA",
  },
  {
    id: 3,
    name: "Arduino-Based Falling-Ball Viscometer",
    desc: "Determined a fluid’s viscosity by tracking a sphere’s fall through solution with analog light barriers and circuit, calculating velocity and applying Stokes’ law",
    tags: ["Arduino C++"],
    github: "https://github.com/ruandee/viscometer",
  },
]

const bioLines = [
  { label: "—", text: "Hello, I'm Dee." },
  { label: "", text: "I'm interested in quantitative research." },
  { label: "", text: "My favourite areas to explore include equity research and consumer behaviour." },
  { label: "", text: "I'm passionate about studying data to help me understand different types of problems." },
  { label: "—", text: "In my free time, I enjoy(?) relaxing(??) with some continental philosophy." },
  { label: "", text: "My other hobbies include playing puzzle games, cuddling my cat, and taking pictures when I go outside." },
]

export default function Home() {
  const [showNotification, setShowNotification] = useState(true)

  return (
    <main className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      <div className="stars" />

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
        <p className="text-[10px] md:text-xs text-white/50 tracking-[0.2em] mb-10 uppercase">
          PMATH at University of Waterloo
        </p>

        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="group flex flex-col items-center gap-2"
        >
          <div className="relative px-8 py-2.5 border border-[#2a2a2a] group-hover:border-[#84d1f0] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(132,209,240,0.2)]">
            <span className="absolute -top-px -left-px w-2 h-2 border-t border-l border-transparent group-hover:border-[#84d1f0] transition-colors duration-300" />
            <span className="absolute -top-px -right-px w-2 h-2 border-t border-r border-transparent group-hover:border-[#84d1f0] transition-colors duration-300" />
            <span className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-transparent group-hover:border-[#84d1f0] transition-colors duration-300" />
            <span className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-transparent group-hover:border-[#84d1f0] transition-colors duration-300" />
            <span className="text-[10px] tracking-[0.3em] text-white/60 group-hover:text-[#84d1f0] group-hover:drop-shadow-[0_0_6px_rgba(132,209,240,0.8)] transition-all duration-300 uppercase">
              scroll
            </span>
          </div>
          <svg
            width="10" height="6" viewBox="0 0 10 6" fill="none"
            className="text-white/30 group-hover:text-[#84d1f0] group-hover:translate-y-1 transition-all duration-300"
          >
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <section id="about" className="relative z-10 flex flex-col items-center px-4 py-32">
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

      <section className="relative z-10 px-8 md:px-16 py-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          <div className="flex flex-col">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-16 tracking-[0.3em]">
                WORK <span className="text-[#84d1f0]">EXPERIENCE</span>
              </h2>
            </ScrollReveal>
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

          <div className="flex flex-col">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-16 tracking-[0.3em]">
                MY <span className="text-[#84d1f0]">PROJECTS</span>
              </h2>
            </ScrollReveal>
            <div className="space-y-6">
              {projects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 100}>
                  <div className="group border border-[#2a2a2a] hover:border-[#84d1f0]/50 px-6 py-5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(132,209,240,0.08)]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xs md:text-sm font-light tracking-[0.15em] text-white group-hover:text-[#84d1f0] group-hover:drop-shadow-[0_0_6px_rgba(132,209,240,0.6)] transition-all duration-300 mb-2">
                          {project.name}
                        </h3>
                        <p className="text-[10px] text-white/40 tracking-wider leading-relaxed mb-3">{project.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span key={tag} className="border border-[#84d1f0]/30 px-2 py-0.5 text-[9px] tracking-wider text-[#84d1f0]/70">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/gh relative flex h-7 w-7 shrink-0 items-center justify-center border border-[#2a2a2a] hover:border-[#84d1f0] transition-all duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-white/50 group-hover/gh:text-[#84d1f0] transition-colors duration-300">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
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
        transition: "opacity 0.7s ease, transform 0.7s ease",
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
          <span className="text-xs md:text-sm text-white/80 font-light leading-relaxed tracking-[0.15em]">
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
          className={`text-xs md:text-sm font-light tracking-[0.15em] pt-2 px-4 transition-all duration-300 ${
            isHovered ? "text-[#84d1f0] drop-shadow-[0_0_8px_rgba(132,209,240,0.8)]" : "text-white"
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