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
<nav className="border-b-2">
    <div className="max-w-7xl mx-auto flex justify-between item-center py-8">
        <div className="pl-2">
            <a href="#"> 
              <p className="font-bold font-serif text-4xl">LORENZO.</p>
            </a>
        </div>
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl pr-2 focus:outline-none" aria-label={isOpen ? "Open menu" : "Close menu"}>
                {isOpen ? <RiCloseLargeFillIcon /> : <RiMenu3LineIcon />}
            </button>
        </div>
        <div className="hidden md:flex space-x-8 md:space-x-4 pr-2">
            {LINKS.map((Link,Index) => (
                <a key={Index} href={Link.link} className="uppercase text-sm font-medium">
                    {Link.name}
                </a>
            ))}
        </div>
    </div>

    <div className={`${isOpen ? "block" : "hidden"} md:hidden absolute bg-neutral-50 w-full py-5 px-4 border-b-4`}>
        {LINKS.map((link,index) => {
            <a key={index} href={link.link} className="uppercase text-lg font-medium block py-2 tracking-wide">
                {link.name}
            </a>
        })}
    </div> 
</nav>
  )
}

export default Navbar

