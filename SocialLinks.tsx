import { Instagram, Mail, Phone } from 'lucide-react'

export default function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors">
        <Instagram size={24} />
      </a>
      <a href="mailto:info@aura2025.com" className="text-white hover:text-yellow-300 transition-colors">
        <Mail size={24} />
      </a>
      <a href="tel:+1234567890" className="text-white hover:text-yellow-300 transition-colors">
        <Phone size={24} />
      </a>
    </div>
  )
}

