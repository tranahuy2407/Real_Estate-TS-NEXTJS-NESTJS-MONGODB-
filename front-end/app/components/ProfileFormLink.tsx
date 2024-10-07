import React from 'react';
import Link from 'next/link';
import { CiCircleList, CiLogout } from 'react-icons/ci';
import { GrArticle } from 'react-icons/gr';
import { MdCardMembership } from 'react-icons/md';
import { GoSponsorTiers } from 'react-icons/go';
import { FaRegMoneyBillAlt, FaUserEdit } from 'react-icons/fa';
import { TbPasswordUser } from 'react-icons/tb';
import { RiVipCrown2Line } from 'react-icons/ri';
import { useAuth } from '../context/AuthContext';

type Props = {};
const ProfileFormLink = (props: Props) => {
    const { user, logout } = useAuth(); 

    return (
        <div className="absolute mt-4 right-0 z-50 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link href="/dashboard" legacyBehavior>
                    <a className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        <span className="flex items-center">
                            <CiCircleList className="mr-2" />
                            Tổng quan
                        </span>
                        <span className="text-red-500 bg-red-100 px-2 py-1 text-xs rounded-md">Mới</span>
                    </a>
                </Link>
                <Link href="/profile/listings" legacyBehavior>
                    <a className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <GrArticle className="mr-2" />
                        Quản lý tin đăng
                    </a>
                </Link>
                <Link href="/profile/membership" legacyBehavior>
                    <a className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        <span className="flex items-center">
                        <MdCardMembership className="mr-2" />
                            Gói hội viên
                        </span>
                        <span className="text-green-500 bg-green-100 px-2 py-1 text-xs rounded-md">Tiết kiệm đến -30%</span>
                    </a>
                </Link>
                <Link href="/profile/sponsored-listings" legacyBehavior>
                    <a className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <GoSponsorTiers className="mr-2" />
                        Quản lý tài trợ
                    </a>
                </Link>
                <Link href="/profile/personal-info" legacyBehavior>
                    <a className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <FaUserEdit className="mr-2" />
                        Thay đổi thông tin cá nhân
                    </a>
                </Link>
                <Link href="/profile/change-password" legacyBehavior>
                    <a className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        <TbPasswordUser  className="mr-2" />
                        Thay đổi mật khẩu
                    </a>
                </Link>
                <Link href="/profile/professional" legacyBehavior>
                    <a className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <RiVipCrown2Line className="mr-2"/>
                        Môi giới chuyên nghiệp
                    </a>
                </Link>
                <Link href="/profile/deposit" legacyBehavior>
                    <a className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    <FaRegMoneyBillAlt className="mr-2" />
                        Nạp tiền
                    </a>
                </Link>
                <a
                    onClick={logout}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    role="menuitem"
                >
                    <CiLogout className="mr-2" />
                    Đăng xuất
                </a>
            </div>
        </div>
    );
};
    
export default ProfileFormLink;
