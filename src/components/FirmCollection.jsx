import React, { useEffect, useState } from 'react'
import { API_URI } from '../api'
import { GrRestaurant } from "react-icons/gr";
import { BiSolidOffer } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';

const FirmCollection = () => {
    const [firmData, setFirmData] = useState([])

    const firmHandler = async() =>{
        try {
            const response = await fetch(`${API_URI}/vendor/all-vendors`);
            const newFirmData =await response.json();
            setFirmData(newFirmData);
            // console.log("firm data",newFirmData);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        firmHandler()
    },[])

  return (
//     <div className="px-4 sm:px-10 md:px-20 lg:px-60 py-10">
//   <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
//     Order our best food options
//   </h1>

//   <div className="flex flex-wrap gap-6 justify-center">
//     {firmData.vendor &&
//       firmData.vendor.map((vendor) =>
//         vendor.firm.map((item) => (
//           <div
//             key={item._id}
//             className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] flex flex-col items-center"
//           >
//             {/* Firm Name */}
//             <div className="text-lg font-semibold mb-2 text-center">
//               {item.firmName}
//             </div>

//             {/* Image */}
//             <div className="w-full h-40 sm:h-48 md:h-52 lg:h-56 overflow-hidden rounded-lg">
//               <img
//                 src={`${API_URI}/uploads/${item.image}`}
//                 alt={item.firmName}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         ))
//       )}
//   </div>
// </div>
// ************************
<div className='px-4 sm:px-10 md:px-20 lg:px-60 py-10'>
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
    Order our best food options
  </h1>

  {/* Responsive Wrap - 4 per row on desktop */}
  <div className="flex flex-wrap gap-6 justify-center">

    {firmData.vendor && firmData.vendor.map((vendor) =>
      vendor.firm.map((item) => (
        
          <Link to={`/products/${item._id}`}
          key={item._id}
          className="w-full sm:w-[48%] lg:w-[23%] bg-white rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
        >

          {/* Image with OFFER badge */}
          <div className="relative">
            <img
              src={`${API_URI}/uploads/${item.image}`}
              alt={item.firmName}
              className="w-full h-40 object-cover"
            />

            {/* OFFER badge on image */}
            {item.offer && (
              <span className="absolute top-2 left-2 bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded-lg shadow-md flex items-center space-x-0.5">
               <BiSolidOffer className='text-red-700 size-4'/> <span>{item.offer}</span>
              </span>
            )}
          </div>

          {/* Text */}
          <div className="p-3">
            {/* <p>{item._id}</p> */}
            <h2 className="text-lg font-semibold text-gray-800 flex items-center space-x-1">
             <GrRestaurant className='text-green-500'/> <span>{item.firmName}</span>
            </h2>

            <p className="text-gray-600 text-sm flex items-center space-x-1"><MdLocationPin className='size-5 text-blue-600'/> <span>{item.area}</span></p>
          </div>
        </Link>
        
      ))
    )}

  </div>
</div>




  )
}

export default FirmCollection
