import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import carosel from "../public/images/carosel.jpg";
import useSWR from "swr";
import Link from "next/link";
import NavBar from "@/components/navBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Cart from "@/components/cart";

const fetcher = (...args: RequestInfo[]) =>
  fetch(args[0]).then((res) => res.json());

export default function Home() {
  const { data: categoryData } = useSWR(
    "http://localhost:3000/categories",
    fetcher
  );
  const { data: prducts } = useSWR(
    "/api/getProducts/",
    fetcher
  );

  // create an array of 10 products with image, name, price and description
  // const products: any[] = [
  //   {
  //     id: 1,
  //     title: "T-shirt",
  //     image: "/images/air.jpg",
  //     price: 100,
  //     description: "This is a nice t-shirt",
  //     delivery_date: "2 days",
  //   },
  //   {
  //     id: 2,
  //     title: "Sweater",
  //     image: "/images/air.jpg",
  //     price: 200,
  //     description: "This is a nice sweater",
  //     delivery_date: "3 days",
  //   },
  //   {
  //     id: 3,
  //     title: "Jacket",
  //     image: "/images/air.jpg",
  //     price: 300,
  //     description: "This is a nice jacket",
  //     delivery_date: "4 days",
  //   },
  //   {
  //     id: 4,
  //     title: "Pants",
  //     image: "/images/air.jpg",
  //     price: 400,
  //     description: "This is a nice pants",
  //     delivery_date: "5 days",
  //   },
  //   {
  //     id: 5,
  //     title: "Shoes",
  //     image: "/images/air.jpg",
  //     price: 500,
  //     description: "This is a nice shoes",
  //     delivery_date: "6 days",
  //   },
  //   {
  //     id: 6,
  //     title: "Hat",
  //     image: "/images/air.jpg",
  //     price: 600,
  //     description: "This is a nice hat",
  //     delivery_date: "7 days",
  //   },
  //   {
  //     id: 7,
  //     title: "Gloves",
  //     image: "/images/air.jpg",
  //     price: 700,
  //     description: "This is a nice gloves",
  //     delivery_date: "8 days",
  //   },
  //   {
  //     id: 8,
  //     title: "Socks",
  //     image: "/images/air.jpg",
  //     price: 800,
  //     description: "This is a nice socks",
  //     delivery_date: "9 days",
  //   },
  //   {
  //     id: 9,
  //     title: "Scarf",
  //     image: "/images/air.jpg",
  //     price: 900,
  //     description: "This is a nice scarf",
  //     delivery_date: "10 days",
  //   },
  //   {
  //     id: 10,
  //     title: "Belt",
  //     image: "/images/air.jpg",
  //     price: 1000,
  //     description: "This is a nice belt",
  //     delivery_date: "11 days",
  //   },
  // ];

  return (
    <div className="w-full  py-4 ">
      <ToastContainer />
      <NavBar />

      {/* main content */}
      <div className="flex flex-row justify-between w-full bg-tertiary py-4 px-8 lg:px-20 h-auto ">
        <div className="flex flex-col w-full lg:w-1/2 justify-center">
          <h4 className=" font-bold text-xl lg:text-3xl text-primary">
            Winter fashion
          </h4>
          <h1 className="font-bold text-3xl lg:text-8xl text-slate-950 mb-4">
            Discover The Future
          </h1>
          <p className="text-black">
            Explore our curated selection of fabulous winter attire, tailor-made
            to keep you looking cool while staying warm.
          </p>
          <Link href={"/cart"}>
            <button className="bg-secondary hover:bg-primary text-white font-bold px-6 py-3 rounded mt-8 w-36">
              Buy Now
            </button>
          </Link>
        </div>
        <div className=" lg:flex hidden  w-1/2 justify-end items-center ">
          <Image
            src={carosel}
            width={200}
            height={200}
            alt="banner"
            className="w-2/4 h-fit"
          />
        </div>
      </div>
      {/* categories */}
      <div className=" w-full py-8 px-8 lg:px-20 h-auto flex flex-col   ">
        <h1 className="font-bold text-3xl mb-6 text-black text-left">
          Choose By Categories
        </h1>
        <div className="flex flex-wrap justify-center lg:justify-start gap-8">
          {categoryData?.map(
            (category: { title: string; image: any; id: number }) => (
              <div
                className="flex flex-col items-center rounded bg-tertiary p-4 w-48 h-auto"
                key={category.id}
              >
                <Image
                  src={`/${category.image}`}
                  width={200}
                  height={200}
                  alt=""
                  className="w-24 h-24"
                />
                <p className="text-gray-800 text-lg mt-2 font-bold">
                  {category.title}
                </p>
                <button className=" text-gray-500 underline  font-bold px-4 py-2 mt-4 rounded">
                  <Link href={`/categories/${category.id}`}>View Products</Link>
                </button>
              </div>
            )
          )}
        </div>
      </div>

      <div className="w-full flex flex-col justify-center  gap-4 lg:px-20 px-16">
      <h1 className="font-bold text-3xl  text-black text-left">
          Available Products
        </h1>
        <input
          type="text"
          placeholder="Search for products"
          className="w-1/2 p-2 rounded-lg border-2 border-gray-300 "
        />

        <div className="flex flex-wrap gap-16 justify-center lg:justify-start w-full items-center ">
          {prducts?.map((item: any) => (
            <Cart key={item.id}  item={item}/>
          ))}
        </div>
      </div>

      {/* footer */}
      <div className="flex flex-col justify-center items-center gap-2 py-4 ">
        <div className="flex flex-col items-center">
        <p className="font-bold text-primary text-lg ">CONTACT US</p>
        <p className="font-bold text-gray-700 text-lg ">+234 812 345 6789</p>
        <p className="font-bold text-gray-700 text-lg ">
          123, Fake Street, Lagos, Nigeria
        </p>
        </div>
        <p className="font-bold text-black text-lg ">FIND US ON</p>
        <div className="flex justify-around  w-64">
          <FontAwesomeIcon
            icon={faFacebook}
            fontSize={25}
            color="blue"
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            fontSize={25}
            color="red"
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            fontSize={25}
            color="blue"
            className="cursor-pointer"
          />
        </div>
        <p className="font-bold text-black">
          &copy; 2024 Brain Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
}
