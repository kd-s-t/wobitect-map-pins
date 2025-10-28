import { useEffect, useRef, useState } from 'react'
import { Marker, Tooltip as LeafletTooltip } from 'react-leaflet'
import { LocationIcon } from '@/shared/components'
import { DraggableMarkerProps } from '../types'

const DraggableMarker = ({ pin, icon, isHovered, isClicked, onPositionChange, onPinClick }: DraggableMarkerProps) => {
  const markerRef = useRef<any>(null)
  const tooltipRef = useRef<any>(null)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    if (markerRef.current) {
      const marker = markerRef.current
      
      marker.dragging.enable()
      
      const handleDragEnd = (e: any) => {
        const { lat, lng } = e.target.getLatLng()
        onPositionChange(pin.id, lat, lng)
      }

      const handleClick = (e: any) => {
        e.originalEvent.stopPropagation()
        onPinClick(isClicked ? null : pin.id)
      }

      marker.on('dragend', handleDragEnd)
      marker.on('click', handleClick)

      return () => {
        marker.off('dragend', handleDragEnd)
        marker.off('click', handleClick)
      }
    }
  }, [pin.id, onPositionChange])

  useEffect(() => {
    if (isHovered || isClicked) {
      setShowTooltip(true)
    } else {
      setShowTooltip(false)
    }
  }, [isHovered, isClicked])

  useEffect(() => {
    const handleMapClick = () => {
      if (onPinClick) {
        onPinClick(null)
      }
    }

    if (markerRef.current) {
      const map = markerRef.current._map
      if (map) {
        map.on('click', handleMapClick)
        return () => {
          map.off('click', handleMapClick)
        }
      }
    }
  }, [onPinClick])

  const displayNumber = pin.pinNumber
  
  const formatToDMS = (coord: number, isLat: boolean) => {
    const abs = Math.abs(coord)
    const degrees = Math.floor(abs)
    const minutes = Math.floor((abs - degrees) * 60)
    const seconds = ((abs - degrees) * 60 - minutes) * 60
    
    const direction = isLat 
      ? (coord >= 0 ? 'N' : 'S')
      : (coord >= 0 ? 'E' : 'W')
    
    return `${degrees}°${minutes}'${seconds.toFixed(1)}"${direction}`
  }
  
  const formattedCoords = `${formatToDMS(pin.lat, true)} ${formatToDMS(pin.lng, false)}`
  
  const tooltipDirection = "right"
  const tooltipOffset: [number, number] = [10, -25]

  return (
    <Marker
      ref={markerRef}
      position={[pin.lat, pin.lng]}
      icon={icon}
      draggable={true}
    >
      {showTooltip && (
        <LeafletTooltip
          ref={tooltipRef}
          permanent={true}
          direction={tooltipDirection}
          offset={tooltipOffset}
          className="custom-hover-tooltip"
        >
          <div className="bg-white text-gray-900 px-3 py-2 rounded-lg shadow-lg border border-gray-200">
            <div className="font-semibold text-gray-900 mb-1">Pin #{displayNumber}</div>
            <div className="flex items-center text-xs text-gray-600">
              <LocationIcon className="w-3 h-3 text-gray-500 mr-1 flex-shrink-0" />
              <span>{formattedCoords}</span>
            </div>
          </div>
        </LeafletTooltip>
      )}
    </Marker>
  )
}

export default DraggableMarker
