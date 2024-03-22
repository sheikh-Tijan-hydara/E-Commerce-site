import { NextApiRequest, NextApiResponse } from 'next';
import { getFirestore, collection, updateDoc, getDocs, doc} from 'firebase/firestore';
import app from '@/firebase/clientApp';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = getFirestore(app);
    const { quantity, user_id } = req.body;
    const cartCollection = collection(db, 'cart');
   
    if (req.method !== 'PUT') {
        res.status(400).json({ message: 'Invalid request method' });
    }
    try {
        const cartSnapshot = await getDocs(cartCollection);
        const cart = cartSnapshot.docs.map((doc) => doc.data());
        const userCart = cart.find((item) => item.user_id === user_id);
        
        await updateDoc(doc(cartCollection, userCart?.user_id), {
            quantity: quantity
        });
        res.status(200).json({ message: 'Successfully updated' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to update the item', error });
    }

}