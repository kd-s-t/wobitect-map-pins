import { StateCreator } from 'zustand'
import { PinStore } from '../types'
import { dummyPins } from '../data'

export const createPinStore: StateCreator<PinStore> = (set) => ({
  pins: dummyPins,
  addPin: (pin) => set((state: PinStore) => ({
    pins: [...state.pins, { ...pin, id: `pin_${Date.now()}_${Math.random().toString(36).substr(2, 9)}` }]
  })),
  removePin: (id) => set((state: PinStore) => ({
    pins: state.pins.filter(pin => pin.id !== id)
  })),
  updatePinAddress: (id, address) => set((state: PinStore) => ({
    pins: state.pins.map(pin =>
      pin.id === id ? { ...pin, address } : pin
    )
  }))
})
