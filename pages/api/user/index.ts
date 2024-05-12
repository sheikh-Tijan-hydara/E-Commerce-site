import app from "@/firebase/clientApp";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const db = getFirestore(app);

export const createNewUser = async (user: any) => {
    // add a new user into the users collection and use the logged in user's uid as the document id
    await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        name: user.displayName,
        uid: user.uid,
    });
}