export const getAddress = async (lat: number, lng: number): Promise<string> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
    )
    const data = await response.json()
    return data.display_name || 'Address not found'
  } catch (error) {
    console.error('Error fetching address:', error)
    return 'Address not found'
  }
}
