// import React from 'react'
// import { GoArrowUpRight } from "react-icons/go";
// import { IoPersonSharp } from "react-icons/io5";

// const NavBar = () => {
//   return (
//     <div className='flex justify-between md:justify-around items-center py-6 px-4 bg-[#ff5200] text-white'>
//       <div>
//         <img src="/logo.avif" className="w-24 md:w-38" alt="" />
//       </div>
//       <div>
//          <ul className="flex space-x-6 text-md font-bold items-center">
//           <li className="cursor-pointer">Swiggy Corporate</li>
//           <li className="cursor-pointer">Partner with us</li>
//           <li className="flex items-center border p-2 rounded-xl cursor-pointer">
//             Get the App <GoArrowUpRight className="ml-1 size-4 font-bold" />
//           </li>
//            {/* Profile Icon */}
//           <li className="bg-[#43464a] rounded-full p-2 cursor-pointer">
//             <IoPersonSharp className="size-5" />
//           </li>
//           </ul>
//       </div>
//     </div>
//   )
// }

// export default NavBar


// **************************

import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between md:justify-around items-center py-4 px-4 bg-[#ff5200] text-white">
      {/* Logo */}
      <div>
        <Link to="/">
           <img src="/logo.avif" className="w-20 md:w-32" alt="logo" />
        </Link>
       
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="flex space-x-6 text-md font-bold items-center">
          <li className="cursor-pointer">Swiggy Corporate</li>
          <li className="cursor-pointer">Partner with us</li>
          <li className="flex items-center border p-2 rounded-xl cursor-pointer">
            Get the App <GoArrowUpRight className="ml-1 size-6 font-bold" />
          </li>

          <li className="bg-[#43464a] rounded-full p-2 cursor-pointer">
            <IoPersonSharp className="size-5" />
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? <HiX className="size-8" /> : <HiMenu className="size-8" />}
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-16 left-0 w-full bg-[#ff5200] text-white md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 text-lg font-semibold px-6">
          <li className="cursor-pointer">Swiggy Corporate</li>
          <li className="cursor-pointer">Partner with us</li>
          <li className="flex items-center border p-2 w-fit rounded-xl cursor-pointer">
            Get the App <GoArrowUpRight className="ml-1 size-4 font-bold" />
          </li>
          <li className="bg-[#43464a] w-fit rounded-full p-2 cursor-pointer">
            <IoPersonSharp className="size-5" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
