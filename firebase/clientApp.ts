import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
const clientCredentials = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
}

const app = initializeApp(clientCredentials);
export const auth = getAuth(app);

export default app;
