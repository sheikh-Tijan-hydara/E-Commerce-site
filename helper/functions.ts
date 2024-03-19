import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Items} from '@/helper/interfaces';

export const addToCart = async (item: any) =>{
    // fetch current cart items
    const cartRes = await fetch('http://localhost:3000/cart');
    const cartItems = await cartRes.json();

    // check if item already exists in the cart
    const exists = cartItems.some((cartItem: { id: number }) => cartItem.id === item.id);

    if (exists) {
      toast.warning('Item already exists in cart');
      return;
    }
    alert('Item added to cart')

    // post an item to the cart
    // try {
    //   const res = await fetch('http://localhost:3000/cart', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     title: item.title,
    //     image: item.image,
    //     price: item.price,
    //     id: item.id,
    //     size: item.size,
    //     delivery_date: item.delivery_date
    //   })
    // });
    // toast.success('Successfully added to cart!')
    
    // } catch (error) {
    //   toast.error('Failed to add to cart')
    // }
    
  }