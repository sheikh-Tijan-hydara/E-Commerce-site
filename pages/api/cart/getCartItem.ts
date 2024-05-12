import { NextApiRequest, NextApiResponse } from 'next';
import { getFirestore, collection, getDocs, where, query } from 'firebase/firestore';
import app from '@/firebase/clientApp';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const db = getFirestore(app);
    const loggesInUser = req.query.user_id;
    if(req.method !== 'GET') {
        res.status(400).json({ message: 'Invalid request method' });
        return;
    }
    try {
        const cartCollection = collection(db, 'cart');
        const cartQuery = query(cartCollection);
        const cartSnapshot = await getDocs(cartQuery);
        let userCart: any[] = []; 
        
        // if(!cartSnapshot.empty) {
        //     cartSnapshot.forEach((doc) => {
        //         const products = doc.data().products;
        //         if(products) {
        //             userCart = products;
        //         }
        //     });
        // }
        res.status(200).json({ userCart, message: 'Cart fetched successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Failed to fetch cart', error });
    }

}