import NavBar from "@/components/navBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Link from "next/link";

export default function product() {
  return (
    <div className="w-full py-8 ">
      <ToastContainer />
      <NavBar />
      <h1>Product</h1>

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
            <p className="text-black text-4xl mb-4 font-bold">Item Title</p>
            <p className="text-black text-lg">Item description nksjdjs asdfjhai asdflauiy iiufd</p>
            <div className="flex flex-row gap-2">
                <p className="text-black ">⭐⭐⭐⭐⭐</p>
                <p className="text-black ">delivery_date</p>
            </div>
            <hr/>
            
            <p className="font-bold text-2zl">$549.00</p>
            <p>A good product with a special offer</p>

            {/* increase or reduce quantity */}
            <div className="flex flex-row gap-4 items-center rounded-3xl bg-tertiary px-4 ">
                <button className="p-2 text-black text-lg rounded-lg">
                    -
                </button>
                <p className="text-black text-lg">1</p>
                <button className=" text-lg p-2 text-black rounded-lg">
                    +
                </button>
            </div>

            <button className=" text-primary  hover:bg-primary hover:text-white border px-8 py-4 mt-4 rounded-xl">
                Add to Cart
            </button>

        </div>
      </div>
    </div>
  );
}
