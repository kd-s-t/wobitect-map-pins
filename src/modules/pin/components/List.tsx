import { useState, useEffect } from 'react'
import { ListProps } from '../types'
import PinItem from './PinItem'
import LoadingState from './LoadingState'
import EmptyState from './EmptyState'

const List = ({ pins, onRemovePin }: ListProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate fetching pins for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingState />
  }

  if (pins.length === 0) {
    return <EmptyState />
  }

  return (
    <div>
      {pins.map((pin, index) => (
        <PinItem
          key={pin.id}
          pin={pin}
          index={index}
          onRemovePin={onRemovePin}
        />
      ))}
    </div>
  )
}

export default List