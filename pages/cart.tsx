import NavBar from "@/components/navBar";
import 'tailwindcss/tailwind.css';
import bag from '@/public/images/bag.png';


export async function getServerSideProps(context: any){
    const res = await fetch(`http://localhost:3000/cart`);
    const data = await res.json();
    return {
        props: {
            cart: data,
            revalidate: 10
        }
    }
}



export default function Cart(props: { cart: any}) {

    const shippingFee: number = 15;
    let subTotal: number = 0;
    
    for (let i = 0; i < props.cart.length; i++) {
        subTotal += props.cart[i].price;
      }

    return (
        <div className="w-full py-4 ">
            <NavBar />
            <div className="flex flex-row gap-4 px-20 w-full bg-gray-50 py-4">
                <div className="w-2/3">
                    <div className="w-full bg-gray-500 py-3 px-4 mb-2">
                        <p className="font-bold text-white text-xl">Your Cart - {props.cart.length}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        {props.cart?.map((item: {title: String; image: any; price: number; delivery_date: String;}) =>(
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <img src={item.image} alt="" className="w-40 h-40"/>
                            </div>
                            <div className="flex flex-row justify-between px-4 w-9/12">
                                <div className="flex flex-col">
                                    <p className="font-bold text-lg mb-4">{item.title}</p>
                                    <p className=" text-lg">{item.delivery_date}</p>
                                    <p className=" text-lg">Product Size</p>
                                    <p className=" text-lg">Product Countity</p>
                                </div>
                                <div>
                                    <p className="font-bold text-xl">${item.price}</p>
                                    </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 bg-black text-white py-8 px-8">
                    <h1 className="font-bold text-3xl mb-6">Summary</h1>
                    <div className="flex flex-row justify-between   py-4 mb-4">
                        <p className="font-bold text-xl">Subtotal</p>
                        <p className=" text-xl">${subTotal}</p>
                    </div>
                    <div className="flex flex-row justify-between   py-4 mb-4">
                        <p className="font-bold text-xl">Shipping Cost</p>
                        <p className=" text-xl">${shippingFee}</p>
                    </div>
                    <div className="flex flex-row justify-between   py-4 mb-4">
                        <p className="font-bold text-xl">Estimated Delivery</p>
                        <p className=" text-xl">7-10 days</p>
                    </div>
                    <div className="flex flex-row justify-between   py-16">
                        <p className="font-bold text-xl">Total</p>
                        <p className="font-bold text-xl">${subTotal + shippingFee}</p>
                    </div>
                    <button className="bg-white hover:bg-gray-500 hover:text-white px-4 py-2 w-full text-black rounded font-bold text-lg">Checkout</button>
                </div>
            </div>
        </div>
    )
}