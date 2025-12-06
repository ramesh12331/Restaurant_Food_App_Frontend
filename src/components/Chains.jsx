

import React, { useEffect, useState } from 'react'
import { API_URI } from '../api'
import { GrRestaurant } from "react-icons/gr";
import { MdLocationPin, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
// import {Hairball} from 'react-loader-spinner'
import { Vortex } from 'react-loader-spinner';
const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true)

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URI}/vendor/all-vendors`)
      const newData = await response.json()
      setVendorData(newData)
      // console.log("This is api data", newData)
      setLoading(false)
    } catch (error) {
      alert("Failed to fetch data")
      console.log("Failed to fetch data")
      setLoading(true)
    }
  }

  useEffect(() => {
    vendorFirmHandler()
  }, [])
  
  const handleScroll = (direction) =>{
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;

    if(direction === "left"){
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior : 'smooth'
      })
    }else if(direction === "right"){
      gallery.scrollTo({
        left : gallery.scrollLeft + scrollAmount,
        behavior : "smooth"
      })
    }
  }

  return (
    // <div className='px-4 sm:px-10 md:px-20 lg:px-60 py-10'>
    //   <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
    //     Order our best food options
    //   </h1>

    //   {/* Horizontal Scroll */}
    //   <div className="flex gap-6 overflow-x-auto scrollbar-hide py-2">
    //     {vendorData.vendor && vendorData.vendor.map((vendor) =>
    //       vendor.firm.map((item) => (
    //         <div
    //           key={item._id}
    //           className="min-w-[250px] bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    //         >
    //           {/* Image */}
    //           <div className="h-40 overflow-hidden">
    //             <img
    //               src={`${API_URI}/uploads/${item.image}`}
    //               alt={item.firmName}
    //               className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
    //             />
    //           </div>

    //           {/* Content */}
    //           <div className="p-4">
    //             <h2 className="text-lg font-semibold text-gray-900 mb-2">
    //               {item.firmName}
    //             </h2>

    //             <p className="text-sm text-gray-600">
    //               Area: <span className="font-medium">{item.area}</span>
    //             </p>

    //             <p className="text-sm text-gray-600 mt-1">
    //               Offer: <span className="font-medium text-green-600">{item.offer}</span>
    //             </p>
    //           </div>
    //         </div>
    //       ))
    //     )}
    //   </div>

    // </div>

    // ********************
    <div className='px-4 sm:px-10 md:px-20 lg:px-60 py-10 '>
 <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
    Order our best food options
  </h1>
      {/* Loader start*/}
      <div className='flex justify-center'>
     {loading &&  <Vortex
visible={true}
height="80"
width="80"
ariaLabel="vortex-loading"
wrapperStyle={{}}
wrapperClass="vortex-wrapper"
colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}

/>}
      </div>
      {/* Loader end */}
 

  <div className='text-end space-x-0.5'>
    <button className='bg-gray-300 p-1 rounded-full cursor-pointer' onClick={()=>handleScroll("left")}><MdOutlineKeyboardArrowLeft /></button>
    <button className='bg-gray-300 p-1 rounded-full cursor-pointer' onClick={()=>handleScroll("right")}><MdOutlineKeyboardArrowRight /></button>
  </div>

  {/* Horizontal Scroll */}
  <div className="flex gap-6 overflow-x-auto scrollbar-hide py-2" id='chainGallery'>

    {vendorData.vendor && vendorData.vendor.map((vendor) =>
      vendor.firm.map((item) => (
        <div
          key={item._id}
          className="min-w-[250px] h-40 relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
        >
          {/* Image */}
          <img
            src={`${API_URI}/uploads/${item.image}`}
            alt={item.firmName}
            className="w-full h-full object-cover"
          />

          {/* TEXT OVERLAY */}
          <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/100 to-transparent space-y-1">
            <h2 className="text-white font-semibold text-lg leading-tight flex space-x-0.5 items-center">
             <GrRestaurant className='text-green-500'/> <span>{item.firmName}</span>
            </h2>

            <p className="text-white text-sm flex items-center">
              <MdLocationPin className='size-5 text-blue-600'/> <span className="font-medium">{item.area}</span>
            </p>

            <p className="text-white text-sm flex items-center pl-1 space-x-0.5">
              <BiSolidOffer className='text-red-700 size-5'/> <span>{item.offer}</span>
            </p>
          </div>
        </div>
      ))
    )}

  </div>
</div>

  )
}

export default Chains
