import type { NextApiRequest, NextApiResponse } from "next";
import app from "@/firebase/clientApp";
import { getFirestore, collection, getDocs, deleteDoc } from "firebase/firestore";

const db = getFirestore(app);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = req.query.id;
    const user_id: string = "some_user_id"; // Replace "some_user_id" with the actual user ID
    const cartCollection = collection(db, "cart");
    const cartSnapshot = await getDocs(cartCollection);
    const cart = cartSnapshot.docs.map((doc) => doc.data());
    const userCart = cart.find((item) => item.user_id === user_id);
    const cartItem = userCart?.find((item: any) => item.id === id);
    
    if (req.method !== "DELETE") {
        res.status(400).json({ message: "Invalid request method" });
    }
    try {
        await deleteDoc(cartItem?.id);
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Failed to delete item", error });
    }

}