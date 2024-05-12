import React, { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase/clientApp';
import { createNewUser } from './api/user';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function SignUp(){
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    // a validation function for the formData
    const formIsValid = (formData: FormData) => {
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;
        const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            toast.error('All fields are required');
            return false;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return false;
        }
        if(!email.includes('@') && !email.includes('.')){
            toast.error('Invalid email');
            return false;
        }
        if(passwordRegex.test(password) === false){
            toast.error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number');
            return false;
        }

        return true;
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if(!formIsValid(new FormData(e.target))){
            return;
        }
        const formData = new FormData(e.target);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        try {
            setLoading(true);
            await createUserWithEmailAndPassword(auth, email, password);
            await createNewUser(auth.currentUser);
            toast.success('User created successfully');
            router.push('/');
        }
        catch (error) {
            const errorMessage = (error as Error).message;
            toast.error(errorMessage);
        }
        finally {
            setLoading(false);
        }
    }
            

    return (
        <div className=' w-full h-screen   items-center justify-center text-black'>
            <ToastContainer />
            <div className='w-full h-full flex flex-col  bg-tertiary'>
            <Link href={'/'}>
            <button className='bg-primary text-white px-16 mb-2 ml-4 mt-4  py-2 rounded'>Back</button>
            </Link>
            <div className='w-full h-full flex items-center justify-center px-4'>
                <div className='flex flex-col items-center justify-center rounded-lg w-full lg:w-1/4 h-2/3 bg-white px-8 py-4 shadow-lg '>
                    <h1 className='font-bold text-3xl mb-8 text-primary underline'>Sign Up</h1>
                    <form className='w-full' onSubmit={handleSubmit}>
                        <div className='flex flex-col w-full mb-3'>
                            <label className='text-slate-600' htmlFor="email">Email</label>
                            <input className='bg-gray-200 py-1 px-2 rounded' type="email" name="email" id="email" />
                        </div>
                        <div className='flex flex-col mb-3'>
                            <label className='text-slate-600' htmlFor="password">Password</label>
                            <input className='bg-gray-200 py-1 px-2 rounded' type="password" name="password" id="password" />
                        </div>
                        <div className='flex flex-col mb-3'>
                            <label className='text-slate-600' htmlFor="confirmPassword">Confirm Password</label>
                            <input className='bg-gray-200 py-1 px-2 rounded' type="password" name="confirmPassword" id="confirmPassword" />
                        </div>
                        <button disabled={loading} className={`flex justify-center  hover:bg-secondary text-white w-full py-2 rounded-3xl mt-8 ${loading ? 'bg-gray-500' : 'bg-primary'} `}>
                       {loading && <FontAwesomeIcon icon={faSpinner} className="animate-spin h-5 w-5 mr-3 text-white" />}
                            Sign Up
                        </button>
                    </form>
                    <Link href={'/logIn'}>
                        <p className='mt-4 text-slate-600'>Already have an account? <span className='font-bold'>LogIn</span> </p>
                    </Link>
                </div>
            </div>
            </div>
           
        </div>
    )
}