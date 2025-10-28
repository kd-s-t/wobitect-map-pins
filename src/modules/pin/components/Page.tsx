import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { motion } from 'framer-motion'
import { usePinStore } from '@/libs/zustand'
import { List as PinList, ClickHandler as MapClickHandler } from './index'

// Fix for default markers in react-leaflet
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const Page = () => {
  const pins = usePinStore((state) => state.pins)

  return (
    <div className="h-screen relative">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <MapContainer
          center={[-37.8136, 144.9631]}
          zoom={10}
          className="h-full w-full"
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <MapClickHandler onAddPin={(pin) => {
            const addPin = usePinStore.getState().addPin
            addPin(pin)
          }} />
          
          {pins.map((pin) => (
            <Marker
              key={pin.id}
              position={[pin.lat, pin.lng]}
              icon={defaultIcon}
            >
              <Popup>
                <div>
                  <p><strong>Coordinates:</strong> {pin.lat.toFixed(6)}, {pin.lng.toFixed(6)}</p>
                  {pin.address && <p><strong>Address:</strong> {pin.address}</p>}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Header */}
      <motion.div 
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative bg-white h-[52px] flex items-center justify-center z-10"
      >
        <div className="flex items-center">
          <img src="/MapPin.svg" alt="Map Pin" className="w-6 h-6 mr-3" />
          <h1 className="text-lg font-semibold text-gray-800">Map Pinboard</h1>
        </div>
      </motion.div>

      {/* Pin List Panel - Left Side */}
      <motion.div 
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="absolute top-[76px] left-6 w-[360px] bg-white rounded-t-xl flex flex-col z-10"
        style={{
          maxWidth: '360px',
          height: 'calc(100vh - 160px)',
          marginBottom: '20px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px 12px 0px 0px',
          overflow: 'hidden'
        }}
      >
          {/* Header */}
          <motion.div 
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="h-[60px] border-b border-gray-200 flex items-center px-5"
          >
            <h2 className="text-lg font-semibold text-gray-800 m-5">Pin Lists</h2>
          </motion.div>
          
          {/* Body */}
          <div className="flex-1 flex flex-col">
            {pins.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20">
                {/* Search Icon */}
                <div className="mb-5">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                
                {/* Empty State Text */}
                <div className="text-center">
                  <p className="text-gray-500 text-lg font-medium mb-1">No Result Found</p>
                  <p className="text-gray-500 text-sm">Your map pin list will show in here.</p>
                </div>
              </div>
            ) : (
              <div className="p-0 overflow-y-auto flex-1">
                <PinList 
                  pins={pins} 
                  onRemovePin={(id: string) => {
                    const removePin = usePinStore.getState().removePin
                    removePin(id)
                  }} 
                />
              </div>
            )}
          </div>
        </motion.div>
    </div>
  )
}

export default Page
