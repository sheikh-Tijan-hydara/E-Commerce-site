import type { NextApiRequest, NextApiResponse } from "next";
import app from "@/firebase/clientApp";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
    const productsCollection = collection(db, "Products");
    const productsSnapshot = await getDocs(productsCollection);
    const products = productsSnapshot.docs.map((doc) => doc.data());
    res.status(200).json(products);
    }
