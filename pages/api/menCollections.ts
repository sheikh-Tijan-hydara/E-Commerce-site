import type { NextApiRequest, NextApiResponse } from "next";
import app from "../../firebase/clientApp";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { Items } from "@/helper/interfaces";


const db = getFirestore(app);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        if (req.method === 'GET') {
            const menCollection: Items[] = [];
            const menCollectionRef = collection(db, "Products");
            const menCollectionSnapshot = await getDocs(menCollectionRef);
            menCollectionSnapshot.forEach((doc) => {
                menCollection.push(doc.data() as Items);
            });
            res.status(200).json({menCollection, message: 'successfully get data'});
        }
    } catch (error) {
        // Handle the error here
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
 
}