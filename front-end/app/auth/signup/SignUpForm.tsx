'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { signUp } from "../../services/auth.service";
import { useRouter } from 'next/navigation'; 

type Props = {};

const SignUpForm = (props: Props) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>(''); 
  const [showPassword, setShowPassword] = useState<boolean>(false); 
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter(); 

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); 

    if (password !== confirmPassword) {
      setError("Mật khẩu và nhập lại mật khẩu không khớp");
      return;
    }

    try {
      const result = await signUp({ email, password, name });
      console.log('User signed up successfully, token:', result.token);
      setSuccess(true); 
      setTimeout(() => {
        router.push('/auth/signin');
      }, 2000); 
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-10 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-xl font-medium mb-4">Đăng ký</h1>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <p className="text-green-500 font-bold mb-4">Đăng ký thành công!</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-center mt-4">Chuyển hướng đến trang đăng nhập...</p>
            </div>
          </div>
        )}

        <label htmlFor="name" className="mb-2">Họ và tên</label>
        <input
          type="text"
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          placeholder="Họ và tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          tabIndex={1}
        />

        <label htmlFor="email" className="mb-2">Email</label>
        <input
          type="text"
          className="p-2 border-gray-300 border-[1px] rounded-lg w-[300px] mb-4 focus:outline-none focus:border-gray-600 text-black"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          tabIndex={2}
        />

        <label htmlFor="password" className="mb-2">Mật khẩu</label>
        <div className="relative w-[300px] mb-4">
          <input
            type={showPassword ? "text" : "password"}
            className="p-2 border-gray-300 border-[1px] rounded-lg w-full focus:outline-none focus:border-gray-600 text-black"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            tabIndex={3}
          />
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <label htmlFor="confirmPassword" className="mb-2">Nhập lại mật khẩu</label>
        <div className="relative w-[300px] mb-4">
          <input
            type={showPassword ? "text" : "password"}
            className="p-2 border-gray-300 border-[1px] rounded-lg w-full focus:outline-none focus:border-gray-600 text-black"
            placeholder="Nhập lại mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            tabIndex={4}
          />
          <span
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        <button
          onClick={handleSignUp}
          className="p-2 border bg-purple-600 text-white border-gray-300 mt-2 mb-4 focus:outline-none focus:border-gray-600"
        >
          Đăng ký ngay
        </button>

        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600">
            Bạn đã có tài khoản?
          </span>
          <Link
            href="/auth/signin"
            className="text-sm text-blue-600 hover:underline ml-2"
          >
            Đăng nhập ngay
          </Link>
        </div>
        <Link href="/" className="text-sm text-center mt-2 text-blue-600 font-medium hover:underline">
          Trang chủ
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
