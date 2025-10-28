import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Icon } from 'leaflet'
import { Pin } from '@/libs/zustand/types'
import { MapIcon } from '@/shared/components'
import DesktopMapSection, { MapRef } from './d-MapSection'
import DesktopPinListSection from './d-PinListSection'

interface DesktopLayoutProps {
  pins: Pin[]
  isLoading: boolean
  hoveredPinId: string | null
  clickedPinId: string | null
  onPositionChange: (id: string, lat: number, lng: number) => void
  onAddPin: (pin: Pin) => void
  onRemovePin: (id: string) => void
  onPinHover: (id: string | null) => void
  onPinClick: (id: string | null) => void
  icon: Icon
}

const DesktopLayout = ({ 
  pins, 
  isLoading,
  hoveredPinId, 
  clickedPinId,
  onPositionChange, 
  onAddPin, 
  onRemovePin, 
  onPinHover, 
  onPinClick,
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
        className="absolute top-[76px] left-6 w-[360px] bg-white rounded-xl flex flex-col z-10"
        style={{
          maxWidth: '360px',
          height: 'calc(100vh - 96px)',
          marginBottom: '20px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px'
        }}
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
