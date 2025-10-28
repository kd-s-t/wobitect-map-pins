import { HeaderProps } from '../types'

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-8">
        <img src="/MapPin.svg" alt="Map Pinboard" className="w-29 h-5 mr-2" />
        <span className="text-lg font-medium text-gray-700">Map Pinboard</span>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  )
}

export default Header
