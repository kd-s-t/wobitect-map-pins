import { useCallback } from 'react'
import { usePinStore } from '@/libs/zustand'
import { Pin } from './types'

export const usePinActions = () => {
  const addPin = usePinStore((state) => state.addPin)
  const removePin = usePinStore((state) => state.removePin)
  const updatePinAddress = usePinStore((state) => state.updatePinAddress)
  const updatePinPosition = usePinStore((state) => state.updatePinPosition)

  const handleAddPin = useCallback((pin: Omit<Pin, 'id'>) => {
    addPin(pin)
  }, [addPin])

  const handleRemovePin = useCallback((id: string) => {
    removePin(id)
  }, [removePin])

  const handleUpdatePinAddress = useCallback((id: string, address: string) => {
    updatePinAddress(id, address)
  }, [updatePinAddress])

  const handleUpdatePinPosition = useCallback((id: string, lat: number, lng: number) => {
    updatePinPosition(id, lat, lng)
  }, [updatePinPosition])

  return {
    handleAddPin,
    handleRemovePin,
    handleUpdatePinAddress,
    handleUpdatePinPosition
  }
}
