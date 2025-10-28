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

export interface ListProps {
  pins: Pin[]
  onRemovePin: (id: string) => void
}

export interface ClickHandlerProps {
  onAddPin: (pin: Omit<Pin, 'id'>) => void
}
