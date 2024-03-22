import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Items } from '@/helper/interfaces';
import axios from 'axios';

export const addToCart = async (item: any) => {

  try {
    const res = await axios.post('/api/cart/postCartItem', { ...item, user_id: 'xyz123', quantity: 1 });
    console.log(res.data)
    toast.success(res.data.message)

  } catch (error: any) {
    toast.error(error.response.data.message)
  }

}