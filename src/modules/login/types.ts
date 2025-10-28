export interface FormData {
  email: string
  password: string
}

export interface PageProps {
  onLogin: () => void
}

export interface FormProps {
  formData: FormData
  fieldErrors?: {email?: string, password?: string}
  onInputChange: (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent) => void
  isLoading?: boolean
}

export interface HeaderProps {
  title: string
  subtitle: string
}
