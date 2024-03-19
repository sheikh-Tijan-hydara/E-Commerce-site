
import type { NextApiRequest, NextApiResponse } from "next";
import app from "@/firebase/clientApp";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
        const id = req.query.id;
    const productsCollection = collection(db, "Products");
    const productsSnapshot = await getDocs(productsCollection);
    // get that specific product whose id matches the id in the query
    const product = productsSnapshot.docs.map((doc) => doc.data()).filter((product) => product.id === id);
    res.status(200).json(product);
    }
