export interface Pin {
  id: string
  lat: number
  lng: number
  address?: string
}

export interface PinStore {
  pins: Pin[]
  addPin: (pin: Omit<Pin, 'id'>) => void
  removePin: (id: string) => void
  updatePinAddress: (id: string, address: string) => void
}
