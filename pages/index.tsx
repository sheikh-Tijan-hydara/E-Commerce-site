import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import logo from '../public/images/logo.png'
import carosel from '../public/images/carosel.jpg'
import tShirt from '../public/images/t-shirt.png'
import womenSweater from '../public/images/womenSweater.jpg'
import fashion1 from '../public/images/fashion1.jpg'
import fashion2 from '../public/images/fashion2.jpg'
import 'tailwindcss/tailwind.css'; 
import useSWR from 'swr'
import Link from 'next/link'
import NavBar from "@/components/navBar";

const fetcher = (...args: RequestInfo[]) => fetch(args[0]).then((res) => res.json());


export default function Home() {
  
  
  const { data: categoryData} = useSWR('http://localhost:3000/categories', fetcher)
  const { data: menData } = useSWR('http://localhost:3000/menCollection', fetcher)
  const { data: womenData } = useSWR('http://localhost:3000/womenCollection', fetcher)
  const { data: peopleData } = useSWR('http://localhost:3000/people', fetcher)

  return (
    <div className="w-full  py-4 ">
      <NavBar />

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
      <div className=" w-full py-8 px-20 h-auto ">
        <h1 className="font-bold text-3xl mb-6 ">Choose By Categories</h1>
        <div className="flex flex-wrap gap-8 rounded-xl">
          {categoryData?.map((category: { title: string; image: any, id: number }) => (
             <div className="flex flex-col items-center rounded bg-gray-100 p-4 w-48 h-auto" key={category.id}>
            <img src={category.image} alt="" className="w-24 h-24" />
             <p className="text-gray-800 text-lg mt-2 font-bold">{category.title}</p>
             <button className=" text-gray-500 underline  font-bold px-4 py-2 mt-4 rounded">
                <Link href= {`/categories/${category.id}`}>View Products</Link>
              </button>
           </div>
           ))}
         
        </div>
      </div>

      {/* men's collection */}
      <div className="flex flex-col w-full h-auto px-20 py-8 bg-gray-100 ">
        <h1 className="font-bold text-3xl mb-4">Latest Men's Collection</h1>
        <div className="flex flex-row justify-between ">
            {menData?.map((item: { title: string; image: any; price: number }) =>(
              <div className="flex flex-col items-center rounded-xl bg-white h-auto w-96" key={item.title}>
              <img src={item.image} alt="" className="w-64 h-96 mt-6" />
              <p className="text-gray-900 text-2xl mt-4 font-bold">{item.title}</p>
              <p className="text-gray-900 font-bold">{item.price}</p>
               <button className=" bg-blue-800 hover:bg-blue-950 text-white font-bold px-8 py-4 mt-4 mb-6 rounded">Add To Cart</button>
            </div>
            ))}
        </div>
        <div className="flex justify-end mt-2">
          <Link href={'/men'}>
          <button className="border border-blue-800 hover:bg-blue-950 hover:text-white text-blue-800 w-64 font-bold px-8 py-4 mt-4 mb-6 rounded">View All</button>
          </Link>
        </div>

      </div>
      {/* women's collection */}
      <div className="flex flex-col w-full h-auto px-20 py-8 bg-gray-100 ">
        <h1 className="font-bold text-3xl mb-4">Latest Women's Collection</h1>
        <div className="flex flex-row justify-between ">
            {womenData?.map((item: { title: string; image: any; price: number }) =>(
              <div className="flex flex-col items-center rounded-xl bg-white h-auto w-96" key={item.title}>
              <img src={item.image} alt="" className="w-64 h-96 mt-6" />
              <p className="text-gray-900 text-2xl mt-4 font-bold">{item.title}</p>
              <p className="text-gray-900 font-bold">{item.price}</p>
               <button className=" bg-blue-800 hover:bg-blue-950 text-white font-bold px-8 py-4 mt-4 mb-6 rounded">Add To Cart</button>
            </div>
            ))}
        </div>
        <div className="flex justify-end mt-2">
        <Link href={'/women'}>
          <button className="border border-blue-800 hover:bg-blue-950 hover:text-white text-blue-800 w-64 font-bold px-8 py-4 mt-4 mb-6 rounded">View All</button>
          </Link>        </div>
      </div>

      <div className="w-full h-auto bg-white px-20 py-8 flex flex-row justify-between">
        <div className="flex flex-col w-5/12 px-8">
          <div className="flex flex-row justify-between items-center mb-8">
            <img src={tShirt.src} alt="" className="w-36 h-52 rounded-2xl"/>
            <img src={carosel.src} alt="" className="w-36 h-52 rounded-2xl"/>
            <img src={womenSweater.src} alt="" className="w-36 h-52 rounded-2xl" />
          </div>
          <img src={fashion1.src} alt="" className="rounded-2xl w-full h-80 mb-8" />
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold text-3xl">1K+</h2>
              <p className="text-lg">Furniture</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold text-3xl">1000K+</h2>
              <p className="text-lg">Happy Customer</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold text-3xl">1K+</h2>
              <p className="text-lg">Award wining</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
              <h1 className="font-bold text-6xl mb-8">When Frosty Glamour Takes Center Stage</h1>
              <p className="text-lg mb-8">Our fashion connoisseurs, Mia Chanel and Thomas Wintours, curate stunning ensembles that defy winter's frosty grasp, offering striking glamour and sophistication</p>
              <img src={fashion2.src} alt="" className="rounded-2xl w-full h-96"/>
        </div>
      </div>

      <div className="w-full  bg-gray-100 px-20 py-8 flex flex-col ">
        <h3 className="font-bold text-3xl mb-6 ">People Say About Us</h3>
        <div className="flex flex-row justify-between  ">
         {peopleData?.map((person: {image: any; name: String; profession: String; comment: String}) => (
           <div className="flex flex-col  items-center w-96 h-2/6 rounded-2xl bg-white " key={person.image}>
           <img src={person.image} alt="" className="w-full h-60 rounded-t-2xl mb-8 "/>
           <h4 className="font-bold text-xl text-center ">{person.name}</h4>
           <p className="text-center text-lg mb-8">{person.profession}</p>
           <p className="text-center text-lg px-8 mb-4">{person.comment}</p>
         </div>
         ))}
        </div>
      </div>

          {/* footer */}
      <div className="flex flex-col justify-center items-center gap-2 py-4 ">
        <p className="font-bold text-lg ">FIND US ON</p>
        <div className="flex justify-around  w-64">
            <FontAwesomeIcon icon={faFacebook} fontSize={25} color="blue" className="cursor-pointer" />
            <FontAwesomeIcon icon={faInstagram} fontSize={25} color="red" className="cursor-pointer" />
            <FontAwesomeIcon icon={faTwitter} fontSize={25} color="blue" className="cursor-pointer" />
        </div>
        <p className="font-bold">&copy; 2024 Brain Limited. All rights reserved.</p>
      </div>
    </div>
  )
}
