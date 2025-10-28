import { Pin, PinStore } from '@/libs/zustand/types'
import { Icon } from 'leaflet'

export type { Pin, PinStore }

export interface ListProps {
  pins: Pin[]
  onRemovePin: (id: string) => void
  onPinHover: (pinId: string | null) => void
  onPinClick?: (pin: Pin) => void
  activePinId?: string | null
}

export interface ClickHandlerProps {
  onAddPin: (pin: Omit<Pin, 'id'>) => void
}

export interface MapRef {
  focusOnPin: (lat: number, lng: number) => void
}

export interface DraggableMarkerProps {
  pin: Pin
  icon: Icon
  index: number
  isHovered: boolean
  isClicked: boolean
  onPositionChange: (id: string, lat: number, lng: number) => void
  onPinClick: (pinId: string | null) => void
}

export interface LayoutProps {
  pins: Pin[]
  isLoading: boolean
  hoveredPinId: string | null
  clickedPinId: string | null
  onPositionChange: (id: string, lat: number, lng: number) => void
  onAddPin: (pin: Omit<Pin, 'id'>) => void
  onRemovePin: (id: string) => void
  onPinHover: (id: string | null) => void
  onPinClick: (id: string | null) => void
  icon: Icon
}

export type DesktopLayoutProps = LayoutProps
export type mLayoutProps = LayoutProps

export interface MapSectionProps {
  pins: Pin[]
  hoveredPinId: string | null
  clickedPinId: string | null
  onPositionChange: (id: string, lat: number, lng: number) => void
  onAddPin: (pin: Omit<Pin, 'id'>) => void
  onPinClick: (pinId: string | null) => void
  icon: Icon
  showZoomControl?: boolean
}

export type mMapSectionProps = MapSectionProps
export type dMapSectionProps = MapSectionProps

export interface DraggableHandleProps {
  onDrag: (deltaY: number) => void
  onDragEnd: () => void
}

export interface PinItemProps {
  pin: Pin
  onRemovePin: (id: string) => void
  onHover: (pinId: string | null) => void
  onClick?: (pin: Pin) => void
  isActive?: boolean
}

export interface PinListSectionProps {
  pins: Pin[]
  isLoading: boolean
  onRemovePin: (id: string) => void
  onPinHover: (id: string | null) => void
  onPinClick?: (pin: Pin) => void
  activePinId?: string | null
  isMobile?: boolean
}

export type DesktopPinListSectionProps = PinListSectionProps
export type mPinListSectionProps = PinListSectionProps