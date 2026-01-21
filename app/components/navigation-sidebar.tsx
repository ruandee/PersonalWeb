"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT ME", href: "/about" },
  { name: "MY PROJECTS", href: "/projects" },
  { name: "WORK", href: "/work" },
]

export function NavigationSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div 
      className="fixed top-6 left-6 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="cursor-pointer p-2 transition-all duration-300 hover:opacity-80">
        <Menu className="h-6 w-6 text-white" />
      </div>

      <div 
        className={`absolute top-10 left-0 bg-[#0a0a0a]/95 backdrop-blur-sm border border-[#2a2a2a] transition-all duration-300 ease-out overflow-hidden ${
          isOpen ? "opacity-100 max-h-96 py-4" : "opacity-0 max-h-0 py-0"
        }`}
      >
        <div className="px-2">
          <div className="text-[#84d1f0] text-xs tracking-[0.3em] px-4 pb-3 border-b border-[#2a2a2a] mb-3">
            NAVIGATION
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavItem 
                key={item.name} 
                name={item.name} 
                href={item.href}
                isActive={pathname === item.href}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

function NavItem({ 
  name, 
  href, 
  isActive 
}: { 
  name: string
  href: string
  isActive: boolean 
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={href}>
      <div
        className={`relative px-4 py-2 cursor-pointer transition-all duration-200 group ${
          isActive ? "bg-[#84d1f0]/10" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span 
          className={`absolute top-0 left-0 text-[#84d1f0] transition-opacity duration-200 text-sm ${
            isHovered || isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {"┌"}
        </span>
        <span 
          className={`absolute top-0 right-0 text-[#84d1f0] transition-opacity duration-200 text-sm ${
            isHovered || isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {"┐"}
        </span>
        <span 
          className={`absolute bottom-0 left-0 text-[#84d1f0] transition-opacity duration-200 text-sm ${
            isHovered || isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {"└"}
        </span>
        <span 
          className={`absolute bottom-0 right-0 text-[#84d1f0] transition-opacity duration-200 text-sm ${
            isHovered || isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {"┘"}
        </span>

        <span className={`text-sm tracking-wider whitespace-nowrap ${
          isActive ? "text-[#84d1f0]" : "text-white"
        }`}>
          {name}
        </span>
      </div>
    </Link>
  )
}
