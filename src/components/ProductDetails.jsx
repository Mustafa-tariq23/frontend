import React from 'react'

const ProductDetails = ({product}) => {
  const {src, alt, heading, para, detail, price} = product;
  return (
    <>
      <div>
      <img src={src} alt={alt} />
      <h2>{heading}</h2>
      <p>{para}</p>
      <p>{detail}</p>
      <p>Price: {price}</p>

      <button onClick={() => window.location.href = '/order-form'}>Buy Now</button>
    </div>
    </>
  )
}

export default ProductDetails