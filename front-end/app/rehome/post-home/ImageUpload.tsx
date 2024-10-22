"use client";
import React, { useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa'; 
import { AiOutlinePicture, AiOutlineDown } from 'react-icons/ai'; 

const ImageUpload = () => {
    const [selectedImages, setSelectedImages] = useState<File[]>([]); 
    const [showGuidelines, setShowGuidelines] = useState<boolean>(false); 
    const [show360Guidelines, setShow360Guidelines] = useState<boolean>(false); 

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const imagesArray = Array.from(files); 
            setSelectedImages(imagesArray); 
        }
    };

    const toggleGuidelines = () => {
        setShowGuidelines(prev => !prev);
    };

    const toggle360Guidelines = () => {
        setShow360Guidelines(prev => !prev); 
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-medium">Hình ảnh</h2>
            <div className="flex items-center bg-gray-100 p-2 rounded-lg mt-2">
                <FaExclamationTriangle className="text-yellow-500 mr-2" size={24} />
                <p className="text-xl font-semibold text-gray-700 text-center flex-1">
                    Đăng tối thiểu 3 ảnh thường
                </p>
            </div>
            <div className="border-dashed border-2 border-gray-300 h-40 flex items-center justify-center relative mt-4 rounded-lg">
                <input 
                    type="file" 
                    accept="image/*" 
                    multiple 
                    onChange={handleImageChange} 
                    className="absolute inset-0 opacity-0 cursor-pointer" 
                />
                <p className="text-gray-500">Kéo thả ảnh vào đây hoặc</p>
                <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Thêm ảnh lên từ thiết bị
                </button>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
                {selectedImages.map((image, index) => (
                    <div key={index} className="h-64 border border-gray-300 rounded-lg overflow-hidden">
                        <img 
                            src={URL.createObjectURL(image)} 
                            alt={`Uploaded ${index}`} 
                            className="w-full h-full object-cover" 
                        />
                    </div>
                ))}
            </div>
            <div className="mt-4 text-gray-500 flex items-center cursor-pointer" onClick={toggleGuidelines}>
                <AiOutlinePicture className="mr-2" size={24} />
                <p className="font-semibold">Hướng dẫn đăng ảnh thường</p>
                <AiOutlineDown className={`ml-2 transition-transform ${showGuidelines ? 'rotate-180' : 'rotate-0'}`} />
            </div>
            {showGuidelines && (
                <div className="mt-2 bg-gray-100 p-4 rounded-lg">
                    <ul className="list-disc pl-5 text-gray-600">
                        <li>Đăng tối đa 24 ảnh với tất cả các loại tin</li>
                        <li>Hãy dùng ảnh thật, không trùng, không chèn SĐT</li>
                        <li>Mỗi ảnh kích thước tối thiểu 100x100 px, tối đa 15 MB</li>
                        <li>Mô tả ảnh tối đa 45 kí tự</li>
                    </ul>
                </div>
            )}
            <div className="mt-6 text-gray-500 flex items-center cursor-pointer" onClick={toggle360Guidelines}>
                <AiOutlinePicture className="mr-2" size={24} />
                <p className="font-semibold">Hướng dẫn đăng ảnh 360°</p>
                <AiOutlineDown className={`ml-2 transition-transform ${show360Guidelines ? 'rotate-180' : 'rotate-0'}`} />
            </div>
            {show360Guidelines && (
                <div className="mt-2 bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-600">
                        Ảnh 360° được hỗ trợ bao gồm ảnh dạng hình cầu (Photo Sphere) và ảnh toàn cảnh (Panorama). 
                        Tin rao có ảnh 360° sẽ được gắn nhãn 360°.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mt-2">
                        <li>Chụp ảnh 360° bất động sản của bạn theo một trong các cách sau:</li>
                        <li>Sử dụng thiết bị chụp ảnh 360° chuyên dụng</li>
                        <li>Sử dụng điện thoại thông minh có chế độ chụp ảnh toàn cảnh Panorama.</li>
                        <li>Sử dụng điện thoại thông minh có cài đặt ứng dụng bên thứ 3 (VD: Google Street View hoặc Cardboard Camera)</li>
                        <li>Tải ảnh lên bằng nút đăng ảnh hoặc kéo thả ảnh như thông thường</li>
                        <li>Đánh dấu vào ô 360° để chọn những ảnh bạn muốn hiển thị theo chế độ 360°</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
