import 'tailwindcss/tailwind.css';
import carosel from '../../public/images/carosel.jpg'
import womenSweater from '../../public/images/womenSweater.jpg'
import 'tailwindcss/tailwind.css';
import NavBar from "@/components/navBar";



export default function Category() {


    const menData = [
        {
            title: "Men's Hoodie",
            image: womenSweater,
            price: 120
        },
        {
            title: "Men'Jacket",
            image: carosel,
            price: 120
        },
        {
            title: "Men's Sweater",
            image: womenSweater,
            price: 120
        }
    ];


    return (
        <div className="w-full py-4 ">
            <NavBar />
            <div className='px-20 w-full bg-gray-50'>
            <h1 className='font-bold text-3xl mb-4'>Category Name</h1>
            <p className='text-xl text-slate-600 mb-4'>Category description kjdsfhgdf os;dfhgoedsarui sdfuoivhaedpuoi dsafughpaoiu</p>

            <div className="flex flex-row justify-between ">
                {menData?.map((item: { title: string; image: any; price: number }) => (
                    <div className="flex flex-col items-center rounded-xl bg-white h-auto w-96 " key={item.title}>
                        <img src={item.image.src} alt="" className="w-64 h-72 mt-6" />
                        <p className="text-gray-900 text-xl mt-4 font-bold">{item.title}</p>
                        <p className="text-gray-900 font-bold">${item.price}</p>
                        <p className="text-slate-600 font-bold">Delivery in 21 days</p>
                        <p className="text-slate-600 font-bold">Free reuturn after 2 weeks of delivery</p>
                        <button className=" bg-blue-800 hover:bg-blue-950 text-white font-bold px-8 py-2 mt-4 mb-6 rounded">Add To Cart</button>
                    </div>
                ))}
            </div>
            </div>
        </div>
    )
}