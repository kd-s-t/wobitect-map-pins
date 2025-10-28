export interface Pin {
  id: string
  lat: number
  lng: number
  address?: string
  pinNumber: number
}

export interface PinStore {
  pins: Pin[]
  isLoading: boolean
  loadPins: () => void
  addPin: (pin: Omit<Pin, 'id' | 'pinNumber'>) => void
  removePin: (id: string) => void
  updatePinAddress: (id: string, address: string) => void
  updatePinPosition: (id: string, lat: number, lng: number) => void
}

// Login related types
export interface LoginFormData {
  email: string
  password: string
}

export interface LoginState {
  isAuthenticated: boolean
  user: { email: string } | null
  login: (email: string, password: string) => Promise<boolean>
}

export interface FormProps {
  formData: LoginFormData
  fieldErrors?: {email?: string, password?: string}
  onInputChange: (field: keyof LoginFormData) => (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
}

export interface HeaderProps {
  title: string
  subtitle: string
}

export interface PageProps {
  onLogin: () => void
}
