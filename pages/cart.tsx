import NavBar from "@/components/navBar";
import 'tailwindcss/tailwind.css';
import bag from '@/public/images/bag.png';

export default function Cart() {
    return (
        <div className="w-full py-4 ">
            <NavBar />
            <div className="flex flex-row gap-4 px-20 w-full bg-gray-50 py-4">
                <div className="w-2/3">
                    <div className="w-full bg-gray-500 py-3 px-4">
                        <p className="font-bold text-white text-xl">Your Cart - {'(3)'}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <img src={bag.src} alt="" className="w-40 h-40"/>
                            </div>
                            <div className="flex flex-row justify-between px-4 w-9/12">
                                <div className="flex flex-col">
                                    <p className="font-bold text-lg mb-4">Product Name</p>
                                    <p className=" text-lg">Product Description</p>
                                    <p className=" text-lg">Product Size</p>
                                    <p className=" text-lg">Product Countity</p>
                                </div>
                                <div>
                                    <p className="font-bold text-xl">$100.45</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 bg-black text-white py-8 px-8">
                    <h1 className="font-bold text-3xl mb-6">Summary</h1>
                    <div className="flex flex-row justify-between   py-4 mb-4">
                        <p className="font-bold text-xl">Subtotal</p>
                        <p className=" text-xl">$344.3</p>
                    </div>
                    <div className="flex flex-row justify-between   py-4 mb-4">
                        <p className="font-bold text-xl">Shipping Cost</p>
                        <p className=" text-xl">$344.3</p>
                    </div>
                    <div className="flex flex-row justify-between   py-4 mb-4">
                        <p className="font-bold text-xl">Estimated Delivery</p>
                        <p className=" text-xl">7-10 days</p>
                    </div>
                    <div className="flex flex-row justify-between   py-16">
                        <p className="font-bold text-xl">Total</p>
                        <p className="font-bold text-xl">$344.3</p>
                    </div>
                    <button className="bg-white hover:bg-gray-500 hover:text-white px-4 py-2 w-full text-black rounded font-bold text-lg">Checkout</button>
                </div>
            </div>
        </div>
    )
}