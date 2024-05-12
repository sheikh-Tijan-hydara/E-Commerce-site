import React, { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '@/firebase/clientApp';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
export default function LogIn(){

const router = useRouter();
const [loading, setLoading] = useState(false);

const formDataIsValid = (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    if (email.trim() === '' || password.trim() === '') {
        toast.error('All fields are required');
        return false;
    }
    if(!email.includes('@') && !email.includes('.')){
        toast.error('Invalid email');
        return false;
    }
    return true;
}

const handleSubmit = async (e: any) => {
    e.preventDefault();
    if(!formDataIsValid(new FormData(e.target))){
        return;
    }
    const formData = new FormData(e.target);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    try {
        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('User logged in successfully');
        router.push('/');
    }
    catch (error) {
        toast.error('Failed to log in');
    }
    finally{
        setLoading(false);
    }
}
    return (
        <div className='flex flex-row w-full h-screen '>
            <ToastContainer />
            <div className='w-full h-full flex flex-col  bg-tertiary'>
            <Link href={'/'}>
            <button className='bg-primary text-white px-16 mb-2 ml-4 mt-4  py-2 rounded'>Back</button>
            </Link>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='flex flex-col items-center justify-center rounded-lg w-1/4 h-2/3 bg-white px-8 py-4 shadow-lg '>
                    <h1 className='font-bold text-3xl mb-8 text-primary underline'>LogIn</h1>
                    <form className='w-full flex flex-col text-black ' onSubmit={handleSubmit}>
                        <div className='flex flex-col w-full mb-3'>
                            <label className='text-slate-600' htmlFor="email">Email</label>
                            <input className='bg-gray-200 py-1 px-2 rounded' type="email" name="email" id="email" />
                        </div>
                        <div className='flex flex-col mb-3'>
                            <label className='text-slate-600' htmlFor="password">Password</label>
                            <input className='bg-gray-200 py-1 px-2 rounded' type="password" name="password" id="password" />
                        </div>
                        <Link href={'/forgotPassword'}>
                        <p className='text-sm underline text-slate-600'>Forgot password</p>
                        </Link>
                        <button disabled={loading} className={`flex justify-center  hover:bg-secondary text-white w-full py-2 rounded-3xl mt-8 ${loading ? 'bg-gray-500' : 'bg-primary'} `}>
                        {loading && <FontAwesomeIcon icon={faSpinner} className="animate-spin h-5 w-5 mr-3 text-white" />}
                            LogIn
                        </button>
                    </form>
                    <Link href={'/signUp'}>
                        <p className='mt-4 text-slate-600'>Don&apos;t have an account? <span className='font-bold text-slate-600'>SingUp</span> </p>
                    </Link>
                </div>
            </div>
            </div>
           
        </div>
    )
}