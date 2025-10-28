import { StateCreator } from 'zustand'

export interface LoginFormData {
  email: string
  password: string
}

export interface LoginState {
  isAuthenticated: boolean
  user: { email: string } | null
  login: (email: string, password: string) => Promise<boolean>
}

export const createLoginStore: StateCreator<LoginState> = (set) => ({
  isAuthenticated: false,
  user: null,
  login: async (email: string, password: string) => {
    if (email === 'kendantinio@gmail.com' && password === 'Wobitect2024!@#') {
      set({ 
        isAuthenticated: true, 
        user: { email } 
      })
      return true
    }
    return false
  }
})
