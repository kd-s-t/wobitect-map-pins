import { useState } from 'react'
import { LocationIcon, TrashIcon } from '@/shared/components'
import { PinItemProps } from '../types'

const PinItem = ({ pin, onRemovePin, onHover, onClick, isActive = false }: PinItemProps) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => {
      onRemovePin(pin.id)
    }, 300)
  }

  const handleClick = () => {
    if (onClick) {
      onClick(pin)
    }
  }

  const displayNumber = pin.pinNumber

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
    <div 
      className={`border-b border-gray-200 p-4 flex items-center transition-all duration-300 ease-in-out relative cursor-pointer ${
        isActive 
          ? 'bg-blue-50' 
          : 'bg-white hover:bg-gray-50'
      } ${
        isDeleting 
          ? 'transform translate-x-full opacity-0 scale-95' 
          : 'transform translate-x-0 opacity-100 scale-100'
      }`}
      onMouseEnter={() => onHover(pin.id)}
      onMouseLeave={() => onHover(null)}
      onClick={handleClick}
    >
      {isDeleting && (
        <div className="absolute inset-0 bg-red-100 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Deleting...
          </div>
        </div>
      )}
      
      <div className="w-10 h-10 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
        <span className="text-sm font-medium text-blue-700">#{displayNumber}</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center mb-1">
          <span className="text-sm font-medium text-gray-900">Pin #{displayNumber}</span>
        </div>
        <div className="flex items-center">
          <LocationIcon className="w-3 h-3 text-gray-500 mr-2 flex-shrink-0" />
          <p className="text-xs text-gray-600">
            {formatCoordinates(pin.lat, pin.lng)}
          </p>
        </div>
      </div>
      
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleDelete()
        }}
        disabled={isDeleting}
        className={`ml-4 w-10 h-10 border border-red-300 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors flex-shrink-0 ${
          isDeleting ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
        }`}
      >
        <TrashIcon className="w-5 h-5 text-red-600" />
      </button>
    </div>
  )
}

export default PinItem
