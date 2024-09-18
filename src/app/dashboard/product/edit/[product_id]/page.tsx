"use client"

import ProductCreateForm from '@/components/ProductCreateForm'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page({ params }: any) {

    console.log("params////////////////")
    console.log(params)

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {

        try {
            setLoading(true)
    
          const response = await axios.get(process.env.BE_URL + `/api/v1/product/getByid/${params.product_id}`);
    
          console.log('Response:', response.data);
          setProduct(response.data.data)
        } catch (error) {
          console.error('Error posting data:', error);
        }
        setLoading(false)
      };

      useEffect(()=>{
        fetchProducts()
      },[])

  return (
    <>
    {loading ? 'loading...' : 
        <ProductCreateForm product={product}/>
    }
    </>
  )
}
