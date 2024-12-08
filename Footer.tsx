'use client'

import { Music, Info, Users } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-purple-900 bg-opacity-50 backdrop-blur-md py-4">
      <nav className="flex justify-center space-x-12">
        <button
          onClick={() => document.dispatchEvent(new CustomEvent('changeSection', { detail: 'events' }))}
          className="flex flex-col items-center text-pink-200 hover:text-yellow-300 transition-colors"
        >
          <Music size={32} />
          <span className="mt-1 text-sm">Events</span>
        </button>
        <button
          onClick={() => document.dispatchEvent(new CustomEvent('changeSection', { detail: 'about' }))}
          className="flex flex-col items-center text-pink-200 hover:text-yellow-300 transition-colors"
        >
          <Info size={32} />
          <span className="mt-1 text-sm">About</span>
        </button>
        <button
          onClick={() => document.dispatchEvent(new CustomEvent('changeSection', { detail: 'guests' }))}
          className="flex flex-col items-center text-pink-200 hover:text-yellow-300 transition-colors"
        >
          <Users size={32} />
          <span className="mt-1 text-sm">Guests</span>
        </button>
      </nav>
    </footer>
  )
}

