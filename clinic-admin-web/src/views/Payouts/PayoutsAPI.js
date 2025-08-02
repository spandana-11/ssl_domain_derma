import axios from 'axios'
import { Customer_Url, Booking_sevice, getAllPayouts, addPayouts } from '../../baseUrl'

export const Get_AllPayoutsData = async () => {
  try {
    const response = await axios.get(`${Booking_sevice}/${getAllPayouts}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    return response.data // only return the data part
  } catch (error) {
    throw error
  }
}

export const postPayoutsData = async (serviceData) => {
  try {
    const response = await axios.post(`${Booking_sevice}/${addPayouts}`, serviceData, {
      headers: { 'Content-Type': 'application/json' },
    })
    return response
  } catch (error) {
    console.error('Error creating payout:', error)
    throw error
  }
}
