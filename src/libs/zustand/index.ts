import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createPinStore } from './stores'
import { PinStore } from './types'

export const usePinStore = create<PinStore>()(
  devtools(
    createPinStore,
    {
      name: 'pin-store'
    }
  )
)
