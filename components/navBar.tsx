import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./../public/images/SOLUL.png";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import Box from "@mui/joy/Box";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/joy/Button";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import useSWR from 'swr'

const fetcher = (...args: RequestInfo[]) => fetch(args[0]).then((res) => res.json());


export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  const { data: cart} = useSWR('http://localhost:3000/cart', fetcher, {
    refreshInterval: 1000,
  });


  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };
    const menu = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Contact Us',
      url: '/contact'
    },
    {
      name: 'Cart',
      url: '/cart'
    },
    {
      name: 'Profile',
      url: 'logIn'
    }
    ]
  return (
    <div className="flex bg-white flex-row justify-between w-full items-center px-4  lg:px-20 sticky top-0">
      <Link href={`/`}>
        <Image src={logo} alt="logo" width={150} height={60} className="" />
      </Link>
      <div className="hidden lg:flex">
        <ul className="flex flex-row space-x-12">
          <Link href={"/"}>
            <li className="font-bold text-primary cursor-pointer hover:bg-tertiary px-2 py-1 rounded">
              Home
            </li>
          </Link>
          <Link href={"/about"}>
            <li className="font-bold text-primary hover:bg-tertiary px-2 py-1 rounded cursor-pointer">
              About
            </li>
          </Link>
          <Link href={"/contact"}>
            <li className="font-bold text-primary hover:bg-tertiary px-2 py-1 rounded cursor-pointer">
              Contact Us
            </li> 
          </Link>
         
        </ul>
      </div>
      <div className="lg:flex gap-12 hidden ">
        <Link href={"/cart"} className="relative">
          <FontAwesomeIcon
            icon={faCartShopping}
            fontSize={25}
            className="cursor-pointer text-primary"
          />
          <span className="absolute -top-3 -right-4 bg-secondary text-white font-bold rounded-full px-1 ">
            {cart?.length}
          </span>
        </Link>
        <Link href={"/logIn"}>
          <FontAwesomeIcon
            icon={faUser}
            fontSize={25}
            className="cursor-pointer text-primary"
          />
        </Link>
      </div>

      <Box sx={{ display: "" }} className="lg:hidden" >
        <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
          <FontAwesomeIcon icon={faBars} className="font-bold text-2xl" />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {menu.map((text) => (
                <ListItem key={text.name}>
                  <ListItemButton>
                    <Link href={text.url} className="mb-4">{text.name}</Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
}
