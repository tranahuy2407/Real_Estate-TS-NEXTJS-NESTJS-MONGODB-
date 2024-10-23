"use client";
import React from 'react';

interface AITitleDescriptionProps {
  remainingUses: number;
  onClose: () => void;
}

const AITitleDescription: React.FC<AITitleDescriptionProps> = ({ remainingUses, onClose }) => {
  const handleToneSelection = (tone: string) => {
    console.log(`Generating with tone: ${tone}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-bold mb-4 text-center">Tạo với AI</h3>
        <p className="mb-4 text-center">
          Chọn một giọng điệu bên dưới, sau đó hệ thống sẽ tự động tạo nội dung Tiêu đề và Mô tả tương ứng
        </p>
        <p className="mb-2 text-center">Bạn còn {remainingUses} lượt sử dụng</p>

        <div className="flex flex-col space-y-4 mb-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="tone"
              value="Lịch sự"
              className="mr-2"
              onClick={() => handleToneSelection('Lịch sự')}
            />
            <i className="fas fa-grin-beam text-green-500 mr-2"></i>
            <span className="text-gray-700">Lịch sự</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="tone"
              value="Trẻ trung"
              className="mr-2"
              onClick={() => handleToneSelection('Trẻ trung')}
            />
            <i className="fas fa-smile text-yellow-500 mr-2"></i>
            <span className="text-gray-700">Trẻ trung</span>
          </label>
        </div>

        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition w-full"
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

export default AITitleDescription;
