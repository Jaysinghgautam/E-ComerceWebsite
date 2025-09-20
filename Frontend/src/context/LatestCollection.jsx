import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
import Title from "../components/Title";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProducts,setLatestProducts] = useState([]);

  useEffect (()=> {
    setLatestProducts(products.slice(0,10));
  },[]);

  return (
    <div className="my-10 ">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore,
          doloribus eius iusto sed delectus necessitatibus voluptate assumenda
          voluptas aperiam fugit sit nisi pariatur doloremque ullam vel
          explicabo veritatis molestias.
        </p>
      </div>
    </div>
  );
}

export default LatestCollection;
