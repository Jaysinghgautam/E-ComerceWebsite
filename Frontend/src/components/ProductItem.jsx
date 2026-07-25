// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { Link } from 'react-router-dom'
// const ProductItem = ({id,image,name,price}) => {
//     const {currency}  = useContext(ShopContext)


//   return (
//     <div>
//        <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer' >
//        <div className="overflow-hidden">
//         <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
//        </div>
//          <p className='pt-3 pb-1 text-sm'>{name}</p>
//          <p className='text-sm font-medium' >{currency}{price}</p>
//        </Link>

//     </div>
//   )
// }

// export default ProductItem

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image = [], name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <div>
      <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out duration-300 w-full"
            src={image?.length > 0 ? image[0] : "/no-image.png"}
            alt={name}
          />
        </div>

        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
      </Link>
    </div>
  );
};

export default ProductItem;