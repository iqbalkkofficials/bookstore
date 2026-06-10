import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaArrowRight, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="md:grid grid-cols-3 md:gap-10 bg-black text-white p-10">
      <div>
        <h4 className="font-bold">ABOUT US</h4>
        <p className="text-justify mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorem veniam deserunt quisquam eius ad hic maxime dicta ipsum nemo itaque necessitatibus quas nobis, illum voluptate, pariatur recusandae alias harum!
        </p>
      </div>
      <div className="flex flex-col md:mt-0 mt-5">
        <h4>NEWS LETTER</h4>
        <p className="my-5">Stay updated with our latest trends</p>
        <div className="flex">
            <input type="text" placeholder="E Mail" className="border p-2 bg-white text-black" />
            <button className="p-2 bg-yellow-500"><FaArrowRight/></button>
        </div>
      </div>
       <div className="flex flex-col md:mt-0 mt-5">
            <h4 className="font-bold">FOLLOW US</h4>
            <p className="my-5">Let us be social</p>
            <div className="flex">
            <FaInstagram/>
            <FaTwitter className='mx-4'/> 
            <FaFacebook/>
            <FaLinkedin className="ml-4"/>
        </div>
        </div>
    </div>
  );
}

export default Footer;
