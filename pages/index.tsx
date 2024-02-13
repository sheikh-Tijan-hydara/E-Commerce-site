import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../public/images/logo.png'
import carosel from '../public/images/carosel.jpg'
import tShirt from '../public/images/t-shirt.png'
import bag from '../public/images/bag.png'
import shoe from '../public/images/shoe.png'
import accessories from '../public/images/accesorries.png'
import short from '../public/images/short.png'
import jacket from '../public/images/jackets.png'
import Image from 'next/image';
import 'tailwindcss/tailwind.css'; 


export default function Home() {

  const categories: { title: string; image: any }[] = [
    {
      title: 'T-Shirt',
      image: tShirt
    },
    {
      title: 'Jackects',
      image: jacket
    },
    {
      title: 'Accessories',
      image: accessories
    },
    {
      title: 'Bags',
      image: bag
    },
    {
      title: 'Shoes',
      image: shoe
    },
    {
      title: 'Shorts',
      image: short
    },

  ];
  return (
    <div className="w-full  py-4 ">
      {/* nav bar */}
      <div className="flex flex-row justify-between w-full items-center py-4 px-20 "> 
        <img src={logo.src} alt="logo" className="w-32 h-16" />
        <div>
          <ul className="flex flex-row space-x-12">
            <li className="font-bold text-slate-800 cursor-pointer hover:bg-gray-200 px-2 py-1 rounded">Home</li>
            <li className="font-bold text-slate-800 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">About</li>
            <li className="font-bold text-slate-800 hover:bg-gray-200 px-2 py-1 rounded cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div className="flex gap-12">
          <FontAwesomeIcon icon={faCartShopping} fontSize={25} color="gray" className="cursor-pointer" />
          <FontAwesomeIcon icon={faUser} fontSize={25} color="gray" className="cursor-pointer"/>
        </div>
      </div>

      {/* main content */}
      <div className="flex flex-row justify-between w-full bg-gray-50 py-4 px-20 h-auto ">
          <div className="flex flex-col w-1/2 justify-center">
            <h4 className=" font-bold text-3xl text-blue-800">Winter fashion</h4>
            <h1 className="font-bold text-8xl text-slate-950 mb-4">Discover The Future</h1>
            <p>Explore our curated selection of fabulous winter attire, tailor-made to keep you looking cool while staying warm.</p>
            <button className="bg-blue-800 hover:bg-blue-950 text-white font-bold px-6 py-3 rounded mt-8 w-36">Buy Now</button>
        </div>
        <div className=" flex w-1/2 justify-end items-center ">
          <img src={carosel.src} alt="banner" className="w-2/4 h-fit" />
        </div>
      </div>
      {/* categories */}
      <div className=" w-full py-6 px-20 h-auto ">
        <h1 className="font-bold text-3xl mb-6 ">Choose By Categories</h1>
        <div className="flex flex-wrap gap-8 rounded-xl">
          {categories.map(category => (
             <div className="flex flex-col items-center rounded bg-gray-100 p-4 w-48 h-auto" key={category.title}>
            <img src={category.image.src} alt="" className="w-24 h-24" />
             <p className="text-gray-800 text-lg mt-2 font-bold">{category.title}</p>
             <button className=" text-gray-500 underline  font-bold px-4 py-2 mt-4 rounded">View Products</button>
           </div>
           ))}
         
        </div>
      </div>
    </div>
  )
}
