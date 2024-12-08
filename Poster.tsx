'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Poster() {
  const [activeSection, setActiveSection] = useState('poster')

  useEffect(() => {
    const handleSectionChange = (event: CustomEvent) => {
      setActiveSection(event.detail)
    }

    document.addEventListener('changeSection', handleSectionChange as EventListener)

    return () => {
      document.removeEventListener('changeSection', handleSectionChange as EventListener)
    }
  }, [])

  const renderContent = () => {
    switch (activeSection) {
      case 'events':
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Events</h2>
            <ul className="list-disc list-inside">
              <li>Battle of the Bands - Main Stage</li>
              <li>DJ Night - Electronic Arena</li>
              <li>Classical Fusion Concert - Harmony Hall</li>
              <li>Rap Battle Showdown - Urban Corner</li>
              <li>Acoustic Open Mic - Chill Zone</li>
            </ul>
          </div>
        )
      case 'about':
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">About AURA2025</h2>
            <p>AURA2025 is the pinnacle of musical celebration at our college. It's a three-day extravaganza that brings together diverse genres, talented artists, and music enthusiasts from all over the country. Experience the magic of music, forge new friendships, and create memories that will last a lifetime.</p>
          </div>
        )
      case 'guests':
        return (
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Guest Artists</h2>
            <ul className="list-disc list-inside">
              <li>Imagine Dragons - Headlining Act</li>
              <li>AR Rahman - Special Fusion Performance</li>
              <li>Dua Lipa - Pop Night Star</li>
              <li>Nucleya - Electronic Dance Music Icon</li>
              <li>The Local Train - Indie Rock Sensation</li>
            </ul>
          </div>
        )
      default:
        return (
          <Image
            src="/placeholder.svg?height=600&width=400&text=AURA2025"
            alt="AURA2025 Event Poster"
            width={400}
            height={600}
            className="rounded-lg shadow-2xl mx-auto"
          />
        )
    }
  }

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 max-w-2xl w-full">
        {renderContent()}
      </div>
    </div>
  )
}

