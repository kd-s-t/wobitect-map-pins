import { HeaderProps } from '../types'
import { MapIcon } from '../../../shared/components'

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-6 sm:mb-8">
        <MapIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
        <span className="text-base sm:text-lg font-medium text-text-primary">Map Pinboard</span>
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl sm:text-2xl font-bold text-text-primary">{title}</h1>
        <p className="text-xs sm:text-sm text-text-secondary">{subtitle}</p>
      </div>
    </div>
  )
}

export default Header
