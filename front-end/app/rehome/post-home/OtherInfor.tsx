'use client';
import React, { useState } from 'react';

type Props = {};

const OtherInfor: React.FC<Props> = (props: Props) => {
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  const handleIncrease = (setter: React.Dispatch<React.SetStateAction<number>>) => {
    setter((prev) => prev + 1);
  };

  const handleDecrease = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    if (value > 0) {
      setter((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h2 className="text-lg font-bold mb-4">Thông tin khác (không bắt buộc)</h2>

      <div className="mb-4">
        <label className="block text-black font-medium mb-2">Giấy tờ pháp lý</label>
        <select className="w-full p-2 border rounded-lg">
          <option>Chọn giấy tờ pháp lý</option>
          {/* Thêm các tùy chọn khác nếu cần */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black font-medium mb-2">Nội thất</label>
        <select className="w-full p-2 border rounded-lg">
          <option>Chọn nội thất</option>
          {/* Thêm các tùy chọn khác nếu cần */}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-black font-medium mb-2">Số phòng ngủ</label>
        <div className="flex items-center border rounded-lg p-2">
          <button onClick={() => handleDecrease(setBedrooms, bedrooms)} className="bg-gray-300 p-2 rounded-l-lg">-</button>
          <span className="flex-1 text-center">{bedrooms}</span>
          <button onClick={() => handleIncrease(setBedrooms)} className="bg-gray-300 p-2 rounded-r-lg">+</button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-black font-medium mb-2">Số phòng tắm, vệ sinh</label>
        <div className="flex items-center border rounded-lg p-2">
          <button onClick={() => handleDecrease(setBathrooms, bathrooms)} className="bg-gray-300 p-2 rounded-l-lg">-</button>
          <span className="flex-1 text-center">{bathrooms}</span>
          <button onClick={() => handleIncrease(setBathrooms)} className="bg-gray-300 p-2 rounded-r-lg">+</button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-black font-medium mb-2">Hướng nhà</label>
        <select className="w-full p-2 border rounded-lg">
          <option>Chọn hướng nhà</option>
          {/* Thêm các tùy chọn khác nếu cần */}
        </select>
      </div>

      <div>
        <label className="block text-black font-medium mb-2">Hướng ban công</label>
        <select className="w-full p-2 border rounded-lg">
          <option>Chọn hướng ban công</option>
          {/* Thêm các tùy chọn khác nếu cần */}
        </select>
      </div>
    </div>
  );
};

export default OtherInfor;
