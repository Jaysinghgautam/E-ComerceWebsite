import React, { useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";
import { backendUrl } from "../App";

function Add({ token }) {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const sizeOptions = ["S", "M", "L", "XL", "XXL"];

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((item) => item !== size)
        : [...prev, size],
    );
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        {
          headers: {
            token,
          },
        },
      );

      console.log(response.data);

      if (response.data.success) {
        alert("Product Added Successfully");

        setName("");
        setDescription("");
        setPrice("");
        setCategory("Men");
        setSubCategory("Topwear");
        setBestseller(false);
        setSizes([]);

        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-4"
    >
      {/* Upload Images */}
      <div>
        <p className="mb-2 font-medium">Upload Images</p>

        <div className="flex gap-3">
          {[1, 2, 3, 4].map((num) => {
            const image =
              num === 1
                ? image1
                : num === 2
                  ? image2
                  : num === 3
                    ? image3
                    : image4;

            const setImage =
              num === 1
                ? setImage1
                : num === 2
                  ? setImage2
                  : num === 3
                    ? setImage3
                    : setImage4;

            return (
              <label key={num} htmlFor={`image${num}`}>
                <img
                  className="w-20 h-20 object-cover border rounded cursor-pointer"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />

                <input
                  type="file"
                  id={`image${num}`}
                  hidden
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            );
          })}
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2">Product Name</p>

        <input
          className="w-full max-w-[500px] border px-3 py-2 rounded"
          type="text"
          placeholder="Type here"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Description */}
      <div className="w-full">
        <p className="mb-2">Product Description</p>

        <textarea
          className="w-full max-w-[500px] border px-3 py-2 rounded"
          rows="4"
          placeholder="Write description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      {/* Category */}
      <div className="flex flex-wrap gap-4">
        <div>
          <p className="mb-2">Category</p>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Sub Category</p>

          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Price</p>

          <input
            type="number"
            className="border px-3 py-2 rounded"
            placeholder="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="mb-2">Product Sizes</p>

        <div className="flex gap-2">
          {sizeOptions.map((size) => (
            <div
              key={size}
              onClick={() => toggleSize(size)}
              className={`cursor-pointer rounded px-4 py-2 transition ${
                sizes.includes(size) ? "bg-pink-200" : "bg-slate-200"
              }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex items-center gap-2">
        <input
          id="bestseller"
          type="checkbox"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
        />

        <label htmlFor="bestseller" className="cursor-pointer">
          Add to Bestseller
        </label>
      </div>

      <button
        type="submit"
        className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800"
      >
        ADD PRODUCT
      </button>
    </form>
  );
}

export default Add;
