import { useCallback } from 'react'
import { Pin } from './types'
import { getAddress } from '../../libs/openstreetmap'

export const usePinActions = () => {
  const handleAddPin = useCallback(async (pin: Omit<Pin, 'id'>) => {
    const address = await getAddress(pin.lat, pin.lng)
    console.log('Address found:', address)
  }, [])

  return {
    handleAddPin
  }
}
