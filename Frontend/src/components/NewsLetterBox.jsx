import React from "react";

function NewsLetterBox() {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        ab quod nihil odio blanditiis, fugit, dignissimos laudantium quaerat
        eaque, reiciendis perspiciatis! Ut, illo tempore? Voluptates,
        temporibus. Eius incidunt culpa ea.
      </p>
      <form onSubmit={onSubmitHandler} action="" className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 ">
        <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter you email" required />
        <button type="submit" className="bg-black text-white text-xs py-4">SUBSCRIBE</button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
