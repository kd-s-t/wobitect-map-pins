import { Icon } from 'leaflet'
import { useState, useEffect } from 'react'
import { usePinStore } from '@/libs/zustand'
import { DesktopLayout, MobileLayout } from './index'

const customIcon = new Icon({
  iconUrl: '/MapPin.svg',
  iconSize: [30, 44],
  iconAnchor: [15, 44],
  popupAnchor: [0, -44],
})

const Page = () => {
  const pins = usePinStore((state) => state.pins)
  const isLoading = usePinStore((state) => state.isLoading)
  const loadPins = usePinStore((state) => state.loadPins)
  const updatePinPosition = usePinStore((state) => state.updatePinPosition)
  const [hoveredPinId, setHoveredPinId] = useState<string | null>(null)
  const [clickedPinId, setClickedPinId] = useState<string | null>(null)

  useEffect(() => {
    loadPins()
  }, [loadPins])

  const handleAddPin = (pin: any) => {
    const addPin = usePinStore.getState().addPin
    addPin(pin)
  }

  const handleRemovePin = (id: string) => {
    const removePin = usePinStore.getState().removePin
    removePin(id)
  }

  return (
    <>
      <DesktopLayout
        pins={pins}
        isLoading={isLoading}
        hoveredPinId={hoveredPinId}
        clickedPinId={clickedPinId}
        onPositionChange={updatePinPosition}
        onAddPin={handleAddPin}
        onRemovePin={handleRemovePin}
        onPinHover={setHoveredPinId}
        onPinClick={setClickedPinId}
        icon={customIcon}
      />
      
      <MobileLayout
        pins={pins}
        isLoading={isLoading}
        hoveredPinId={hoveredPinId}
        clickedPinId={clickedPinId}
        onPositionChange={updatePinPosition}
        onAddPin={handleAddPin}
        onRemovePin={handleRemovePin}
        onPinHover={setHoveredPinId}
        onPinClick={setClickedPinId}
        icon={customIcon}
      />
    </>
  )
}

export default Page