// InforUser.tsx
"use client";
import React from 'react';
import { useAuth } from '../../context/AuthContext'; 

type Props = {};

const InforUser = (props: Props) => {
    const { user } = useAuth(); 
    const name = user?.name || ''; 
    const email = user?.email || ''; 
    const phone = Array.isArray(user?.phone) && user.phone.length > 0 && user.phone[0] !== '' ? user.phone[0] : 'Chưa cập nhật';

    return (
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Thông tin liên hệ</h2>
            <label className="block text-black font-medium mb-2">Tên liên hệ</label>
            <input
                type="text"
                value={name}
                readOnly
                className="w-full p-2 border rounded-lg mb-4 bg-transparent"
            />

            <label className="block text-black font-medium mb-2">Email (không bắt buộc)</label>
            <input
                type="text"
                value={email}
                readOnly
                className="w-full p-2 border rounded-lg mb-4 bg-transparent"
            />

            <label className="block text-black font-medium mb-2">Số điện thoại</label>
            <input
                type="text"
                value={phone}
                readOnly
                className="w-full p-2 border rounded-lg mb-4 bg-transparent"
            />
        </div>
    );
};

export default InforUser;
