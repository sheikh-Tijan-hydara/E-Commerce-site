import NavBar from "@/components/navBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import useSWR from "swr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faTruck } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "@/helper/functions";
import { useRouter } from "next/router";

const fetcher = (...args: RequestInfo[]) =>
  fetch(args[0]).then((res) => res.json());

export default function Product() {
  const route = useRouter();
  const { id } = route.query;
  const { data: prduct } = useSWR(
    `/api/product/${id}`,
    fetcher
  );
  console.log(prduct);

  return (
    <div className="w-full py-8 ">
      <ToastContainer />
      <NavBar />
      

      <div className="px-8 lg:px-20 h-auto flex flex-row gap-24 w-4/5">
        <div className="flex flex-col gap-4">
          <div className="bg-tertiary px-8 h-96 rounded-lg flex gap-4 items-center justify-center  ">
            <Image
              src="/images/air.jpg"
              width={200}
              height={200}
              alt="product"
              className="w-30 h-30"
            />
            <Image
              src="/images/air.jpg"
              width={200}
              height={200}
              alt="product"
              className="w-30 h-30"
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="bg-tertiary  p-8 rounded flex justify-center items-center">
              <Image
                src="/images/air.jpg"
                width={200}
                height={200}
                alt="product"
                className="w-10 h-10"
              />
            </div>
            <div className="bg-tertiary p-8 rounded flex justify-center items-center">
              <Image
                src="/images/air.jpg"
                width={200}
                height={200}
                alt="product"
                className="w-10 h-10"
              />
            </div>
            <div className="bg-tertiary p-8 rounded flex justify-center items-center">
              <Image
                src="/images/air.jpg"
                width={200}
                height={200}
                alt="product"
                className="w-10 h-10"
              />
            </div>
            <div className="bg-tertiary p-8 rounded flex justify-center items-center">
              <Image
                src="/images/air.jpg"
                width={200}
                height={200}
                alt="product"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-black text-4xl mb-4 font-bold">{prduct?.title}</p>
          <p className="text-black text-lg">
           {prduct?.description}
          </p>
          <div className="flex flex-row gap-2">
            <p className="text-black ">⭐⭐⭐⭐⭐</p>
            <p className="text-black ">{prduct?.delivery_date}</p>
          </div>
          <hr className="bg-gray-600 w-full " />

          <p className="font-bold text-2xl text-black">${prduct?.price}</p>
          <p className="text-black">A good product with a special offer</p>

          <div className="flex flex-row gap-4 items-center rounded-3xl bg-tertiary px-4 ">
            <button className="p-2 text-black text-lg rounded-lg">-</button>
            <p className="text-black text-lg">1</p>
            <button className=" text-lg p-2 text-black rounded-lg">+</button>
          </div>

          <div className="flex gap-4">
            <button className=" hover:text-primary bg-primary hover:bg-white text-white border px-8 py-4 mt-4 w-48 rounded-full">
              Buy Now
            </button>
            <button onClick={() => addToCart(prduct)} className=" text-primary  hover:bg-primary hover:text-white border px-8 py-4 mt-4 w-48 rounded-full">
              Add to Cart
            </button>
          </div>
          <hr className="bg-gray-600 w-full " />
          <div className="flex flex-row justify-center items-center gap-4">
            <FontAwesomeIcon
              icon={faTruck}
              className="text-primary bg-tertiary rounded-full p-4"
            />
            <p className="text-gray-600">Free Delivery at your own comfort</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <FontAwesomeIcon
              icon={faCalendar}
              className="text-primary bg-tertiary rounded-full p-4"
            />
            <p className="text-gray-600">
              Free return before 30 days after delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
