import React from 'react';
import "./Product.css";
// import { useStateValue } from './StateProvider';
function Product({description,title,img,btn}) {
  
  return <div className='product'>
      <div className='product__info'>
          <p><strong>{title}</strong></p>
          
      </div>
      <img src={img} className='image'></img>
      <p><strong>{description}</strong></p>

      <button className="btn" ><strong>{btn}</strong></button>
      </div>
  // </div>;
  
}
export default Product;
// export  default dispatch;