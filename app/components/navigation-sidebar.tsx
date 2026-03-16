"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "MY PROJECTS", href: "/projects" },
  { name: "ABOUT ME", href: "/about" },
  { name: "HOME", href: "/" },
]

export function NavigationSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div
        className={`flex flex-col-reverse gap-1 mb-2 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {navItems.map((item, i) => (
          <NavItem
            key={item.name}
            name={item.name}
            href={item.href}
            isActive={pathname === item.href}
            style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
          />
        ))}
      </div>

      <button
        onClick={() => setIsOpen((v) => !v)}
        className="group flex items-center gap-3 focus:outline-none"
        aria-label="Toggle navigation"
      >
        <div className="relative flex flex-col justify-center items-center w-8 h-8">
          <span
            className={`block h-px bg-white transition-all duration-300 ${
              isOpen ? "w-5 rotate-45 translate-y-px" : "w-5"
            }`}
          />
          <span
            className={`block h-px bg-white mt-1.5 transition-all duration-300 ${
              isOpen ? "w-5 -rotate-45 -translate-y-[7px]" : "w-3"
            }`}
          />
        </div>
        <span className="text-xs tracking-[0.25em] text-white/50 group-hover:text-white/80 transition-colors duration-200">
          {isOpen ? "CLOSE" : "MENU"}
        </span>
      </button>
    </div>
  )
}

function NavItem({
  name,
  href,
  isActive,
  style,
}: {
  name: string
  href: string
  isActive: boolean
  style?: React.CSSProperties
}) {
  return (
    <Link href={href} style={style}>
      <div
        className={`
          relative px-5 py-2.5 text-sm tracking-[0.2em] font-light whitespace-nowrap
          transition-all duration-200
          ${
            isActive
              ? "bg-[#84d1f0] text-white shadow-[0_0_16px_2px_rgba(132,209,240,0.4)]"
              : "text-white/60 hover:text-white hover:drop-shadow-[0_0_8px_rgba(132,209,240,0.8)]"
          }
        `}
      >
        {name}
      </div>
    </Link>
  )
}