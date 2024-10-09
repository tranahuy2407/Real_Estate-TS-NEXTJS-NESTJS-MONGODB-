"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddressModal from './AddressModal';

const PostHome = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState<string>('');
    const [area, setArea] = useState<string>(''); 
    const [price, setPrice] = useState<string>(''); 
    const [priceUnit, setPriceUnit] = useState<'VNĐ' | 'Giá / m²' | 'Giá / tháng' | 'Giá / năm' | 'Thoả thuận'>('VNĐ');
    const [propertyType, setPropertyType] = useState<string>(''); 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    const handleOptionClick = (option: 'Bán' | 'Cho thuê') => {
        setSelectedOption(option);
        setPriceUnit(option === 'Bán' ? 'Giá / m²' : 'Giá / tháng');
    };

    const handleExitClick = () => {
        router.push('/');
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const priceUnitsForSale = ['VNĐ', 'Giá / m²', 'Thoả thuận'];
    const priceUnitsForRent = ['Giá / tháng', 'Giá / năm', 'Thoả thuận'];

    return (
        <div className="relative p-8">
            <div className="absolute top-4 right-8 flex space-x-4">
                <button className="text-gray-500">Xem trước</button>
                <button
                    onClick={handleExitClick}
                    className="text-black font-semibold border border-black px-4 py-2 rounded-lg"
                >
                    Thoát
                </button>
            </div>

            <h2 className="text-2xl font-bold mb-4">Tạo tin đăng</h2>

            <div className="mb-6">
                <span className="text-lg font-medium">Bước 1. Thông tin BĐS</span>
                <div className="h-1 bg-red-500 mt-2 w-1/3"></div>
            </div>

            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg mb-4">
                <div
                    onClick={() => handleOptionClick('Bán')}
                    className={`flex items-center justify-center w-40 h-12 border rounded-lg cursor-pointer ${selectedOption === 'Bán' ? 'bg-gray-300' : 'bg-white'}`}
                >
                    <span role="img" aria-label="tag" className="mr-2">🏷️</span>
                    <span>Bán</span>
                </div>

                <div
                    onClick={() => handleOptionClick('Cho thuê')}
                    className={`flex items-center justify-center w-40 h-12 border rounded-lg cursor-pointer ${selectedOption === 'Cho thuê' ? 'bg-gray-300' : 'bg-white'}`}
                >
                    <span role="img" aria-label="key" className="mr-2">🔑</span>
                    <span>Cho thuê</span>
                </div>
            </div>

            {selectedOption && (
                <div className="bg-gray-100 p-4 rounded-lg">
                    <label className="block text-black font-medium mb-2">Địa chỉ BĐS</label>
                    <div className="flex items-center border rounded-lg p-2 mb-4">
                        <span className="mr-2 text-gray-500">🔍</span>
                        <input
                            type="text"
                            placeholder="Nhập địa chỉ"
                            className="w-full p-2 outline-none bg-transparent cursor-pointer"
                            value={address}
                            onClick={() => setIsModalOpen(true)}
                            readOnly
                        />
                    </div>

                    <label className="block text-black font-medium mb-2">Loại BĐS</label>
                    <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full p-2 border rounded-lg mb-4"
                    >
                        <option value="">Chọn loại BĐS</option>
                        <option value="Căn hộ">Căn hộ</option>
                        <option value="Nhà phố">Nhà phố</option>
                        <option value="Biệt thự">Biệt thự</option>
                        <option value="Đất nền">Đất nền</option>
                        {/* Thêm các loại BĐS khác nếu cần */}
                    </select>

                    <label className="block text-black font-medium mb-2">Diện tích (m²)</label>
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            placeholder="Nhập diện tích"
                            className="w-2/3 p-2 border rounded-lg mr-2"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        />
                        <span className="text-gray-500">m²</span>
                    </div>

                    <label className="block text-black font-medium mb-2">Mức giá</label>
                    <div className="flex items-center mb-4">
                        <input
                            type="text"
                            placeholder="Nhập mức giá"
                            className="w-2/3 p-2 border rounded-lg mr-2"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <div className="relative w-1/3">
                            <div className="border rounded-lg cursor-pointer" onClick={toggleDropdown}>
                                <div className="flex justify-between p-2">
                                    <span>{priceUnit}</span>
                                    <span className="text-gray-500">▼</span>
                                </div>
                            </div>
                            {isDropdownOpen && (
                                <div className="absolute left-0 right-0 bg-white border rounded-lg mt-1 z-10">
                                    {(selectedOption === 'Bán' ? priceUnitsForSale : priceUnitsForRent).map(unit => (
                                        <label key={unit} className="flex items-center p-2">
                                            <input
                                                type="radio"
                                                value={unit}
                                                checked={priceUnit === unit}
                                                onChange={() => setPriceUnit(unit as any)}
                                                className="mr-2"
                                            />
                                            <span>{unit}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                        <span className="text-gray-500 ml-2">VNĐ</span>
                    </div>
                </div>
            )}
            {isModalOpen &&
                <AddressModal
                    onClose={() => setIsModalOpen(false)}
                    onAddressSelect={setAddress}
                />
            }
        </div>
    );
};

export default PostHome;
