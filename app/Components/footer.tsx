"use client"

import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 py-6 px-8">
      <div className="flex justify-center gap-6">
        <a 
          href="https://github.com/ruandee" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-muted-foreground hover:text-[#84d1f0] transition-colors duration-300"
        >
          <Github className="h-5 w-5" />
          <span className="text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            GITHUB
          </span>
        </a>
        <a 
          href="https://linkedin.com/in/deeruan" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-muted-foreground hover:text-[#84d1f0] transition-colors duration-300"
        >
          <Linkedin className="h-5 w-5" />
          <span className="text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            LINKEDIN
          </span>
        </a>
      </div>
    </footer>
  )
}
