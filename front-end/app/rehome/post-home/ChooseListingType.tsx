"use client";
import React, { useState, useEffect } from 'react';
import { FaInfoCircle, FaTag } from 'react-icons/fa'; 
import { useRouter } from 'next/navigation'; 

const ChooseListingType = () => {
    const [selectedType, setSelectedType] = useState<string>("Tin thường");
    const [selectedDuration, setSelectedDuration] = useState<string>(""); 
    const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]); 
    const [endDate, setEndDate] = useState<string>(""); 
    const [postNow, setPostNow] = useState<boolean>(true);
    const router = useRouter();

    const formatDateForInput = (date: string): string => {
        if (!date) return ""; 
        const [day, month, year] = date.split('/');
        return `${year}-${month}-${day}`;
    };
    
    const formatDateForDisplay = (date: string): string => {
        if (!date) return "";
        const [year, month, day] = date.split('-');
        return `${day}/${month}/${year}`;
    };

    const listingTypes = [
        {
            title: "VIP Kim Cương",
            description: "Hiển thị trên cùng",
            displayMultiplier: "X30 lượt hiển thị so với tin thường",
            price: "300.000 đ/ngày",
        },
        {
            title: "VIP Vàng",
            description: "Dưới VIP Kim Cương",
            displayMultiplier: "X15 lượt hiển thị so với tin thường",
            price: "118.200 đ/ngày",
        },
        {
            title: "VIP Bạc",
            description: "Dưới VIP Vàng",
            displayMultiplier: "X8 lượt hiển thị so với tin thường",
            price: "54.600 đ/ngày",
        },
        {
            title: "Tin thường",
            description: "Hiển thị dưới cùng",
            displayMultiplier: "",
            price: "2.591 đ/ngày",
        },
    ];

    const pricingOptionsMap: { [key: string]: { duration: string; price: string }[] } = {
        "Tin thường": [
            { duration: "10 ngày", price: "2.591 đ/ngày" },
            { duration: "15 ngày", price: "2.331 đ/ngày" },
            { duration: "30 ngày", price: "2.073 đ/ngày" },
        ],
        "VIP Bạc": [
            { duration: "7 ngày", price: "54.600 đ/ngày" },
            { duration: "10 ngày", price: "51.870 đ/ngày" },
            { duration: "15 ngày", price: "49.140 đ/ngày" },
        ],
        "VIP Vàng": [
            { duration: "7 ngày", price: "118.200 đ/ngày" },
            { duration: "10 ngày", price: "112.290 đ/ngày" },
            { duration: "15 ngày", price: "106.380 đ/ngày" },
        ],
        "VIP Kim Cương": [
            { duration: "7 ngày", price: "300.000 đ/ngày" },
            { duration: "10 ngày", price: "285.000 đ/ngày" },
            { duration: "15 ngày", price: "270.000 đ/ngày" },
        ],
    };

    const handleComparisonClick = () => {
        router.push('/comparison'); 
    };

    const handleSubmit = () => {
        console.log(`Type: ${selectedType}, Start Date: ${startDate}, End Date: ${endDate}, Post Now: ${postNow}`);
    };

    useEffect(() => {
        if (selectedDuration) {
            const durationDays = parseInt(selectedDuration.split(' ')[0]); 
            const start = new Date(startDate);
            const end = new Date(start);
            end.setDate(end.getDate() + durationDays); 
            setEndDate(formatDateForDisplay(end.toISOString().split('T')[0])); 
        }
    }, [selectedDuration, startDate]); 

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Chọn loại tin</h2>
                <div className="flex items-center cursor-pointer" onClick={handleComparisonClick}>
                    <FaInfoCircle className="text-blue-500 mr-2" />
                    <p className="text-blue-500 underline">So sánh các loại tin và giá</p>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
                {listingTypes.map((type, index) => (
                    <div 
                        key={index} 
                        onClick={() => {
                            setSelectedType(type.title);
                            setSelectedDuration("");
                            setEndDate(""); 
                        }}
                        className={`border rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105 ${selectedType === type.title ? 'bg-blue-100' : 'bg-white'}`}
                    >
                        <h3 className="text-lg font-semibold">{type.title}</h3>
                        <p>{type.description}</p>
                        <p className="text-gray-500">{type.displayMultiplier}</p>
                        <p className="font-bold">{type.price}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">Giá</h2>
            <div className="grid grid-cols-3 gap-4">
                {pricingOptionsMap[selectedType].map((option, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-gray-50">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value={option.duration}
                                checked={selectedDuration === option.duration}
                                onChange={() => setSelectedDuration(option.duration)}
                                className="mr-2"
                            />
                            <span>{option.duration} - {option.price}</span>
                        </label>
                    </div>
                ))}
            </div>

            <div className="mt-4 text-center">
                <p className="text-gray-600">Đăng dài ngày hơn, tiết kiệm hơn!</p>
            </div>

       

            <div className="mt-6">
                <label className="block mb-2 font-semibold">Ngày bắt đầu:</label>
                <input
                    type="date"
                    value={startDate} 
                    onChange={(e) => setStartDate(e.target.value)} 
                    className="border rounded-lg p-2 w-full"
                />
                
                <label className="block mb-2 font-semibold">Ngày kết thúc:</label>
                <input
                    type="date"
                    value={formatDateForInput(endDate)} 
                    readOnly 
                    className="border rounded-lg p-2 w-full bg-gray-200"
                />
            </div>
            <div className="mt-4 text-center">
                <div className="flex items-center justify-center">
                    <FaTag className="text-green-500 mr-2" /> 
                    <p className="text-lg font-semibold">Khuyến mãi</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseListingType;
