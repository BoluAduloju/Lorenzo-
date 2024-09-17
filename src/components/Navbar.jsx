import React, {useState} from 'react'
import RiCloseLargeFillIcon from 'remixicon-react/CloseLineIcon';
import RiMenu3LineIcon from 'remixicon-react/Menu3LineIcon';
import {LINKS} from '../constants/index'

const Navbar = () => {

   const[isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }

  return (

   <nav className = "sticky top-0 z-50 py-3 backdrop-blur-lg boder-b border-neutral-700/80">
        <div className=" container px-4 mx-auto relative text-sm">
            <div className="flex justify-between item-center mt-2">
                        <div className="flex item-center flex-shrink-0">
                                <a href="#"> 
                                    <p className="font-bold font-serif lg:text-2xl tracking-tight">LORENZO.</p>
                                </a>
                        </div>   
                        <div className="lg:hidden">
                           <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline-none" aria-label=      {isOpen ? "Open menu" : "Close menu"}>
                           {isOpen ? <RiCloseLargeFillIcon /> : <RiMenu3LineIcon />}
                           </button>
                        </div>     
                        <ul className="hidden lg:flex ml-14 space-x-12 mt-2">
                            {LINKS.map((Link,Index) => (
                                <li key={Index}>
                                   <a href={Link.link}>{Link.name} </a>
                                </li>
                               
                            ))}
                        </ul>
                        <div className="hidden lg:flex justify-center space-x-12 items-center">
                            <a href="#" className="py-2 px-3 border rounded-md font-medium">
                                Book a Call
                            </a>
                        </div>
            </div>
            {isOpen && (
                <div className="fixed right-0 z-20 bg-slate-50 w-full h-lvh p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {LINKS.map((Link, Index) => (
                            <li key={Index} className="py-4">
                                <a href={Link.link}>{Link.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md bg-black text-white cursor-pointer">Book a Call</a>
                    </div>
                </div>
            )}
        </div>        
    </nav>
   
  )
}

export default Navbar

