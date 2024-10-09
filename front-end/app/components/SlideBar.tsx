"use client";

import React, { useState } from "react";
import { IoIosStats, IoIosAddCircleOutline, IoIosPeople, IoIosMore } from "react-icons/io";
import { BsFileText } from "react-icons/bs";
import SideBarOther from "./SlideBarOther"; // Adjust the import path as necessary

const SideBar = () => {
  // State to track the visibility of the "Khác" form
  const [isOtherFormOpen, setIsOtherFormOpen] = useState(false);

  // Function to toggle the form visibility
  const toggleOtherForm = () => {
    setIsOtherFormOpen(prevState => !prevState); // Toggle the state
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="flex flex-col items-center w-20 bg-white h-screen py-4 shadow-lg">
        {/* Logo */}
        <div className="mb-8">
          <img src="/assets/Logo.JPG" alt="Logo" className="w-12 h-12" />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center space-y-8">
          {/* Tổng quan */}
          <div className="flex flex-col items-center">
            <IoIosStats className="text-3xl" />
            <span className="text-xs mt-1">Tổng quan</span>
          </div>

          {/* Tin đăng */}
          <div className="flex flex-col items-center">
            <BsFileText className="text-3xl" />
            <span className="text-xs mt-1">Tin đăng</span>
          </div>

          {/* Đăng tin */}
          <div className="flex flex-col items-center">
            <IoIosAddCircleOutline className="text-3xl" />
            <span className="text-xs mt-1">Đăng tin</span>
          </div>

          {/* Khách hàng */}
          <div className="flex flex-col items-center">
            <IoIosPeople className="text-3xl" />
            <span className="text-xs mt-1">Khách hàng</span>
          </div>

          {/* Khác */}
          <div className="flex flex-col items-center">
            <button onClick={toggleOtherForm}>
              <IoIosMore className="text-3xl" />
              <span className="text-xs mt-1">Khác</span>
            </button>
          </div>
        </div>

        {/* Profile at the bottom */}
        <div className="mt-auto mb-4">
          <div className="flex flex-col items-center">
            <button className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-lg">H</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Other */}
      <div className={`transition-transform duration-300 ease-in-out ${isOtherFormOpen ? 'translate-x-0' : 'hidden'} w-64 bg-gray-50 h-screen shadow-md`}>
        <SideBarOther />
      </div>
    </div>
  );
};

export default SideBar;
