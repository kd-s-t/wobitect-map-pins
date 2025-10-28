import { MapContainer, TileLayer } from 'react-leaflet'
import { ClickHandler as MapClickHandler } from './index'
import DraggableMarker from './DraggableMarker'
import { useRef, forwardRef, useImperativeHandle } from 'react'
import { dMapSectionProps, MapRef } from '../types'

const dMapSection = forwardRef<MapRef, dMapSectionProps>(({ 
  pins, 
  hoveredPinId, 
  clickedPinId,
  onPositionChange, 
  onAddPin, 
  onPinClick,
  icon,
  showZoomControl = false 
}, ref) => {
  const mapRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    focusOnPin: (lat: number, lng: number) => {
      if (mapRef.current) {
        mapRef.current.setView([lat, lng], 15, {
          animate: true,
          duration: 1
        })
      }
    }
  }))

  return (
    <MapContainer
      ref={mapRef}
      center={[-37.8136, 144.9631]}
      zoom={10}
      className="h-full w-full"
      zoomControl={showZoomControl}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <MapClickHandler onAddPin={onAddPin} />
      
      {pins.map((pin, index) => (
        <DraggableMarker
          key={pin.id}
          pin={pin}
          icon={icon}
          index={index}
          isHovered={hoveredPinId === pin.id}
          isClicked={clickedPinId === pin.id}
          onPositionChange={onPositionChange}
          onPinClick={onPinClick}
        />
      ))}
    </MapContainer>
  )
})

dMapSection.displayName = 'dMapSection'

export default dMapSection
