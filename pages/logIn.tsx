import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function LogIn(){
    return (
        <div className='flex flex-row w-full h-screen   items-center justify-center'>
            <ToastContainer />
            <div className='w-full h-full flex items-center justify-center bg-tertiary'>
                <div className='flex flex-col items-center rounded w-1/4 h-2/3 bg-white px-8 py-4 shadow-lg '>
                    <h1 className='font-bold text-3xl mb-8 text-primary underline'>LogIn</h1>
                    <form className='w-full'>
                        <div className='flex flex-col w-full mb-3'>
                            <label className='text-slate-600' htmlFor="email">Email</label>
                            <input className='bg-gray-200 py-1 rounded' type="email" name="email" id="email" />
                        </div>
                        <div className='flex flex-col mb-3'>
                            <label className='text-slate-600' htmlFor="password">Password</label>
                            <input className='bg-gray-200 py-1 rounded' type="password" name="password" id="password" />
                        </div>
                        <Link href={'/forgotPassword'}>
                        <p className='text-sm underline'>Forgot password</p>
                        </Link>
                        <button className='bg-primary hover:bg-secondary text-white w-full py-2 rounded-3xl mt-8'>LogIn</button>
                    </form>
                    <Link href={'/signUp'}>
                        <p className='mt-4'>Don't have an account? <span className='font-bold'>SingUp</span> </p>
                    </Link>
                </div>
            </div>
           
        </div>
    )
}