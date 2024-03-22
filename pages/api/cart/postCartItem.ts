import { NextApiRequest, NextApiResponse } from 'next';
import { getFirestore, collection, addDoc, getDocs, query, where,  updateDoc, arrayUnion} from 'firebase/firestore';
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

         if(cartSnapshot.empty){
            await addDoc(cartCollection, {
                user_id: user_id,
                products: [{ title, image, price, id, size, delivery_date, quantity }]
            });
         }else{
            cartSnapshot.forEach(async (doc) => {
                const cartId = doc.ref;
                await updateDoc(cartId, {
                    products: arrayUnion({title, image, price, id, size, delivery_date, quantity})
                });
            })
         }

        res.status(200).json({ message: 'Item added to cart successfully' , title, image, price, id, size, delivery_date, quantity, user_id});
    } catch (error) {
        res.status(400).json({ message: 'Failed to add item to cart', error });
    }
}
