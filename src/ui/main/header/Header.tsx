import React from "react";
import "../../../index.css";
import { CiSearch, CiShoppingCart, CiHome } from "react-icons/ci";
import {  } from "react-icons/ci";



function Header() {
  return (
    <div className="relative w-[100%] h-[160px] px-3 flex justify-center pt-10 items-center">/
      {/* first royal line  */}
      <div className="absolute top-8 royal-lines h-[3px] w-[97%] bg-gradient-to-b from-[#C2A378] via-[#D1BA97] to-[#000000] shadow-md"></div>
      <div className="w-full h-[20px] px-6 gap-1 flex justify-between">
        <div className="w-auto h-auto absolute top-10 flex left-10">
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
        </div>
        <div className="w-auto h-auto absolute top-10 right-10 flex">
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
          <img
            className="w-auto h-[10px] object-contain"
            src="/headers/header-royal.png"
            alt="image"
          />
        </div>
      </div>
      <div className="absolute top-[-.5rem] rounded-full bg-black z-10 w-20px h- flex justify-center items-center">
        <img
          src="/logo/Logo.png"
          className="object-contain"
          width={100}
          height={150}
          alt=""
        />
      </div>

      {/* second royal line  */}
      <div className="absolute top-[3.35rem] w-[98%] royal-lines h-[3px] bg-gradient-to-b from-[#C2A378] via-[#D1BA97] to-[#000000] shadow-md"></div>

      <div className="absolute bottom-0 h-full w-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full absolute bottom-0 py-10 flex justify-center items-center">
            <div className="flex flex-row h-full w-full justify-center items-end gap-3">
              <div className="flex justify-center items-end pb-3 w-[15%] h-[50px] bg-black">
                <a className="h-[30px] w-auto" href="">
                    <CiHome color="#C2A378" fontSize="1.5em"/>
                </a>
              </div>
              <div className="flex justify-center items-end gap-3 pb-3 w-[35%] h-[50px">
                <a className="text-base font-thin text-[14px]" href="">About Us</a>
                <a className="text-base font-thin text-[14px]" href="">Products</a>
                <a className="text-base font-thin text-[14px]" href="">Somthing</a>
                <a className="text-base font-thin text-[14px]" href="">Contact us</a>
              </div>
              <div className="flex justify-center items-end gap-3 pb-3 w-[30%] h-[50px]">
                <a className="text-base font-thin text-[14px]" href="">Accesories</a>
                <a className="text-base font-thin text-[14px]" href="">Support</a>
                <a className="text-base font-thin text-[14px]" href="">Contact us</a>
              </div>
              <div className="flex justify-center items-end gap-10 pb-3 w-[20%] h-[50px] ">
                <CiSearch color="#C2A378" fontSize="1.5em" />
                <CiShoppingCart color="#C2A378" fontSize="1.5em" />
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* third royal line  */}
        <div className="absolute bottom-10 w-[98%] royal-lines h-[3px] bg-gradient-to-b from-[#C2A378] via-[#D1BA97] to-[#000000] shadow-md"></div>

    </div>
  );
}

export default Header;
