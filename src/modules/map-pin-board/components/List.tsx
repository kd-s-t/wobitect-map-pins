import { motion, AnimatePresence } from 'framer-motion'
import { ListProps } from '../types'
import PinItem from './PinItem'
import EmptyState from './EmptyState'

const List = ({ pins, onRemovePin, onPinHover, onPinClick, activePinId }: ListProps) => {
  if (pins.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="space-y-0">
      <AnimatePresence>
        {pins.map((pin, index) => (
          <motion.div
            key={pin.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.05,
              ease: "easeOut"
            }}
            className="last:border-b-0"
          >
            <PinItem
              pin={pin}
              onRemovePin={onRemovePin}
              onHover={onPinHover}
              onClick={onPinClick}
              isActive={activePinId === pin.id}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default List