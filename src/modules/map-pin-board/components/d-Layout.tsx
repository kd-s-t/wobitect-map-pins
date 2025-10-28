import { motion } from 'framer-motion'
import { useRef } from 'react'
import { MapIcon } from '@/shared/components'
import DesktopMapSection from './d-MapSection'
import DesktopPinListSection from './d-PinListSection'
import { DesktopLayoutProps, MapRef } from '../types'

const DesktopLayout = ({ 
  pins, 
  isLoading,
  hoveredPinId, 
  onPositionChange, 
  onAddPin, 
  onRemovePin, 
  onPinHover, 
  icon 
}: DesktopLayoutProps) => {
  const mapRef = useRef<MapRef>(null)
  return (
    <div className="h-screen relative hidden md:block">
      <div className="absolute inset-0 z-0">
        <DesktopMapSection
          ref={mapRef}
          pins={pins}
          hoveredPinId={hoveredPinId}
          clickedPinId={null}
          onPositionChange={onPositionChange}
          onAddPin={onAddPin}
          onPinClick={() => {}}
          icon={icon}
          showZoomControl={false}
        />
      </div>

      <motion.div 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white h-[52px] flex items-center justify-center z-10"
      >
        <div className="flex items-center">
          <MapIcon className="w-6 h-6 mr-3" />
          <h1 className="text-lg font-semibold text-gray-800">Map Pinboard</h1>
        </div>
      </motion.div>

      <motion.div 
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="absolute top-[76px] left-6 w-[360px] bg-white rounded-xl flex flex-col z-10 max-w-[360px] h-[calc(100vh-96px)] mb-5 shadow-lg"
      >
        <DesktopPinListSection
          pins={pins}
          isLoading={isLoading}
          onRemovePin={onRemovePin}
          onPinHover={onPinHover}
          onPinClick={undefined}
          activePinId={null}
          isMobile={false}
        />
      </motion.div>
    </div>
  )
}

export default DesktopLayout
