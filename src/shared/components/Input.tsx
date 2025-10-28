import React from 'react'

interface InputProps {
  label: string
  type?: 'text' | 'email' | 'password' | 'number'
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  error?: string
  className?: string
  disabled?: boolean
}

const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  className = '',
  disabled = false
}: InputProps) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="flex items-center text-sm font-medium text-text-primary">
        {label} {required && <span className="text-error-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-38 text-text-secondary ${
          error ? 'border-error-500' : 'border-gray-300'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      />
      {error && (
        <p className="text-sm text-error-500">{error}</p>
      )}
    </div>
  )
}

export default Input
