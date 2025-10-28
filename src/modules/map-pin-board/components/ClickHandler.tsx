import { useMapEvents } from 'react-leaflet'
import { ClickHandlerProps } from '../types'

const ClickHandler = ({ onAddPin }: ClickHandlerProps) => {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng

      onAddPin({ lat, lng })
    }
  })

  return null
}

export default ClickHandler
