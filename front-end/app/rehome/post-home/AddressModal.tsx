import React, { useState, useEffect } from 'react';
import Select from 'react-select'; 
import {
    fetchProvinces,
    fetchDistricts,
    fetchWards,
    Province,
    District,
    Ward,
} from '../../services/address.service'; 

interface AddressModalProps {
    onClose: () => void;
    onAddressSelect: (address: string) => void; 
}

const AddressModal: React.FC<AddressModalProps> = ({ onClose, onAddressSelect }) => {
    const [isSelecting, setIsSelecting] = useState(false);
    const [provinces, setProvinces] = useState<Province[]>([]);
    const [districts, setDistricts] = useState<District[]>([]);
    const [wards, setWards] = useState<Ward[]>([]);
    const [province, setProvince] = useState<Province | null>(null);
    const [district, setDistrict] = useState<District | null>(null);
    const [ward, setWard] = useState<string>('');
    const [specificAddress, setSpecificAddress] = useState<string>(''); 
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        const getProvinces = async () => {
            try {
                const provincesData = await fetchProvinces();
                setProvinces(provincesData);
            } catch (error) {
                setErrorMessage("Không thể lấy danh sách tỉnh thành.");
            }
        };

        getProvinces();
    }, []);

    const handleProvinceChange = async (selectedOption: any) => {
        const selectedProvince = provinces.find(
            (province) => province.id === selectedOption.value
        ) || null;

        setProvince(selectedProvince);
        setDistrict(null);
        setWards([]);
        setWard('');

        if (selectedProvince) {
            try {
                const districtsData = await fetchDistricts(selectedProvince.id);
                setDistricts(districtsData);
            } catch (error) {
                setErrorMessage("Không thể lấy danh sách quận/huyện.");
            }
        }
    };

    const handleDistrictChange = async (selectedOption: any) => {
        const selectedDistrict = districts.find(
            (district) => district.id === selectedOption.value
        ) || null;

        setDistrict(selectedDistrict);
        setWard('');

        if (selectedDistrict) {
            try {
                const wardsData = await fetchWards(selectedDistrict.id);
                console.log(wardsData)
                setWards(wardsData);
            } catch (error) {
                setErrorMessage("Không thể lấy danh sách phường/xã.");
            }
        }
    };

    const handleWardChange = (selectedOption: any) => {
        setWard(selectedOption.value);
    };

    const handleConfirm = () => {
        const fullAddress = `${province?.full_name || ''}, ${district?.full_name || ''}, ${ward}, ${specificAddress}`;
        onAddressSelect(fullAddress.trim());
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-1/2 h-3/4">
                <h2 className="text-2xl font-bold mb-4">
                    {isSelecting ? 'Chọn địa chỉ' : 'Nhập địa chỉ'}
                </h2>

                {!isSelecting ? (
                    <>
                        <input
                            type="text"
                            placeholder="Nhập địa chỉ"
                            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-gray-600 mb-4 text-sm">
                            Tìm kiếm bằng cách nhập tên quận huyện, phường xã, đường phố hoặc tên dự án
                        </p>

                        <button
                            onClick={() => setIsSelecting(true)} 
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                            Chọn địa chỉ
                        </button>
                    </>
                ) : (
                    <div className="space-y-4"> 
                        <Select
                            onChange={handleProvinceChange}
                            options={provinces.map((province) => ({ value: province.id, label: province.full_name }))}
                            placeholder="Chọn tỉnh/thành"
                        />
                        <Select
                            onChange={handleDistrictChange}
                            options={districts.map((district) => ({ value: district.id, label: district.full_name }))}
                            placeholder="Chọn quận/huyện"
                            isDisabled={!province}
                        />
                        <Select
                            onChange={handleWardChange}
                            options={wards.map((ward) => ({ value: ward.full_name, label: ward.full_name }))}
                            placeholder="Chọn phường/xã"
                            isDisabled={!district}
                        />
                        <input
                            type="text"
                            placeholder="Nhập địa chỉ cụ thể"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={specificAddress} 
                            onChange={(e) => setSpecificAddress(e.target.value)} 
                        />
                    </div>
                )}

                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

                <div className="flex justify-between mt-4">
                    <button
                        onClick={onClose}
                        className="text-gray-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                    >
                        Quay lại
                    </button>
                    <button
                        onClick={handleConfirm} 
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                        Xác nhận
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddressModal;
