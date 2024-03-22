import { NextApiRequest, NextApiResponse } from 'next';
import { getFirestore, collection, addDoc} from 'firebase/firestore';
import app from '@/firebase/clientApp';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = getFirestore(app);
    const { title, image, price, id, size, delivery_date, quantity, user_id } = req.body;
    const cartCollection = collection(db, 'cart');
   
    if (req.method !== 'POST') {
        res.status(400).json({ message: 'Invalid request method' });
    }

    // todo remember you are the item to the product to the cart of a specific user
    try {
        await addDoc(cartCollection, {
            title,
            image,
            price,
            id,
            size,
            delivery_date,
            quantity,
            user_id
        });

        res.status(200).json({ message: 'Item added to cart successfully' , title, image, price, id, size, delivery_date, quantity, user_id});
    } catch (error) {
        res.status(400).json({ message: 'Failed to add item to cart', error });
    }
}
