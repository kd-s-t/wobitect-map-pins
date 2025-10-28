import { motion } from 'framer-motion'
import { List as PinList } from './index'
import { SearchIcon, LoaderSpinner } from '@/shared/components'
import { mPinListSectionProps } from '../types'

const MPinListSection = ({ pins, isLoading, onRemovePin, onPinHover, onPinClick, activePinId, isMobile = false }: mPinListSectionProps) => {
  const headerHeight = isMobile ? 'h-[50px]' : 'h-[60px]'
  const headerPadding = isMobile ? 'px-4' : 'px-5'
  const titleSize = isMobile ? 'text-base' : 'text-lg'
  const iconSize = isMobile ? 'w-5 h-5' : 'w-6 h-6'
  const emptyIconMargin = isMobile ? 'mb-4' : 'mb-5'
  const emptyTextSize = isMobile ? 'text-base' : 'text-lg'
  const emptySubtextSize = isMobile ? 'text-xs' : 'text-sm'
  const emptyPadding = isMobile ? 'px-4' : ''

  return (
    <>
      <motion.div 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className={`${headerHeight} border-b border-gray-200 flex items-center ${headerPadding}`}
      >
        <h2 className={`${titleSize} font-semibold text-gray-800`}>Pin Lists</h2>
      </motion.div>
      
      <div className="flex-1 flex flex-col min-h-0">
        {isLoading ? (
          <div className={`flex flex-col items-center justify-center flex-1 ${emptyPadding}`}>
            <div className={emptyIconMargin}>
              <LoaderSpinner size={'md'} className="text-blue-500" />
            </div>
            
            <div className="text-center">
              <p className={`text-gray-500 ${emptyTextSize} font-medium mb-1`}>Just a moment...</p>
            </div>
          </div>
        ) : pins.length === 0 ? (
          <div className={`flex flex-col items-center justify-center flex-1 ${emptyPadding}`}>
            <div className={emptyIconMargin}>
              <SearchIcon className={`${iconSize} text-gray-500`} />
            </div>
            
            <div className="text-center">
              <p className={`text-gray-500 ${emptyTextSize} font-medium mb-1`}>No Result Found</p>
              <p className={`text-gray-500 ${emptySubtextSize}`}>Your map pin list will show in here.</p>
            </div>
          </div>
        ) : (
          <div className="overflow-y-auto overflow-x-hidden flex-1 custom-scrollbar min-h-0 rounded-lg">
            <PinList 
              pins={pins} 
              onRemovePin={onRemovePin}
              onPinHover={onPinHover}
              onPinClick={onPinClick}
              activePinId={activePinId}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default MPinListSection