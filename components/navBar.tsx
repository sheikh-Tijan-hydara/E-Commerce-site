import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './../public/images/logo.png'
import Link from "next/link";


export default function NavBar() {
    return(
        
      <div className="flex bg-white flex-row justify-between w-full items-center py-4 px-20 "> 
      <Link href={`/`}>
      <img src={logo.src} alt="logo" className="w-32 h-16" />
      </Link>
      <div>
        <ul className="flex flex-row space-x-12">
          <Link href={'/'}>
          <li className="font-bold text-primary cursor-pointer hover:bg-tertiary px-2 py-1 rounded">Home</li>
          </Link>
          <li className="font-bold text-primary hover:bg-tertiary px-2 py-1 rounded cursor-pointer">About</li>
          <li className="font-bold text-primary hover:bg-tertiary px-2 py-1 rounded cursor-pointer">Contact Us</li>
        </ul>
      </div>
      <div className="flex gap-12">
        <Link href={'/cart'}>
        <FontAwesomeIcon icon={faCartShopping} fontSize={25}  className="cursor-pointer text-primary" />
        </Link>
        <FontAwesomeIcon icon={faUser} fontSize={25}  className="cursor-pointer text-primary"/>
      </div>
    </div>
    )
}