import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="my-10 mt-40 text-gray-700">
      {/* Grid Section */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
        {/* Logo + About */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            voluptas laborum optio nobis quasi soluta vero delectus eos odit
            quae? Possimus rem at accusamus! Quibusdam magnam aliquam quam
            voluptatum voluptate.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-232-532-432</li>
            <li>gjaysingh05gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10">
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @ jaysingh.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
