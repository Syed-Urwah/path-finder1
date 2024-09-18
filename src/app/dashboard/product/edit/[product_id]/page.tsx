"use client"

import ProductCreateForm from '@/components/ProductCreateForm'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { usePathname,useRouter } from 'next/navigation';


export const dynamic = "force-dynamic";


export default function page() {

  const router: any = useRouter();
  const pathname: any = usePathname()
  console.log(pathname.split('/'))
  
  const product_id  = pathname.split('/')[4]; // Access dynamic route parameter

    console.log("params////////////////")

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {

        try {
            setLoading(true)
    
          const response = await axios.get(process.env.NEXT_PUBLIC_BE_URL + `/api/v1/product/getByid/${product_id}`);
    
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
