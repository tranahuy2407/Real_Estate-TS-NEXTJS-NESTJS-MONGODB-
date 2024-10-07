import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiPhoneCall, FiMail, FiHelpCircle } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-600">
        <div>
          <img src="/assets/Logo.JPG" alt="Company Logo" className="w-36 mb-4" />
          <p className="font-semibold">CÔNG TY CỔ PHẦN AHUYRE VIỆT NAM</p>
          <p>16/5 Mai Xuân Thưởng, phường 11. Quận Bình Thạnh</p>
          <p className="mt-2">Điện thoại: (034) 3899 504</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Hotline</h4>
          <div className="flex items-center space-x-2">
            <FiPhoneCall className="text-xl" />
            <p>+ 343 899 504</p>
          </div>
          <h4 className="font-semibold mt-4 mb-2">Hỗ trợ khách hàng</h4>
          <div className="flex items-center space-x-2">
            <FiHelpCircle className="text-xl" />
            <p>tranahuy247@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <FiMail className="text-xl" />
            <p>tranahuy247@gmail.com</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">HƯỚNG DẪN</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-black">Về chúng tôi</a></li>
            <li><a href="#" className="hover:text-black">Báo giá & hỗ trợ</a></li>
            <li><a href="#" className="hover:text-black">Câu hỏi thường gặp</a></li>
            <li><a href="#" className="hover:text-black">Góp ý báo lỗi</a></li>
            <li><a href="#" className="hover:text-black">Sitemap</a></li>
          </ul>

          <h4 className="font-semibold mt-4 mb-2">QUY ĐỊNH</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-black">Quy định đăng tin</a></li>
            <li><a href="#" className="hover:text-black">Quy chế hoạt động</a></li>
            <li><a href="#" className="hover:text-black">Điều khoản thỏa thuận</a></li>
            <li><a href="#" className="hover:text-black">Chính sách bảo mật</a></li>
            <li><a href="#" className="hover:text-black">Giải quyết khiếu nại</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">QUỐC GIA & NGÔN NGỮ</h4>
          <div className="flex items-center border border-gray-300 rounded-md p-2 w-40">
            <span className="text-lg mr-2">🌐</span>
            <select className="bg-transparent text-sm outline-none">
              <option>Việt Nam</option>
            </select>
          </div>

          <div className="mt-6 flex space-x-4">
            <FaFacebook className="text-2xl cursor-pointer hover:text-black" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-black" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-black" />
          </div>
          <div className="mt-6 flex space-x-4">
             <FontAwesomeIcon icon={faGooglePlay}  className="w-20 h-20" />
            <FontAwesomeIcon icon={faAppStore}  className="w-20 h-20"/> 
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-10 pt-4 text-center">
        <p className="text-sm text-gray-500">Copyright © 2007 - 2024 AHUYRE</p>
      </div>
    </footer>
  );
}
