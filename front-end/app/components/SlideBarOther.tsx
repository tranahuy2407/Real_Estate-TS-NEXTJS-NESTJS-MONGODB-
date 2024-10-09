"use client";
import React, { useState } from "react";
import { IoIosHome } from "react-icons/io"; 

type Props = {};

const SideBarOther = (props: Props) => {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen);
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-white shadow-md p-4">
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-gray-200 h-12 w-12 flex items-center justify-center">
          <span className="text-xl font-bold">H</span>
        </div>
        <div className="ml-3">
          <p className="text-lg font-semibold">Trần A Huy</p>
          <p className="text-gray-500 text-sm">0 điểm</p>
        </div>
      </div>
      <button className="flex items-center justify-center w-full py-2 mb-4 border border-gray-300 rounded-md hover:bg-gray-100">
        <IoIosHome className="mr-2 text-xl" />
        <span className="text-sm">Chuyển về trang chủ</span>
      </button>
      <div className="bg-gray-100 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm font-semibold">Số dư tài khoản</span>
          <button onClick={toggleAccountDropdown} className="text-lg">
            ...
          </button>
        </div>

        {isAccountDropdownOpen && (
          <div className="mt-3">
            <p className="text-sm">TK tin đăng: 0</p>
            <p className="text-sm">TK khuyến mãi: 0</p>
            <div className="mt-3 bg-white p-3 rounded-md shadow-sm">
              <p className="text-sm text-gray-600">Mã chuyển khoản</p>
              <p className="text-md font-bold mt-1">BDS36731032</p>
              <button className="mt-2 w-full text-sm bg-gray-200 py-1 rounded-md">
                Sao chép
              </button>
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white text-sm py-2 rounded-md">
              Nạp Tiền
            </button>
          </div>
        )}
      </div>
      <ul className="list-none p-0">
        <li className="py-2 text-sm">Quản lý tin đăng</li>
        <li className="py-2 text-sm flex justify-between items-center">
          Quản lý khách hàng
          <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md">Mới</span>
        </li>
        <li className="py-2 text-sm flex justify-between items-center">
          Gói Hội viên
          <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-md">
            Tiết kiệm đến 30%
          </span>
        </li>
        <li className="py-2 text-sm">Tài khoản Pro</li>
        <li className="py-2 text-sm">Quản lý tài chính</li>
        <li className="py-2 text-sm">Quản lý TK Doanh nghiệp</li>
      </ul>
    </div>
  );
};

export default SideBarOther;
