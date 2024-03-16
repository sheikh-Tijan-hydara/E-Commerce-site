import 'tailwindcss/tailwind.css';
import NavBar from "@/components/navBar";
import {addToCart} from '@/helper/functions';
import {Items} from '@/helper/interfaces';
import { ToastContainer } from 'react-toastify';
import Image from 'next/image';




export async function getServerSideProps(context: any){
    const {id} = context.params;
    const res = await fetch(`http://localhost:3000/categories/${id}`);
    const data = await res.json();
    return {
        props: {category: data,
            revalidate: 10  }  
    } 
}

export default function Category(props: { category:  any }) {
    return (
        <div className="w-full py-4 ">
                  <ToastContainer />
            <NavBar />
            <div className='px-20 w-full bg-tertiary py-4'>
            <h1 className='font-bold text-3xl text-black mb-4'>{props?.category?.title}</h1>
            <p className='text-xl text-slate-600 mb-4'>{props?.category?.descrition}</p>

            <div className="flex flex-row justify-center items-center flex-wrap gap-8  ">
                {props.category.list?.map((item: Items) => (
                    <div className="flex flex-col items-center rounded-xl bg-white h-auto w-72 lg:w-96 " key={item?.title}>
                        <Image src={`/${item?.image}`} width={200} height={200} alt='' className=" mt-6 w-64 h-60" />
                        <p className="text-gray-900 text-xl mt-4 font-bold">{item?.title}</p>
                        <p className="text-gray-900 font-bold">${item?.price}</p>
                        <p className="text-slate-600 font-bold">{item?.delivery_date}</p>
                        <p className="text-slate-600 font-bold">Free return after 2 weeks of delivery</p>
                        <button onClick={() => addToCart(item)} className=" bg-secondary hover:bg-primary text-white font-bold px-8 py-2 mt-4 mb-6 rounded">Add To Cart</button>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}