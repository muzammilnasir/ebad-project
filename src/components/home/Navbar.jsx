import React, { useState } from "react";
import { MdSegment } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";


function Navbar() {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Home", link: "/" },
    { name: "Cart", link: "/cart" },
    { name: "Contact Us", link: "/contact" },
    // { name: "Pricing", link: "#pricing" },
  ];

  return (
    <div className="mb-[72px]">
      <nav className="bg-gray-900 fixed w-full z-[999] top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
          <Link
            to='/'
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Muzammil
            </span>
          </Link>
          <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
            {open ? <IoClose /> : <MdSegment />}
          </div>
          <div className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {Links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.link}
                    c className={({isActive}) => `${isActive ? "text-blue-500" : "text-[#fff]"} font-semibold hover:text-blue-400 duration-300`}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
