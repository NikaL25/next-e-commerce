'use client'
import { set } from "mongoose";
import Image from "next/image"
import { useState } from "react"
type Props ={
    product: Product;
    fill? : boolean
}
const ProductImage = ({product, fill}: Props) => {
    const [loading, setLoading] = useState(true)
  return (
    <>
    {fill? (
        <Image
         src={product.image}
          alt={product.title} 
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            loading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
         }`}
         onLoadingComplete={() => setLoading(false)}
          fill />
    ) : (
        <Image
        src={product.image}
         alt={product.title} 
         className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
           loading
           ? 'scale-110 blur-2xl grayscale'
           : 'scale-100 blur-0 grayscale-0'
        }`}
        onLoadingComplete={() => setLoading(false)}
         width={400}
         height={1000} />
    )
    }
    </>
  )
}

export default ProductImage