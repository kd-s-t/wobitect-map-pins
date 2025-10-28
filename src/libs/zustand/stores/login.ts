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
    // Simple mock authentication
    if (email === 'john.doe@example.com' && password === 'password123') {
      set({ 
        isAuthenticated: true, 
        user: { email } 
      })
      return true
    }
    return false
  }
})
