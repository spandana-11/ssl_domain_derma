import axios from 'axios'
import {
  BASE_URL,
  AddCategoryAdvertisement,
  getAllCategoryAdvertisement,
  deleteCategoryAdvertisement,
} from '../../baseUrl'

export const Get_AllAdvData = async () => {
  console.log('service data:, response.data')

  try {
    const response = await axios.get(`${BASE_URL}/${getAllCategoryAdvertisement}`)
    console.log('service data:', response.data)

    return response.data
  } catch (error) {
    console.error('Error fetching service data:', error.message)

    if (error.response) {
      console.error('Error Response Data:', error.response.data)
      console.error('Error Response Status:', error.response.status)
    }
    throw error
  }
}

export const Add_AdvData = async (advData) => {
  try {
    const requestData = {
      carouselId: advData.carouselId || '',
      mediaUrlOrImage: advData.mediaUrlOrImage || '',
    }

    const response = await axios.post(`${BASE_URL}/${AddCategoryAdvertisement}`, requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return response.data
  } catch (error) {
    console.error('Error response:', error.response)
    alert(
      `Error: ${error.response?.status} - ${error.response?.data?.message || error.response?.statusText}`,
    )
    throw error
  }
}

export const delete_AdvData = async (carouselId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${deleteCategoryAdvertisement}/${carouselId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log('advertisement deleted successfully:', response.data)
    return response.data
  } catch (error) {
    console.error('Error deleting advertisement:', error.response ? error.response.data : error)
    throw error
  }
}
