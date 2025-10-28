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
    <div className={`flex flex-col ${className}`} style={{ gap: '4px' }}>
      <label className="flex items-center text-sm font-medium" style={{ color: '#202020' }}>
        {label} {required && <span style={{ color: '#F73B3B', marginLeft: '4px' }}>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        style={{
          height: '38px',
          borderColor: error ? '#F73B3B' : '#D1D5DB',
          color: '#898989'
        }}
      />
      {error && (
        <p className="text-sm" style={{ color: '#F73B3B' }}>{error}</p>
      )}
    </div>
  )
}

export default Input
