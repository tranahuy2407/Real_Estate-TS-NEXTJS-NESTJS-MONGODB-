'use client';

import React from 'react';
import { useAuth } from '../../context/AuthContext'; 
import { CiHeart, CiEdit } from "react-icons/ci"; 
import { IoMdNotificationsOutline } from "react-icons/io";

const Profile = () => {
  const { user, logout } = useAuth(); 

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-lg shadow-md p-6"> 
      <div className="flex flex-col items-center">
        {user?.avatar ? ( 
          <img
            src={user.avatar} 
            alt="Profile Picture"
            className="w-24 h-24 rounded-full mb-4"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 flex items-center justify-center">
            <span className="text-white">No Image</span>
          </div>
        )}
        <h2 className="text-xl font-semibold">{user?.name || 'Tên Người Dùng'}</h2>
        <p className="text-gray-500">{user?.email || 'email@example.com'}</p>
        <button className="flex items-center mt-4 text-blue-500 hover:underline">
          <CiEdit className="w-6 h-6 mr-1" /> 
          <span className="text-sm">Chỉnh sửa hồ sơ</span>
        </button>
        <button
          className="text-red-500 hover:underline mt-4"
          onClick={logout} 
        >
          Đăng xuất
        </button>
      </div>

      <div className="flex justify-around mt-6">
        <div className="flex flex-col items-center">
          <CiHeart className="w-8 h-8 text-red-500" />
          <span className="text-sm">Quan tâm</span>
        </div>
        <div className="flex flex-col items-center">
          <IoMdNotificationsOutline className="w-8 h-8 text-blue-500" />
          <span className="text-sm">Thông báo</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Các đường dẫn</h3>
        <ul className="mt-2 space-y-2">
          <li>
            <a href="/chat" className="text-blue-500 hover:underline">
              Cuộc trò chuyện
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
