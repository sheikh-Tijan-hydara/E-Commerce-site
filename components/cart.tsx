import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { addToCart } from "@/helper/functions";

export default function Cart({ item }: { item: any }) {
  return (
    <div className="flex flex-col">
      <Link href={`/products/${item.id}`}>
        <div className="flex flex-col items-center justify-center rounded bg-tertiary p-4 w-56 h-56 relative">
          <FontAwesomeIcon
            icon={faHeart}
            fontSize={25}
            className="cursor-pointer absolute top-2 right-2 text-pink-200"
          />
          <Image
            src={item?.Images}
            width={200}
            height={200}
            alt=""
            className="w-32 h-32"
          />
        </div>
      </Link>
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-gray-800 text-sm mt-2 font-bold mb-2">
          {item.name}
        </p>
        <p className="text-black text-xs font-bold">${item.price}</p>
      </div>
      <p className="text-black text-xs">{item.description}</p>
      <div className="flex flex-row gap-2">
        <p className="text-black text-xs">⭐⭐⭐⭐⭐</p>
        <p className="text-black text-xs">({item.delivery_date})</p>
      </div>
      <button
        onClick={() => addToCart(item)}
        className=" text-primary text-xs hover:bg-primary hover:text-white border px-2 py-2 mt-4 rounded-3xl"
      >
        Add to Cart
      </button>
    </div>
  );
}
