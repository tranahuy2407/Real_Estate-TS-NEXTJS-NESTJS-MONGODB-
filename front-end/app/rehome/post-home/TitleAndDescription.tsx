import React, { useState } from 'react';
import AITitleDescription from './ai/AITitleDescription'; // Import bảng tạo với AI

interface TitleAndDescriptionProps {
  title: string;
  description: string;
  remainingUses: number;
}

const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({ title, description, remainingUses }) => {
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [titleCharCount, setTitleCharCount] = useState(title.length);
  const [descriptionCharCount, setDescriptionCharCount] = useState(description.length);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAIClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      {/* Tiêu đề và Mô tả */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Tiêu đề & Mô tả</h2>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-gray-600 font-semibold">Tạo nhanh với AI</p>
            <p className="text-gray-500">Bạn còn {remainingUses} lượt sử dụng</p>
          </div>
          {/* Nút Tạo nhanh với AI */}
          <button
            onClick={handleAIClick}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Tạo nhanh với AI
          </button>
        </div>
      </div>

      {/* Tiêu đề */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Tiêu đề</label>
        <input
          type="text"
          value={titleValue}
          onChange={(e) => {
            setTitleValue(e.target.value);
            setTitleCharCount(e.target.value.length);
          }}
          className="border p-2 w-full rounded-lg"
          maxLength={99}
        />
        <p className="text-gray-500 text-sm">{titleCharCount}/99</p>
      </div>

      {/* Mô tả */}
      <div className="mb-6">
        <label className="block font-semibold mb-2">Mô tả</label>
        <textarea
          value={descriptionValue}
          onChange={(e) => {
            setDescriptionValue(e.target.value);
            setDescriptionCharCount(e.target.value.length);
          }}
          className="border p-2 w-full rounded-lg h-32"
          maxLength={3000}
        />
        <p className="text-gray-500 text-sm">{descriptionCharCount}/3000</p>
      </div>

      <p className="text-red-500 text-sm mt-2">
        Kết quả do AI tạo ra có thể không chính xác.
      </p>

      {/* Modal cho Tạo nhanh với AI */}
      {isModalOpen && <AITitleDescription remainingUses={remainingUses} onClose={handleModalClose} />}
    </div>
  );
};

export default TitleAndDescription;
