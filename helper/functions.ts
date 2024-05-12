import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Items } from '@/helper/interfaces';
import axios from 'axios';

export const addToCart = async (item: any) => {

  try {
    const res = await axios.post('/api/cart/postCartItem', { ...item, uid: 'zrFdSPoOZfNvkUR572q7WiR5oS52', quantity: 1 });
    toast.success(res.data.message)

  } catch (error: any) {
    toast.error(error.response.data.message)
  }

}