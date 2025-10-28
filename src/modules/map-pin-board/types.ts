import { Pin, PinStore } from '@/libs/zustand/types'

// Re-export types for convenience
export type { Pin, PinStore }

export interface ListProps {
  pins: Pin[]
  onRemovePin: (id: string) => void
  onPinHover: (pinId: string | null) => void
  onPinClick?: (pin: Pin) => void
  activePinId?: string | null
}

export interface ClickHandlerProps {
  onAddPin: (pin: Omit<Pin, 'id'>) => void
}
