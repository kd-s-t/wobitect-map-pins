import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createPinStore, createLoginStore } from './stores'
import { PinStore, LoginState } from './types'

export const usePinStore = create<PinStore>()(
  devtools(
    createPinStore,
    {
      name: 'pin-store'
    }
  )
)

export const useLoginStore = create<LoginState>()(
  devtools(
    createLoginStore,
    {
      name: 'login-store'
    }
  )
)
