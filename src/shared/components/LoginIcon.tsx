interface LoginIconProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const LoginIcon = ({ size = 'md', className = '' }: LoginIconProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main animated circle */}
      <div className={`${sizeClasses[size]} animate-login-pulse`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="12" 
            cy="12" 
            r="8" 
            stroke="currentColor" 
            strokeWidth="2" 
            fill="none"
          />
        </svg>
      </div>
      
      {/* Rotating ring around the circle */}
      <div className={`absolute inset-0 ${sizeClasses[size]} animate-login-rotate`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.4"
            strokeDasharray="3 3"
          />
        </svg>
      </div>
      
      {/* Bouncing dots */}
      <div className="absolute -right-1 -top-1 flex space-x-0.5">
        <div className="w-1 h-1 bg-current rounded-full animate-login-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-1 h-1 bg-current rounded-full animate-login-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-1 h-1 bg-current rounded-full animate-login-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  )
}

export default LoginIcon
