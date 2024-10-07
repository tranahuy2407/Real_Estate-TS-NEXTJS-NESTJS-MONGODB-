'use client';

import React, { useState, useEffect } from 'react';

const Carousel_Fillter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<'nhaban' | 'nhathue'>('nhaban'); 

  const slides = ['/assets/background1.jpg', '/assets/background2.jpg', '/assets/background3.jpg'];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[400px]">
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md max-w-xl w-full mx-auto">
          <div className="flex justify-around items-center mb-3 text-sm md:text-lg">
            {/* Titles for "Nhà bán" and "Nhà cho thuê" */}
            <h2 
              className={`font-semibold cursor-pointer ${selectedFilter === 'nhaban' ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => setSelectedFilter('nhaban')}
            >
              Nhà bán
            </h2>
            <h2 
              className={`font-semibold cursor-pointer ${selectedFilter === 'nhathue' ? 'text-blue-600' : 'text-gray-600'}`}
              onClick={() => setSelectedFilter('nhathue')}
            >
              Nhà cho thuê
            </h2>
          </div>

          {/* Filters based on selected option */}
          {selectedFilter === 'nhaban' && (
            <div>
              <div className="mb-3">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg outline-none text-sm"
                  placeholder="Tìm kiếm nhà bán..."
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Loại nhà đất</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Chọn loại nhà đất</option>
                    <option value="nhà">Nhà</option>
                    <option value="đất">Đất</option>
                    <option value="căn hộ">Căn hộ</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Mức giá</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Chọn mức giá</option>
                    <option value="dưới 1 tỷ">Dưới 1 tỷ</option>
                    <option value="1 - 3 tỷ">1 - 3 tỷ</option>
                    <option value="3 - 5 tỷ">3 - 5 tỷ</option>
                    <option value="trên 5 tỷ">Trên 5 tỷ</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Diện tích</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Chọn diện tích</option>
                    <option value="dưới 50m²">Dưới 50m²</option>
                    <option value="50 - 100m²">50 - 100m²</option>
                    <option value="100 - 200m²">100 - 200m²</option>
                    <option value="trên 200m²">Trên 200m²</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {selectedFilter === 'nhathue' && (
            <div>
              <div className="mb-3">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg outline-none text-sm"
                  placeholder="Tìm kiếm nhà cho thuê..."
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Loại nhà đất</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Chọn loại nhà đất</option>
                    <option value="nhà">Nhà</option>
                    <option value="đất">Đất</option>
                    <option value="căn hộ">Căn hộ</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Mức giá</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Chọn mức giá</option>
                    <option value="dưới 1 triệu">Dưới 1 triệu</option>
                    <option value="1 - 3 triệu">1 - 3 triệu</option>
                    <option value="3 - 5 triệu">3 - 5 triệu</option>
                    <option value="trên 5 triệu">Trên 5 triệu</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 font-medium text-gray-700">Diện tích</label>
                  <select className="w-full p-2 border border-gray-300 rounded-lg">
                    <option value="">Chọn diện tích</option>
                    <option value="dưới 50m²">Dưới 50m²</option>
                    <option value="50 - 100m²">50 - 100m²</option>
                    <option value="100 - 200m²">100 - 200m²</option>
                    <option value="trên 200m²">Trên 200m²</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel_Fillter;
