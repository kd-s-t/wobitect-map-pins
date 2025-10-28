import { useState, useCallback } from 'react'
import { FormData } from './types'

export const useLoginForm = (initialData?: Partial<FormData>) => {
  const [formData, setFormData] = useState<FormData>({
    email: initialData?.email || 'john.doe@example.com',
    password: initialData?.password || 'password123'
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<{email?: string, password?: string}>({})

  const validateEmail = (email: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) return 'Email is required'
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    return null
  }

  const validatePassword = (password: string): string | null => {
    if (!password.trim()) return 'Password is required'
    if (password.length < 6) return 'Password must be at least 6 characters'
    return null
  }

  const handleInputChange = useCallback((field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, [field]: value }))
    
    if (error) setError(null)
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }, [error, fieldErrors])

  const handleSubmit = useCallback(async (
    e: React.FormEvent,
    onSubmit: (data: FormData) => void
  ) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setFieldErrors({})

    const emailError = validateEmail(formData.email)
    const passwordError = validatePassword(formData.password)
    
    if (emailError || passwordError) {
      setFieldErrors({
        email: emailError || undefined,
        password: passwordError || undefined
      })
      setIsLoading(false)
      return
    }

    try {
      await onSubmit(formData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }, [formData])

  const resetForm = useCallback(() => {
    setFormData({
      email: initialData?.email || 'john.doe@example.com',
      password: initialData?.password || 'password123'
    })
    setError(null)
  }, [initialData])

  return {
    formData,
    isLoading,
    error,
    fieldErrors,
    handleInputChange,
    handleSubmit,
    resetForm
  }
}
