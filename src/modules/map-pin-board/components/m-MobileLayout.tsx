import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Icon } from 'leaflet'
import { Pin } from '@/libs/zustand/types'
import { MapIcon } from '@/shared/components'
import MMapSection, { MapRef } from './m-MapSection'
import MPinListSection from './m-PinListSection'
import DraggableHandle from './DraggableHandle'

interface mLayoutProps {
  pins: Pin[]
  isLoading: boolean
  hoveredPinId: string | null
  onPositionChange: (id: string, lat: number, lng: number) => void
  onAddPin: (pin: Omit<Pin, 'id'>) => void
  onRemovePin: (id: string) => void
  onPinHover: (id: string | null) => void
  icon: Icon
}

const mLayout = ({ 
  pins, 
  isLoading,
  hoveredPinId, 
  onPositionChange, 
  onAddPin, 
  onRemovePin, 
  onPinHover, 
  icon 
}: mLayoutProps) => {
  const [pinListHeight, setPinListHeight] = useState(isLoading ? 30 : (pins.length === 0 ? 30 : 40))
  const [isDragging, setIsDragging] = useState(false)
  const [activePinId, setActivePinId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MapRef>(null)

  const handleDrag = (deltaY: number) => {
    if (!containerRef.current) return
    
    const containerHeight = containerRef.current.clientHeight
    const headerHeight = 52
    const availableHeight = containerHeight - headerHeight
    
    const deltaPercentage = (deltaY / availableHeight) * 100
    
    const minHeight = pins.length === 0 ? 25 : 20
    const newHeight = Math.max(minHeight, Math.min(80, pinListHeight - deltaPercentage))
    setPinListHeight(newHeight)
    setIsDragging(true)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handlePinClick = (pin: Pin) => {
    setActivePinId(pin.id)
    onPinHover(pin.id)
    
    if (mapRef.current) {
      mapRef.current.focusOnPin(pin.lat, pin.lng)
    }
  }

  return (
    <div ref={containerRef} className="h-screen relative md:hidden">
      <motion.div 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white h-[52px] flex items-center justify-center border-b border-gray-200 rounded-t-lg relative z-10"
      >
        <div className="flex items-center">
          <MapIcon className="w-5 h-5 mr-2" />
          <h1 className="text-base font-semibold text-gray-800">Map Pinboard</h1>
        </div>
      </motion.div>

      <div 
        className="absolute top-[52px] left-0 right-0 z-0"
        style={{ bottom: `${pinListHeight - 5}vh` }}
      >
        <MMapSection
          ref={mapRef}
          pins={pins}
          hoveredPinId={hoveredPinId}
          clickedPinId={activePinId}
          onPositionChange={onPositionChange}
          onAddPin={onAddPin}
          onPinClick={setActivePinId}
          icon={icon}
          showZoomControl={true}
        />
      </div>

      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: -10, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className={`absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 transition-all duration-200 ease-out z-50 ${
          isDragging ? 'shadow-lg' : ''
        }`}
        style={{ 
          height: `${pinListHeight}vh`, 
          minHeight: '200px',
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '30px'
        }}
      >
        <DraggableHandle onDrag={handleDrag} onDragEnd={handleDragEnd} />
        
        <div className="flex-1 flex flex-col min-h-0" style={{ height: `calc(${pinListHeight}vh - 50px)` }}>
          <MPinListSection
            pins={pins}
            isLoading={isLoading}
            onRemovePin={onRemovePin}
            onPinHover={onPinHover}
            onPinClick={handlePinClick}
            activePinId={activePinId}
            isMobile={true}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default mLayout
