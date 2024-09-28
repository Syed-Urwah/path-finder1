
import ProductCreateForm from '@/components/ProductCreateForm'
// import React, { useEffect, useState } from 'react'
// import { usePathname,useRouter } from 'next/navigation';




export async function generateStaticParams() {

  const response = await fetch(process.env.NEXT_PUBLIC_BE_URL + '/api/v1/product').then((res) => res.json());

  const products = response.data;

  // console.log('Response:', response.data);


  return products.map((product: any) => ({
    product_id: product.id.toString(),
  }))
}

async function getProduct(params: any) {

  try {
    // setLoading(true)

    const response = await fetch(process.env.NEXT_PUBLIC_BE_URL + `/api/v1/product/getByid/${params.product_id}`).then((res) => res.json());



    console.log('Response:', response.data);
    // alert(response)
    return response.data
    // setProduct(response.data.data)
  } catch (error) {
    console.error('Error posting data:', error);
  }
  // setLoading(false)
};


export default async function page({ params }: any) {

  // const router: any = useRouter();
  // const pathname: any = usePathname()
  // console.log(pathname.split('/'))

  // const product_id  = pathname.split('/')[4]; // Access dynamic route parameter
  const product_id = params.product_id

  

  // const [product, setProduct] = useState({})
  // const [loading, setLoading] = useState(true);

  let product = await getProduct(params)

  console.log("params////////////////")
  console.log(product)

  const fetchProducts = async () => {

    try {
      // setLoading(true)

      const response = await fetch(process.env.NEXT_PUBLIC_BE_URL + `/api/v1/product/getByid/${product_id}`).then((res) => res.json());



      console.log('Response:', response.data);
      product = response.data.data
      alert(response)
      // setProduct(response.data.data)
    } catch (error) {
      console.error('Error posting data:', error);
    }
    // setLoading(false)
  };

  // fetchProducts

  // useEffect(()=>{
  //   fetchProducts()
  // },[])

  return (
    <>

      <ProductCreateForm product={product} />

    </>
  )
}
