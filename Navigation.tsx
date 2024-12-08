'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Events', section: 'events' },
  { name: 'About', section: 'about' },
  { name: 'Guests', section: 'guests' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (section: string) => {
    document.dispatchEvent(new CustomEvent('changeSection', { detail: section }))
    setIsOpen(false)
  }

  return (
    <nav className="absolute top-0 right-0 z-20">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4 p-4">
        {navItems.map((item) => (
          <button
            key={item.section}
            onClick={() => handleNavClick(item.section)}
            className="text-pink-200 hover:text-yellow-300 transition-colors"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 text-pink-200 hover:text-yellow-300 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-purple-900 bg-opacity-90 rounded-md shadow-lg py-1">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className="block px-4 py-2 text-sm text-pink-200 hover:bg-purple-800 hover:text-yellow-300 w-full text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

