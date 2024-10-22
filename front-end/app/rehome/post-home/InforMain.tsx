"use client";
import React, { useState } from 'react';
import AddressModal from './AddressModal';

type PriceUnit = 'VNĐ' | 'Giá / m²' | 'Giá / tháng' | 'Giá / năm' | 'Thoả thuận';

type Props = {
    address: string;
    area: string;
    price: string;
    priceUnit: PriceUnit;
    setArea: (value: string) => void;
    setPrice: (value: string) => void;
    setPriceUnit: (value: PriceUnit) => void; 
    setAddress: (value: string) => void;
    selectedOption: 'Bán' | 'Cho thuê';
};

const InforMain = ({
    address,
    area,
    price,
    priceUnit,
    setArea,
    setPrice,
    setPriceUnit,
    selectedOption,
    setAddress,
}: Props) => {
    const priceUnitsForSale: PriceUnit[] = ['VNĐ', 'Giá / m²', 'Thoả thuận'];
    const priceUnitsForRent: PriceUnit[] = ['Giá / tháng', 'Giá / năm', 'Thoả thuận'];
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false); 

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleAddressSelect = (newAddress: string) => {
        setAddress(newAddress);
        setIsAddressModalOpen(false);
    };

    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <label className="block text-black font-medium mb-2">Địa chỉ BĐS</label>
            <div className="flex items-center border rounded-lg p-2 mb-4">
                <span className="mr-2 text-gray-500">🔍</span>
                <input
                    type="text"
                    placeholder="Nhập địa chỉ"
                    className="w-full p-2 outline-none bg-transparent cursor-pointer"
                    value={address}
                    onClick={() => setIsAddressModalOpen(true)}
                    readOnly
                />
            </div>

            {isAddressModalOpen && (
                <AddressModal
                    onClose={() => setIsAddressModalOpen(false)} 
                    onAddressSelect={handleAddressSelect}
                />
            )}

            <h2 className="text-lg font-bold mb-4">Thông tin chính</h2>
            <label className="block text-black font-medium mb-2">Loại BĐS</label>
            <select
                value={selectedOption}
                onChange={(e) => setPriceUnit(e.target.value as PriceUnit)}
                className="w-full p-2 border rounded-lg mb-4"
            >
                <option value="">Chọn loại BĐS</option>
                <option value="Căn hộ">Căn hộ</option>
                <option value="Nhà phố">Nhà phố</option>
                <option value="Biệt thự">Biệt thự</option>
                <option value="Đất nền">Đất nền</option>
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
                                        onChange={() => setPriceUnit(unit)}
                                        className="mr-2"
                                    />
                                    <span>{unit}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InforMain;
