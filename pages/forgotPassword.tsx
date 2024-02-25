import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'; 

export default function ForgotPaassword(){

    const router = useRouter(); 

    const onSubmit = (e: any) =>{
        e.preventDefault();
        router.push('/resetPassword'); 
    }
    return (
        <div className='flex flex-row w-full h-screen   items-center justify-center'>
            <ToastContainer />
            <div className='w-full h-full flex items-center justify-center bg-tertiary'>
                <div className='flex flex-col items-center rounded w-1/4  bg-white px-8 py-4 shadow-lg '>
                    <h1 className='font-bold text-3xl mb-16 text-primary underline'>Forgot Password</h1>
                    <form className='w-full' onSubmit={onSubmit}>
                        <div className='flex flex-col w-full mb-3 mt-8'>
                            <label className='text-slate-600' htmlFor="email">Email</label>
                            <input className='bg-gray-200 py-1 rounded' type="email" name="email" id="email" />
                        </div>
                       
                        <button className='bg-primary hover:bg-secondary text-white w-full py-2 rounded-3xl mt-8'>Continue</button>
                    </form>
                    <Link href={'/logIn'}>
                        <p className='mt-4'>Back to <span className='font-bold'>LogIn</span> </p>
                    </Link>
                </div>
            </div>
           
        </div>
    )
}