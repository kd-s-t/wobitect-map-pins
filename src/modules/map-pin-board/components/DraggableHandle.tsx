import { useState, useRef, useEffect } from 'react'

interface DraggableHandleProps {
  onDrag: (deltaY: number) => void
  onDragEnd: () => void
}

const DraggableHandle = ({ onDrag, onDragEnd }: DraggableHandleProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const handleRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartY(e.touches[0].clientY)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartY(e.clientY)
  }

  const handleMove = (clientY: number) => {
    if (!isDragging) return
    
    const deltaY = clientY - startY
    onDrag(deltaY)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientY)
    e.preventDefault()
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientY)
  }

  const handleEnd = () => {
    if (isDragging) {
      setIsDragging(false)
      onDragEnd()
    }
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('touchend', handleEnd)
      document.addEventListener('mouseup', handleEnd)
      
      return () => {
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('touchend', handleEnd)
        document.removeEventListener('mouseup', handleEnd)
      }
    }
  }, [isDragging, startY])

  return (
    <div
      ref={handleRef}
      className={`w-full h-6 flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${
        isDragging ? 'bg-gray-100' : 'hover:bg-gray-50'
      } transition-colors`}
      onTouchStart={handleTouchStart}
      onMouseDown={handleMouseDown}
    >
      <div className="flex flex-col items-center space-y-1">
        <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  )
}

export default DraggableHandle
