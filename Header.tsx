'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  function calculateTimeLeft() {
    const difference = +new Date("2025-03-15") - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  return (
    <header className="text-center py-4 px-4 bg-purple-900 bg-opacity-50 backdrop-blur-md">
      <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-pulse text-yellow-300">AURA2025</h1>
      <div className="text-sm md:text-xl font-semibold">
        {timeLeft.days && (
          <div className="flex justify-center space-x-2 md:space-x-4">
            <div className="flex flex-col">
              <span className="text-lg md:text-3xl text-pink-300">{timeLeft.days}</span>
              <span className="text-xs md:text-sm">Days</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-3xl text-pink-300">{timeLeft.hours}</span>
              <span className="text-xs md:text-sm">Hours</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-3xl text-pink-300">{timeLeft.minutes}</span>
              <span className="text-xs md:text-sm">Minutes</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-3xl text-pink-300">{timeLeft.seconds}</span>
              <span className="text-xs md:text-sm">Seconds</span>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

