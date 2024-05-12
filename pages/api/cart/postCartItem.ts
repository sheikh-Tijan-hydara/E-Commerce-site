import { NextApiRequest, NextApiResponse } from "next";
import {
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "@/firebase/clientApp";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      res.status(400).json({ message: "Invalid request method" });
    }
  const { title, image, price, id, size, delivery_date, quantity, user_id } =
    req.body;
    const uid = req.body.uid;
    console.log("User id", uid);
  const cartCollection = collection(db, "Users", uid, "Cart");


  await addDoc(cartCollection, {
    products: [
      {
        title,
        price,
        id,
        size,
        delivery_date,
        quantity,
      },
    ],
  
  })
  res.status(200).json({
    message: "Item added to cart successfully",
  });
  }
  catch(error) {
    res.status(400).json({ message: "Failed to add item to cart", error });
  }
}
