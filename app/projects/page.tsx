"use client"

import { useState } from "react"
import { NavigationSidebar } from "../components/navigation-sidebar"
import { Footer } from "../components/footer"

const projects = [
  {
    id: 1,
    title: "Options Chain Analysis Tool",
    description:
      "CLI-utility that gets contract data and returns information about liquidity, sentiment, and IV.",
    tags: ["Python", "yfinance", "pandas"],
    github: "https://github.com/ruandee/OC_tool",
  },
  {
    id: 2,
    title: "Mixed Effects Model",
    description:
      "Modeled reaction time as a function of sleep quality and caffeine intake. Handled categorical encoding, interaction terms, post-hoc tests (residuals, heteroscedasticity checks, Shapiro-Wilk, and p-value) and visualization",
    tags: ["statsmodels", "pandas", "seaborn","matplotlib","scikit-learn"],
    github: "https://github.com/ruandee/ME_Math_IA",
  },
  {
    id: 3,
    title: "Arduino-Based Falling-Ball Viscometer ",
    description:
      "Determined a fluid’s viscosity by tracking a sphere’s fall through solution with analog light barriers and circuit, calculating velocity and applying Stokes’ law",
    tags: ["Arduino C++"],
    github: "https://github.com/ruandee/viscometer",
  },
]

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div className="stars" />
      <NavigationSidebar />

      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 py-20 fade-in">
        <h1 className="mb-12 text-3xl font-light tracking-[0.3em] text-white md:text-4xl">
          <span className="text-[#84d1f0]">MY</span> PROJECTS
        </h1>

        <div className="w-full max-w-3xl space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative border-l-2 border-[#2a2a2a] py-4 pl-6 pr-4 transition-all duration-300 hover:border-[#84d1f0] hover:shadow-[0_0_20px_rgba(132,209,240,0.08)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute left-[-5px] top-6 h-2 w-2 rounded-full transition-colors duration-300 ${
          isHovered ? "bg-[#84d1f0]" : "bg-[#2a2a2a]"
        }`}
      />

      <div className="flex items-start justify-between">
        <div className="flex-1">
          <span className="mb-2 block text-sm tracking-wider text-[#84d1f0]">
            {String(project.id).padStart(2, "0")}
          </span>

          <h2 className="mb-3 text-xl font-light tracking-wider text-white transition-colors duration-300 group-hover:text-[#84d1f0] md:text-2xl">
            {project.title}
          </h2>

          <p className="mb-4 text-sm leading-relaxed text-white/60">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#84d1f0]/30 px-2 py-1 text-xs tracking-wider text-[#84d1f0]/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/gh relative ml-4 flex h-8 w-8 items-center justify-center border border-[#2a2a2a] transition-all duration-300 hover:border-[#84d1f0] hover:shadow-[0_0_12px_rgba(132,209,240,0.15)] btn-glow"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white/60 transition-colors duration-300 group-hover/gh:text-[#84d1f0]"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-transparent group-hover/gh:border-[#84d1f0] transition-colors duration-300" />
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t border-r border-transparent group-hover/gh:border-[#84d1f0] transition-colors duration-300" />
          <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b border-l border-transparent group-hover/gh:border-[#84d1f0] transition-colors duration-300" />
          <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-transparent group-hover/gh:border-[#84d1f0] transition-colors duration-300" />
        </a>
      </div>

      <span
        className={`absolute right-0 top-0 text-sm text-[#84d1f0] transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        ┐
      </span>
      <span
        className={`absolute bottom-0 right-0 text-sm text-[#84d1f0] transition-opacity duration-200 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        ┘
      </span>
    </div>
  )
}
