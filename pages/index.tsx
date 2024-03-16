import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import carosel from '../public/images/carosel.jpg'
import tShirt from '../public/images/t-shirt.png'
import womenSweater from '../public/images/womenSweater.jpg'
import fashion1 from '../public/images/fashion1.jpg'
import fashion2 from '../public/images/fashion2.jpg'
import useSWR from 'swr'
import Link from 'next/link'
import NavBar from "@/components/navBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Items} from '@/helper/interfaces';
import {addToCart} from '@/helper/functions';
import Image from "next/image";

const fetcher = (...args: RequestInfo[]) => fetch(args[0]).then((res) => res.json());


export default function Home() {
  
  
  const { data: categoryData} = useSWR('http://localhost:3000/categories', fetcher)
  const { data: menData } = useSWR('http://localhost:3000/menCollection', fetcher)
  const { data: womenData } = useSWR('http://localhost:3000/womenCollection', fetcher)
  const { data: peopleData } = useSWR('http://localhost:3000/people', fetcher)


  
  return (
    <div className="w-full  py-4 ">
      <ToastContainer />
      <NavBar />

      {/* main content */}
      <div className="flex flex-row justify-between w-full bg-tertiary py-4 px-8 lg:px-20 h-auto ">
          <div className="flex flex-col w-full lg:w-1/2 justify-center">
            <h4 className=" font-bold text-xl lg:text-3xl text-primary">Winter fashion</h4>
            <h1 className="font-bold text-3xl lg:text-8xl text-slate-950 mb-4">Discover The Future</h1>
            <p className="text-black">Explore our curated selection of fabulous winter attire, tailor-made to keep you looking cool while staying warm.</p>
            <Link href={'/cart'}>
            <button className="bg-secondary hover:bg-primary text-white font-bold px-6 py-3 rounded mt-8 w-36">Buy Now</button>
            </Link>
        </div>
        <div className=" lg:flex hidden  w-1/2 justify-end items-center ">
          <Image src={carosel} width={200} height={200} alt="banner" className="w-2/4 h-fit" />
        </div>
      </div>
      {/* categories */}
      <div className=" w-full py-8 px-8 lg:px-20 h-auto flex flex-col justify-center  ">
        <h1 className="font-bold text-3xl mb-6 text-black text-left">Choose By Categories</h1>
        <div className="flex flex-wrap gap-8 rounded-xl items-center justify-center">
          {categoryData?.map((category: { title: string; image: any, id: number; }) => (
             <div className="flex flex-col items-center rounded bg-tertiary p-4 w-48 h-auto" key={category.id}>
            <Image src={`/${category.image}`}  width={200} height={200}alt="" className="w-24 h-24" />
             <p className="text-gray-800 text-lg mt-2 font-bold">{category.title}</p>
             <button className=" text-gray-500 underline  font-bold px-4 py-2 mt-4 rounded">
                <Link href= {`/categories/${category.id}`}>View Products</Link>
              </button>
           </div>
           ))}
         
        </div>
      </div>

      {/* men's collection */}
      <div className="flex flex-col w-full h-auto px-8 lg:px-20 py-8 ">
        <h1 className="font-bold text-3xl text-black mb-4">Latest Men&apos;s Collection</h1>
        <div className="flex flex-wrap justify-center items-center  gap-8">
            {menData?.map((item: Items) =>(
              <div className="flex flex-col items-center rounded-xl bg-tertiary h-auto w-72 lg:w-96" key={item.title}>
              <Image src={`/${item.image}`} width={200} height={200} alt="" className="w-64 lg:h-96 h-64 mt-6" />
              <p className="text-gray-900 text-2xl mt-4 font-bold">{item.title}</p>
              <p className="text-gray-900 font-bold">{item.price}</p>
               <button onClick={() => addToCart(item)} className=" bg-secondary hover:bg-primary text-white font-bold px-8 py-4 mt-4 mb-6 rounded">Add To Cart</button>
            </div>
            ))}
        </div>
        <div className="flex justify-end mt-2">
          <Link href={'/men'}>
          <button className="border border-primary hover:bg-primary hover:text-white text-primary w-64 font-bold px-8 py-4 mt-4 mb-6 rounded">View All</button>
          </Link>
        </div>

      </div>
      {/* women's collection */}
      <div className="flex flex-col w-full h-auto px-8 lg:px-20 py-8 bg-tertiary ">
        <h1 className="font-bold text-3xl text-black mb-4">Latest Women&apos;s Collection</h1>
        <div className="flex flex-wrap justify-center items-center gap-8 ">
            {womenData?.map((item: Items) =>(
              <div className="flex flex-col items-center rounded-xl bg-white h-auto w-72 lg:w-96" key={item.title}>
              <Image src={`/${item.image}`} width={200} height={200} alt="" className="w-64 lg:h-96 h-64 mt-6" />
              <p className="text-gray-900 text-2xl mt-4 font-bold">{item.title}</p>
              <p className="text-gray-900 font-bold">{item.price}</p>
               <button onClick={() => addToCart(item)} className=" bg-secondary hover:bg-primary text-white font-bold px-8 py-4 mt-4 mb-6 rounded">Add To Cart</button>
            </div>
            ))}
        </div>
        <div className="flex justify-end mt-2">
        <Link href={'/women'}>
          <button className="border border-primary hover:bg-primary hover:text-white text-primary w-64 font-bold px-8 py-4 mt-4 mb-6 rounded">View All</button>
          </Link>        </div>
      </div>

      <div className="w-full h-auto bg-white px-8 lg:px-20 py-8 flex flex-col gap-8 lg:flex-row justify-between">
        <div className="flex flex-col w-full items-center justify-center lg:w-5/12">
          <div className="flex flex-wrap gap-8 justify-center items-center mb-8  w-full">
            <Image src={tShirt} width={200} height={200} alt="" className="w-36 h-52 rounded-2xl"/>
            <Image src={carosel}  width={200} height={200} alt="" className="w-36 h-52 rounded-2xl"/>
            <Image src={womenSweater} width={200} height={200} alt="" className=" w-36 h-52 rounded-2xl" />
          </div>
          <Image src={fashion1}  width={200} height={200} alt="" className="rounded-2xl w-full h-80 mb-8" />
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold  text-black text-3xl">1K+</h2>
              <p className="text-lg text-black" >Furniture</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold text-black text-3xl">1000K+</h2>
              <p className="text-lg text-black">Happy Customer</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-bold text-3xl text-black">1K+</h2>
              <p className="text-lg text-black">Award wining</p>
            </div>
          </div>
        </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <h1 className="font-bold text-3xl lg:text-6xl text-black mb-8">When Frosty Glamour Takes Center Stage</h1>
            <p className="lg:text-lg mb-8 text-black">Our fashion connoisseurs, Mia Chanel and Thomas Wintours, curate stunning ensembles that defy winter&apos;s frosty grasp, offering striking glamour and sophistication</p>
            <Image src={fashion2} width={200} height={200} alt="" className="rounded-2xl w-full h-96"/>
          </div>
      </div>

      <div className="w-full  bg-tertiary px-8 lg:px-20 py-8 flex flex-col ">
        <h3 className="font-bold text-3xl mb-6 text-black">People Say About Us</h3>
        <div className="flex flex-wrap justify-center items-center gap-8  ">
         {peopleData?.map((person: {image: any; name: String; profession: String; comment: String}) => (
           <div className="flex flex-col  items-center w-96 lg:h-2/6 h-1/4 rounded-2xl bg-white " key={person.image}>
           <Image src={`/${person.image}`} width={200} height={200} alt="" className="w-full lg:h-60 h-48 rounded-t-2xl mb-8 "/>
           <h4 className="font-bold text-xl text-center text-black ">{person.name}</h4>
           <p className="text-center text-lg mb-8 text-black">{person.profession}</p>
           <p className="text-center text-lg px-8 mb-4 text-black">{person.comment}</p>
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
        <p className="font-bold text-black">&copy; 2024 Brain Limited. All rights reserved.</p>
      </div>
    </div>
  )
}
