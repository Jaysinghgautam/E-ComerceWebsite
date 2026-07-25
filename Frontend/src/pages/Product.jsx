 import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import assets from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    // ✅ Error Fix: Check if products are loaded
    if (!products || products.length === 0) return;

    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);

      // ✅ Error Fix: Check image exists before accessing image[0]
      if (product.image && product.image.length > 0) {
        setImage(product.image[0]);
      } else {
        setImage("");
      }
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {/* ✅ Error Fix: Safe map */}
            {productData?.image?.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p className="pl-2">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>

            <div className="flex gap-2">
              {/* ✅ Error Fix: Safe map */}
              {productData?.sizes?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <div className="border px-5 py-3 text-sm">Reviews (122)</div>
        </div>

        <div className="flex flex-col gap-2 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            voluptatem dolorem hic inventore modi, molestiae ad iure expedita
            voluptate ducimus vero, exercitationem velit laboriosam soluta
            consectetur eum sequi.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            vero laudantium fugit ad reiciendis ut enim dolorum impedit laborum
            voluptate aliquam numquam possimus quis exercitationem tenetur.
          </p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subcategory={productData.subcategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
