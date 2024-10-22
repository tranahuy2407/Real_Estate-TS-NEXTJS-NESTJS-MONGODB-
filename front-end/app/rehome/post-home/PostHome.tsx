"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AddressModal from './AddressModal';
import OtherInfor from './OtherInfor';
import InforMain from './InforMain'; 
import InforUser from './InforUser';
import ImageUpload from './ImageUpload';  
import VideoUpload from './VideoUpload';
import ChooseListingType from './ChooseListingType';

const PostHome = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [address, setAddress] = useState<string>('');
    const [area, setArea] = useState<string>(''); 
    const [price, setPrice] = useState<string>(''); 
    const [priceUnit, setPriceUnit] = useState<'VNĐ' | 'Giá / m²' | 'Giá / tháng' | 'Giá / năm' | 'Thoả thuận'>('VNĐ');
    const router = useRouter();
    const [step, setStep] = useState<number>(1); 

    const handleOptionClick = (option: 'Bán' | 'Cho thuê') => {
        setSelectedOption(option);
        setPriceUnit(option === 'Bán' ? 'Giá / m²' : 'Giá / tháng');
    };

    const handleExitClick = () => {
        router.push('/');
    };

    const handleNextClick = () => {
        if (step < 3) {
            setStep(prev => prev + 1); 
        } else {
            console.log('Submitting post');
            // Here you would handle form submission logic
        }
    };

    const handleBackClick = () => {
        setStep(prev => prev - 1); 
    };

    const isFormValid = address && area && price;

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

            {step === 1 && (
                <div className="mb-6">
                    <span className="text-lg font-medium">Bước 1. Thông tin BĐS</span>
                    <div className="h-1 bg-red-500 mt-2 w-1/3"></div>
                </div>
            )}

            {step === 1 && (
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
            )}

            {selectedOption && step === 1 && (
                <InforMain
                    address={address}
                    area={area}
                    price={price}
                    priceUnit={priceUnit}
                    setArea={setArea}
                    setAddress={setAddress}
                    setPrice={setPrice}
                    setPriceUnit={setPriceUnit}
                    selectedOption={selectedOption as 'Bán' | 'Cho thuê'} 
                />
            )}

            {selectedOption && step === 1 && (
                <OtherInfor /> 
            )}
            {selectedOption && step === 1 && (
                <InforUser />
            )}

            {step === 2 && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md"> 
                    <span className="text-lg font-medium">Bước 2. Hình ảnh & Video</span>
                    <div className="h-1 bg-red-500 mt-2 w-2/3"></div>
                    
                    <div className="mt-4"> 
                        <ImageUpload />
                    </div>
                    
                    <div className="mt-4"> 
                        <VideoUpload />
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-md">
                    <span className="text-lg font-medium">Bước 3. Cấu hình & Thanh toán</span>
                    <div className="h-1 bg-red-500 mt-2 w-full"></div>
                    <ChooseListingType />
                </div>
            )}

            {isModalOpen && (
                <AddressModal
                    onClose={() => setIsModalOpen(false)}
                    onAddressSelect={setAddress}
                />
            )}
            <div className="absolute right-4 flex space-x-4 ">
                {step > 1 && (
                    <button
                        onClick={handleBackClick}
                        className="px-4 py-2 text-black border border-gray-400 rounded-lg hover:bg-gray-200 transition"
                    >
                        Quay lại Bước {step - 1}
                    </button>
                )}
                <div className="mt-4">  
                    <button
                        onClick={handleNextClick}
                        disabled={step === 3 && !isFormValid}
                        className={`px-4 py-2 text-white rounded-lg ${step === 3 && !isFormValid ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                    >
                        {step === 3 ? 'Xong' : 'Tiếp theo'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostHome;
