import React, { useState } from 'react'
import { itemData } from '../data'

const ItemsDisplay = () => {
    const [displaydata, setDisplayData] = useState(itemData);
    // console.log(displaydata);
  return (
   <div className="px-4 sm:px-10 md:px-20 lg:px-60 py-10">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
    Order our best food options
  </h1>

  {/* FLEX + WRAP for Mobile */}
  <div className="flex justify-center">
    {displaydata.map((item, index) => (
      <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
        <img
          src={item.item_img}
          alt=""
          className="w-full h-auto rounded-xl object-cover"
        />
      </div>
    ))}
  </div>
</div>

    
  )
}

export default ItemsDisplay
