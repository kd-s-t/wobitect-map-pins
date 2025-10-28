import { useMapEvents } from 'react-leaflet'
import { ClickHandlerProps } from '../types'
import { getAddress } from '../../../libs/openstreetmap'

const ClickHandler = ({ onAddPin }: ClickHandlerProps) => {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng

      onAddPin({ lat, lng })

      const address = await getAddress(lat, lng)
      console.log('Address found:', address)
    }
  })

  return null
}

export default ClickHandler
