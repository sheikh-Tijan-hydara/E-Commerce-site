import { NextApiRequest, NextApiResponse } from 'next';
import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc, arrayUnion, setDoc, doc } from 'firebase/firestore';
import app from '@/firebase/clientApp';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = getFirestore(app);
    const { title, image, price, id, size, delivery_date, quantity, user_id } = req.body;
    const cartCollection = collection(db, 'Cart');

    if (req.method !== 'POST') {
        res.status(400).json({ message: 'Invalid request method' });
    }

    try {
        const cartQuery = query(cartCollection, where('user_id', '==', user_id));
        const cartSnapshot = await getDocs(cartQuery);

        if (cartSnapshot.empty) {
            await setDoc(doc(cartCollection, user_id), {
                user_id: user_id,
                products: [{ title, image, price, id, size, delivery_date, quantity }],
            });
        }
        else {
            const cartDoc = cartSnapshot.docs[0]; // Assuming there's only one cart per user
            await updateDoc(cartDoc.ref, {
                products: arrayUnion({ title, image, price, id, size, delivery_date, quantity }),
            });
        }
        res.status(200).json({
            message: 'Item added to cart successfully',
            user_id,
            title,
            image,
            price,
            id,
            size,
            delivery_date,
            quantity,
        });

    } catch (error) {
        res.status(400).json({ message: 'Failed to add item to cart', error });
    }
}
