
import { useState } from "react";
import Link from "../Link/Link";
import { IoMenuOutline  } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const[open,setOpen]=useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];
      
     
      
    return (
        <nav className=" text-black bg-yellow-200 p-6  " >
            <div className=" md:hidden text-2xl " onClick={()=>setOpen(!open)}>
                {
                    open?<AiOutlineClose />: <IoMenuOutline />
                }
           
            </div>
           
            <ul className={`md:flex absolute md:static bg-yellow-200 px-6 duration-1000 ${open?'top-16':'-top-60'}`}>
            {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
            </ul>
           
        </nav>
    );
};

export default Navbar;