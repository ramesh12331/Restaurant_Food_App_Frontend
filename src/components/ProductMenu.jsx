import React, { useEffect, useState } from 'react'
import { API_URI } from '../api'
import { useParams } from 'react-router-dom'

const ProductMenu = () => {
    const [products, setProducts] = useState([])
    const [productData, setProductData] = useState({});

    const {firmId} = useParams();
    console.log(firmId)

    const productHandler = async () =>{
        try {
            const response = await fetch(`${API_URI}/product/${firmId}/products`)
            const newProductData = await response.json();
            setProducts(newProductData.products || [])
            setProductData(newProductData)
            console.log(newProductData)
        } catch (error) {
            console.error("Product Failed to Fetch", error);
        }
    }

    useEffect(()=>{
        productHandler()
    },[])
  return (
    <div className='px-4 sm:px-10 md:px-20 lg:px-100 py-10'>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center bg-amber-900 pt-1 pb-1 rounded-2xl text-amber-100">
            {productData?.restaurantName}
        </h1>
      {products.map((item)=>(
        <div className='flex justify-between items-center  mb-4 rounded-2xl shadow-2xl px-10 py-4 '>
            <div>
                <p className='text-xl text-green-600 font-extrabold'>{item.productName}</p>
                <p className='text-lg font-semibold'>₹ {item.price}</p>
                <p className='text-gray-500'>{item.description}</p>
            </div>
            <div className='text-center'>
                 <img src={`${API_URI}/uploads/${item.image}`} alt={item.firmName} className="w-24 h-24 rounded-2xl"/>
                 <p className='btn btn-sm text-white btn-success -mt-4'>Add</p>
            </div>
        </div>
      ))}
    </div>
  )
}

export default ProductMenu
