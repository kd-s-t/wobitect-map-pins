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
    primary: `text-white focus:ring-blue-500 relative overflow-hidden ${disabled ? '' : 'hover:opacity-90'}`,
    secondary: `bg-gray-200 text-gray-900 focus:ring-gray-500 ${disabled ? '' : 'hover:bg-gray-300'}`,
    danger: `bg-red-600 text-white focus:ring-red-500 ${disabled ? '' : 'hover:bg-red-700'}`
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
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${variant === 'primary' ? 'bg-primary-500 h-38 rounded-6' : ''} ${className}`}
      style={style}
    >
      {variant === 'primary' && !disabled && (
        <div className="absolute inset-0 -top-1 -left-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shine"></div>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  )
}

export default Button
