import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}

      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2 ">
          FILTER
        </p>
        {/* Categoty filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 flex-col gap-2 text-sm font-light text-gray-700 ">
            CATEGORY
          </p>
          <p className="flex gap-2 ">
            <input type="checkbox" className="w-3" value={"Men"} />
            Men
          </p>
          <p className="flex gap-2 ">
            <input type="checkbox" className="w-3" value={"Women"} />
            Women
          </p>
          <p className="flex gap-2 ">
            <input type="checkbox" className="w-3" value={"Kids"} /> kids
          </p>
        </div>
        {/* sub Categoty */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 flex-col gap-2 text-sm font-light text-gray-700 ">
            TYPE
          </p>
          <p className="flex gap-2 ">
            <input type="checkbox" className="w-3" value={"TopWear"} />
            Topwear
          </p>
          <p className="flex gap-2 ">
            <input type="checkbox" className="w-3" value={"Bottomwear"} />
            Bottomwear
          </p>
          <p className="flex gap-2 ">
            <input type="checkbox" className="w-3" value={"Winterwear"} />{" "}
            WinterWear
          </p>
        </div>
      </div>
    </div>
  );
}

export default Collection;
