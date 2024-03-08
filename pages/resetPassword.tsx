import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'; 

export default function ForgotPaassword(){
    const router = useRouter(); 

    const onSubmit = (e: any) =>{
        e.preventDefault();
        router.push('/logIn'); 
    }
    return (
        <div className='flex flex-row w-full h-screen   items-center justify-center'>
            <ToastContainer />
            <div className='w-full h-full flex flex-col  bg-tertiary'>
            <Link href={'/'}>
            <button className='bg-primary text-white px-16 mb-2 ml-4 mt-4  py-2 rounded'>Back</button>
            </Link>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='flex flex-col items-center rounded w-1/4 h-2/3 bg-white px-8 py-4 shadow-lg '>
                    <h1 className='font-bold text-3xl mb-16 text-primary underline'>Reset Password</h1>
                    <form className='w-full' onSubmit={onSubmit}>
                        <div className='flex flex-col w-full mb-3'>
                            <label className='text-slate-600' htmlFor="email">New Password</label>
                            <input className='bg-gray-200 py-1 rounded' type="email" name="email" id="email" />
                        </div>
                        <div className='flex flex-col w-full mb-3 '>
                            <label className='text-slate-600' htmlFor="email">Confirm Password</label>
                            <input className='bg-gray-200 py-1 rounded' type="email" name="email" id="email" />
                        </div>
                       
                        <button className='bg-primary hover:bg-secondary text-white w-full py-2 rounded-3xl mt-8'>Continue</button>
                    </form>
                    <Link href={'/logIn'}>
                        <p className='mt-4 text-slate-600'>Back to <span className='font-bold'>LogIn</span> </p>
                    </Link>
                </div>
            </div>
           </div>
        </div>
    )
}