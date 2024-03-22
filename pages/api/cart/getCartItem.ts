import { NextApiRequest, NextApiResponse } from 'next';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import app from '@/firebase/clientApp';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = getFirestore(app);
    const loggesInUser = req.query.id;
    if(req.method !== 'GET') {
        res.status(400).json({ message: 'Invalid request method' });
        return;
    }
    try {
        const cartCollection = collection(db, 'cart');

        const cartSnapshot = await getDocs(cartCollection);

        const cart = cartSnapshot.docs.map((doc) => doc.data());
        const userCart = cart.find((item) => item.user_id === loggesInUser);
        res.status(200).json({ userCart, message: 'Cart fetched successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to fetch cart', error });
    }

}