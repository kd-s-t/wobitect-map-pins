import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { MapIcon } from '@/shared/components'
import MMapSection from './m-MapSection'
import MPinListSection from './m-PinListSection'
import DraggableHandle from './DraggableHandle'
import { mLayoutProps, Pin } from '../types'

const mLayout = ({ 
  pins, 
  isLoading,
  clickedPinId,
  onPositionChange, 
  onAddPin, 
  onRemovePin, 
  onPinHover, 
  onPinClick,
  icon 
}: mLayoutProps) => {
  const [pinListHeight, setPinListHeight] = useState(isLoading ? 30 : (pins.length === 0 ? 30 : 40))
  const [isDragging, setIsDragging] = useState(false)
  const [activePinId, setActivePinId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
    onPinClick(pin.id)
  }

  const mapHeight = 100 - pinListHeight

  return (
    <div ref={containerRef} className="h-screen flex flex-col md:hidden">
      <motion.div 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white h-[52px] flex items-center justify-center border-b border-gray-200 rounded-t-lg"
      >
        <div className="flex items-center">
          <MapIcon className="w-5 h-5 mr-2" />
          <h1 className="text-base font-semibold text-gray-800">Map Pinboard</h1>
        </div>
      </motion.div>

      <div 
        className="relative transition-all duration-200 ease-out"
        style={{ height: `${mapHeight}vh` }}
      >
        <MMapSection
          pins={pins}
          hoveredPinId={null}
          clickedPinId={clickedPinId}
          onPositionChange={onPositionChange}
          onAddPin={onAddPin}
          onPinClick={onPinClick}
          icon={icon}
          showZoomControl={true}
        />
      </div>

      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className={`bg-white border-t border-gray-200 transition-all duration-200 ease-out ${
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
