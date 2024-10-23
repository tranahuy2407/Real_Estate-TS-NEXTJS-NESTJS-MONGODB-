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
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    const [suggestedPrices, setSuggestedPrices] = useState<string[]>([]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleAddressSelect = (newAddress: string) => {
        setAddress(newAddress);
        setIsAddressModalOpen(false);
    };

    const handlePriceChange = (inputValue: string) => {
        setPrice(inputValue);
        const numericValue = parseInt(inputValue.replace(/\./g, '').replace(/,/g, ''));
        if (!isNaN(numericValue)) {
            const newSuggestions = [
                (numericValue * 1000).toLocaleString('vi-VN'),
                (numericValue * 10000).toLocaleString('vi-VN'),
                (numericValue * 100000).toLocaleString('vi-VN'),
                (numericValue * 1000000).toLocaleString('vi-VN'),
            ];
            setSuggestedPrices(newSuggestions);
        } else {
            setSuggestedPrices([]);
        }
    };

    const handlePriceSuggestionClick = (suggestedPrice: string) => {
        setPrice(suggestedPrice);
        setSuggestedPrices([]);
    };

    const calculateTotalValue = () => {
        const numericPrice = parseInt(price.replace(/\./g, '').replace(/,/g, ''));
        const numericArea = parseInt(area.replace(/\./g, '').replace(/,/g, ''));

        // Kiểm tra xem giá và diện tích có hợp lệ không
        if (!isNaN(numericArea) && numericArea > 0 && !isNaN(numericPrice)) {
            let totalValue = 0;
            let pricePerM2 = 0;

            if (priceUnit === 'Giá / m²') {
                pricePerM2 = numericPrice; // Giá trên m²
                totalValue = pricePerM2 * numericArea; // Tính tổng trị giá
            } else if (priceUnit === 'VNĐ') {
                totalValue = numericPrice; // Tổng trị giá bằng giá nhập vào
                pricePerM2 = Math.round(totalValue / numericArea); // Tính giá trên m²
            } else if (priceUnit === 'Thoả thuận') {
                return { totalValue: 0, pricePerM2: 0 }; // Trả về 0 cho tổng trị giá và giá trên m²
            }

            return { totalValue, pricePerM2 };
        }

        // Trả về 0 nếu diện tích không hợp lệ hoặc giá không hợp lệ
        return { totalValue: 0, pricePerM2: 0 };
    };

    const { totalValue, pricePerM2 } = calculateTotalValue();

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
                    onChange={(e) => {
                        setArea(e.target.value);
                        calculateTotalValue(); // Gọi lại tính toán khi diện tích thay đổi
                    }}
                />
                <span className="text-gray-500">m²</span>
            </div>

            <label className="block text-black font-medium mb-2">Mức giá</label>
            <div className="flex flex-col mb-4">
                <div className="flex items-center mb-2">
                    <input
                        type="text"
                        placeholder="Nhập mức giá"
                        className="w-2/3 p-2 border rounded-lg mr-2"
                        value={priceUnit === 'Thoả thuận' ? 'Giá thỏa thuận' : price}
                        onChange={(e) => {
                            handlePriceChange(e.target.value);
                            calculateTotalValue(); // Gọi lại tính toán khi giá thay đổi
                        }}
                        disabled={priceUnit === 'Thoả thuận'} // Khóa nhập khi chọn thỏa thuận
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

                {/* Hiển thị gợi ý chỉ khi không chọn "Thoả thuận" */}
                {priceUnit !== 'Thoả thuận' && suggestedPrices.length > 0 && (
                    <div className="flex space-x-2">
                        {suggestedPrices.map((suggestion) => (
                            <button
                                key={suggestion}
                                onClick={() => handlePriceSuggestionClick(suggestion)}
                                className="border p-2 rounded-lg bg-white text-gray-700"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {priceUnit !== 'Thoả thuận' && (
                    <div className="mt-4 text-gray-700">
                        <p>
                            Tổng trị giá: {totalValue >= 1e9 
                                ? (totalValue / 1e9).toLocaleString('vi-VN') + ' tỷ' 
                                : (totalValue / 1e6).toLocaleString('vi-VN') + ' triệu'} 
                            (Tổng trị giá ~{pricePerM2 
                                ? (pricePerM2 >= 1e9 
                                    ? (pricePerM2 / 1e9).toLocaleString('vi-VN') + ' tỷ/m²' 
                                    : (pricePerM2 / 1e6).toLocaleString('vi-VN') + ' triệu/m²') 
                                : '0 /m²'}) 
                        </p>
                    </div>
                )}

        </div>
    );
};

export default InforMain;
