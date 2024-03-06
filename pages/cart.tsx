import NavBar from "@/components/navBar";
import { Items } from '@/helper/interfaces';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';


export async function getServerSideProps(context: any) {
    const res = await fetch(`http://localhost:3000/cart`);
    const data = await res.json();
    return {
        props: {
            cart: data,
            revalidate: 10
        }
    }
}



export default function Cart(props: { cart: any }) {
    const [cartData, setCartData] = useState(props.cart)
    const [showConfirmationModal, setShowConfirmationModal] = useState(false)
    const [itemToDeleteId, setItemToDeleteId] = useState<number | null>(null);
    const shippingFee: number = 15;
    let subTotal: number = 0;


    for (let i = 0; i < cartData.length; i++) {
        subTotal += cartData[i].price;
    }



    const removeFromCart = async (id: number) => {
        try {
            const res = await fetch(`http://localhost:3000/cart/${id}`, {
                method: 'DELETE'
            });
            const data = await res.json();
            const newCart = cartData.filter((item: Items) => item.id !== id);
            setCartData(newCart);
            toast.warn('Item removed from cart')
        } catch (error) {
            toast.error('Failed to remove item from cart')
        }
    }
    const showConfirmation = (id: number) => {
        setItemToDeleteId(id);
        setShowConfirmationModal(true);
    };

    return (
        <div className="w-full py-4 ">
            <ToastContainer />
            <NavBar />

            <div className="flex flex-row gap-4 px-20 w-full  py-4">
                <div className="w-2/3">
                    <div className="w-full bg-primary py-3 px-4 mb-2 rounded">
                        <p className="font-bold text-white text-xl">Your Cart - {cartData.length}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        {cartData?.map((item: Items) => (
                            <div className="flex flex-row justify-between items-center" key={item?.id}>
                                <div>
                                    <img src={item.image} alt="" className="w-40 h-40" />
                                </div>
                                <div className="flex flex-row justify-between px-4 w-9/12">
                                    <div className="flex flex-col">
                                        <p className="font-bold text-lg mb-3 text-black">{item.title}</p>
                                        <p className=" text-lg text-black">Size: {item?.size}</p>
                                        <p className=" text-lg text-black"> Delivery: {item.delivery_date}</p>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <p className="font-bold text-xl text-black">${item.price}</p>
                                        <FontAwesomeIcon icon={faTrash} onClick={() => showConfirmation(item.id)} className="cursor-pointer text-red-700 text-xl hover:text-red-900" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-1/3 h-2/3 bg-tertiary text-black py-8 px-8 rounded">
                    <h1 className="font-bold text-3xl mb-6">Summary</h1>
                    <div className="flex flex-row justify-between   py-4 mb-4">
                        <p className="font-bold text-xl">Subtotal</p>
                        <p className=" text-xl">${subTotal}</p>
                    </div>
                    <div className="flex flex-row justify-between   py-4 mb-4">
                        <p className="font-bold text-xl">Shipping Cost</p>
                        <p className=" text-xl">${shippingFee}</p>
                    </div>
                    <div className="flex flex-row justify-between   py-16">
                        <p className="font-bold text-xl">Total</p>
                        <p className="font-bold text-xl">${subTotal + shippingFee}</p>
                    </div>
                    <button className="bg-primary   hover:bg-secondary hover:text-white px-4 py-2 w-full text-white rounded font-bold text-lg">Checkout</button>
                </div>
            </div>
            {/* comfirmation modal */}
            {showConfirmationModal && (
                <div className=" flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50" >
                    <div className="bg-white w-1/3 h-40 flex flex-col justify-center items-center rounded">
                        <p className="font-normal text-xl mb-4">Are you sure you want to remove it from the cart</p>
                        <div className="flex items-end flex-row gap-4">
                            <button className="bg-gray-600 hover:bg-gray-800 text-white  px-8 py-1 rounded " onClick={() => {
                                setShowConfirmationModal(false)
                                setItemToDeleteId(null)
                            }
                            }>No</button>
                            <button className="border border-gray-600 hover:bg-gray-900 hover:text-white text-slate-900 px-8 py-1 rounded " onClick={() => {
                                removeFromCart(itemToDeleteId!); 
                                setShowConfirmationModal(false);
                                setItemToDeleteId(null);
                            }}>Yes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}