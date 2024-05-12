
import type { NextApiRequest, NextApiResponse } from "next";
import {db} from "@/firebase/clientApp";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
        const id = req.query.id;
    const productsCollection = collection(db, "Products");
    const productsSnapshot = await getDocs(productsCollection);
    const product = productsSnapshot.docs
      .map((doc) => doc.data())
      .find((product) => product.id === id);

    res.status(200).json(product);
    }
