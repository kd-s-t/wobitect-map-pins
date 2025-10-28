import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  className = '',
  style = {}
}: ButtonProps) => {
  const baseClasses = 'font-medium rounded-md focus:outline-none focus:ring-2 transition-colors'
  
  const variantClasses = {
    primary: 'text-white hover:opacity-90 focus:ring-blue-500 relative overflow-hidden',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      style={{
        ...(variant === 'primary' ? {
          backgroundColor: '#2C71F6',
          height: '38px',
          borderRadius: '6px'
        } : {}),
        ...style
      }}
    >
      {variant === 'primary' && !disabled && (
        <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></div>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  )
}

export default Button
