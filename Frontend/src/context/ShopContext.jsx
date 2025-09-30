import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
     toast.error("please select product size");
     return;
    }
    // addToCart logic
    let cartData = structuredClone(cartItems); // ✅ fine to use

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {}; // ✅ make sure object is created
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData); // ✅ update state
  };

//   useEffect(() => {
//     console.log(cartItems);
//   }, [cartItems]);


const getcartcount = () => {
    let totalCount = 0; 
    for(const itemId in cartItems) {
        for(const item in cartItems[itemId]) {
           try {
             if(cartItems[itemId][item] > 0) {
                totalCount += cartItems[itemId][item];
            }
           } catch (error) {
            
           }
        }
        return totalCount;
    }
}

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getcartcount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
