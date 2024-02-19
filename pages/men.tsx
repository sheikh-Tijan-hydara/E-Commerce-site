import NavBar from "@/components/navBar";
import 'tailwindcss/tailwind.css';


export async function getServerSideProps(context: any) {
    const res = await fetch(`http://localhost:3000/menCollection`);
    const data = await res.json();
    return {
        props: {
            menCollection: data,
            revalidate: 10
        }
    }
}

export default function MenCollection(props: { menCollection: any }) {

    return (
        <div className="w-full py-4 ">
            <NavBar />
            <div className='px-20 w-full bg-gray-50 py-4'>
                <h1 className='font-bold text-3xl mb-4'>Men Collection</h1>
                <p className='text-xl text-slate-600 mb-4'>Here you find all the fashions for men</p>


                <div className="flex flex-row justify-between flex-wrap gap-4 ">
                    {props.menCollection?.map((item: { title: string; image: any; price: number; delivery_date: String; }) => (
                        <div className="flex flex-col items-center rounded-xl bg-white h-auto w-96 " key={item?.title}>
                            <img src={`/${item?.image}`} alt='' className=" mt-6 w-64 h-60" />
                            <p className="text-gray-900 text-xl mt-4 font-bold">{item?.title}</p>
                            <p className="text-gray-900 font-bold">${item?.price}</p>
                            <p className="text-slate-600 font-bold">{item?.delivery_date}</p>
                            <p className="text-slate-600 font-bold">Free return after 2 weeks of delivery</p>
                            <button className=" bg-blue-800 hover:bg-blue-950 text-white font-bold px-8 py-2 mt-4 mb-6 rounded">Add To Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}