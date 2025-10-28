import { useState } from 'react'
import { Pin } from '@/libs/zustand/types'

interface PinItemProps {
  pin: Pin
  index: number
  onRemovePin: (id: string) => void
}

const PinItem = ({ pin, index, onRemovePin }: PinItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    // Delay the actual deletion to allow animation to complete
    setTimeout(() => {
      onRemovePin(pin.id)
    }, 300)
  }

  // Use sequential numbering based on current position in the list
  const displayNumber = index + 1

  const formatCoordinates = (lat: number, lng: number) => {
    const formatDMS = (coord: number, isLat: boolean) => {
      const abs = Math.abs(coord)
      const deg = Math.floor(abs)
      const min = Math.floor((abs - deg) * 60)
      const sec = ((abs - deg) * 60 - min) * 60
      const dir = isLat ? (coord >= 0 ? 'N' : 'S') : (coord >= 0 ? 'E' : 'W')
      return `${deg}°${min}'${sec.toFixed(1)}"${dir}`
    }
    return `${formatDMS(lat, true)} ${formatDMS(lng, false)}`
  }

  return (
    <div className={`bg-white border-b border-gray-200 p-5 flex items-center transition-all duration-300 ease-in-out ${
      isDeleting 
        ? 'transform translate-x-full opacity-0 scale-95' 
        : 'transform translate-x-0 opacity-100 scale-100'
    }`}>
      <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        <span className="text-sm font-medium text-blue-700">#{displayNumber}</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center mb-1">
          <span className="text-sm font-medium text-gray-900">Pin #{displayNumber}</span>
        </div>
        <div className="flex items-center">
          <svg className="w-3 h-3 text-gray-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p className="text-xs text-gray-600">
            {formatCoordinates(pin.lat, pin.lng)}
          </p>
        </div>
      </div>
      
      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className={`ml-4 w-10 h-10 border border-red-300 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors flex-shrink-0 ${
          isDeleting ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
        }`}
      >
        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}

export default PinItem
