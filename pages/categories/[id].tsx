import 'tailwindcss/tailwind.css';
import NavBar from "@/components/navBar";
import { ToastContainer } from 'react-toastify';
import Cart from '@/components/cart';




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
  const products: any[] = [
    {
      id: 1,
      title: "T-shirt",
      image: "/images/air.jpg",
      price: 100,
      description: "This is a nice t-shirt",
      delivery_date: "2 days",
    },
    {
      id: 2,
      title: "Sweater",
      image: "/images/air.jpg",
      price: 200,
      description: "This is a nice sweater",
      delivery_date: "3 days",
    },
    {
      id: 3,
      title: "Jacket",
      image: "/images/air.jpg",
      price: 300,
      description: "This is a nice jacket",
      delivery_date: "4 days",
    },
    {
      id: 4,
      title: "Pants",
      image: "/images/air.jpg",
      price: 400,
      description: "This is a nice pants",
      delivery_date: "5 days",
    },
    {
      id: 5,
      title: "Shoes",
      image: "/images/air.jpg",
      price: 500,
      description: "This is a nice shoes",
      delivery_date: "6 days",
    },
    {
      id: 6,
      title: "Hat",
      image: "/images/air.jpg",
      price: 600,
      description: "This is a nice hat",
      delivery_date: "7 days",
    },
    {
      id: 7,
      title: "Gloves",
      image: "/images/air.jpg",
      price: 700,
      description: "This is a nice gloves",
      delivery_date: "8 days",
    },
    {
      id: 8,
      title: "Socks",
      image: "/images/air.jpg",
      price: 800,
      description: "This is a nice socks",
      delivery_date: "9 days",
    },
    {
      id: 9,
      title: "Scarf",
      image: "/images/air.jpg",
      price: 900,
      description: "This is a nice scarf",
      delivery_date: "10 days",
    },
    {
      id: 10,
      title: "Belt",
      image: "/images/air.jpg",
      price: 1000,
      description: "This is a nice belt",
      delivery_date: "11 days",
    },
  ];
    return (
        <div className="w-full py-4 ">
                  <ToastContainer />
            <NavBar />
            <div className='px-20 w-full py-4'>
            <h1 className='font-bold text-3xl text-black mb-4'>{props?.category?.title}</h1>
            <p className='text-xl text-slate-600 mb-4'>{props?.category?.descrition}</p>

            <div className="flex flex-wrap gap-16 justify-center w-full items-center ">
          {products.map((item: any) => (
           <Cart key={item.id}  item={item}/>
          ))}
        </div>
            </div>
        </div>
    )
}