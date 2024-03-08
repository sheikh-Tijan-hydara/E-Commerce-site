import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './../public/images/SOLUL.png'
import Link from "next/link";
import Image from "next/image";


export default function NavBar() {
    return(
        
      <div className="flex bg-white flex-row justify-between w-full items-center  px-20 "> 
      <Link href={`/`}>
      <Image src={logo} alt="logo" width={150} height={60} className="" />
      </Link>
      <div>
        <ul className="flex flex-row space-x-12">
          <Link href={'/'}>
          <li className="font-bold text-primary cursor-pointer hover:bg-tertiary px-2 py-1 rounded">Home</li>
          </Link>
          <Link href={'/about'}>
          <li className="font-bold text-primary hover:bg-tertiary px-2 py-1 rounded cursor-pointer">About</li>
          </Link>
          <li className="font-bold text-primary hover:bg-tertiary px-2 py-1 rounded cursor-pointer">Contact Us</li>
        </ul>
      </div>
      <div className="flex gap-12">
        <Link href={'/cart'} className="relative">
        <FontAwesomeIcon icon={faCartShopping} fontSize={25}  className="cursor-pointer text-primary" />
        <span className="absolute -top-3 -right-4 bg-secondary text-white font-bold rounded-full px-1 ">1</span>
        </Link>
        <Link href={'/logIn'}>
        <FontAwesomeIcon icon={faUser} fontSize={25}  className="cursor-pointer text-primary"/>
        </Link>
      </div>
    </div>
    )
}