import { StateCreator } from 'zustand'
import { PinStore } from '../types'

const loadPinsFromStorage = () => {
  try {
    const savedPins = localStorage.getItem('map-pinboard-pins')
    if (savedPins) {
      const pins = JSON.parse(savedPins)
      // Migrate existing pins to have pinNumber
      return pins.map((pin: any, index: number) => ({
        ...pin,
        pinNumber: pin.pinNumber || index + 1
      }))
    }
  } catch (error) {
    console.error('Error loading pins from localStorage:', error)
  }
  return []
}

const savePinsToStorage = (pins: any[]) => {
  try {
    localStorage.setItem('map-pinboard-pins', JSON.stringify(pins))
  } catch (error) {
    console.error('Error saving pins to localStorage:', error)
  }
}

export const createPinStore: StateCreator<PinStore> = (set) => ({
  pins: [],
  isLoading: true,
  
  // Load pins with 2-second delay
  loadPins: () => {
    setTimeout(() => {
      const loadedPins = loadPinsFromStorage()
      set({ pins: loadedPins, isLoading: false })
    }, 2000)
  },
  
  addPin: (pin) => set((state: PinStore) => {
    // Get the next pin number
    const nextPinNumber = state.pins.length > 0 
      ? Math.max(...state.pins.map(p => p.pinNumber)) + 1 
      : 1
    
    const newPins = [...state.pins, { 
      ...pin, 
      id: `pin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      pinNumber: nextPinNumber
    }]
    savePinsToStorage(newPins)
    return { pins: newPins }
  }),
  removePin: (id) => set((state: PinStore) => {
    const newPins = state.pins.filter(pin => pin.id !== id)
    savePinsToStorage(newPins)
    return { pins: newPins }
  }),
  updatePinAddress: (id, address) => set((state: PinStore) => {
    const newPins = state.pins.map(pin =>
      pin.id === id ? { ...pin, address } : pin
    )
    savePinsToStorage(newPins)
    return { pins: newPins }
  }),
  updatePinPosition: (id, lat, lng) => set((state: PinStore) => {
    const newPins = state.pins.map(pin =>
      pin.id === id ? { ...pin, lat, lng } : pin
    )
    savePinsToStorage(newPins)
    return { pins: newPins }
  })
})
