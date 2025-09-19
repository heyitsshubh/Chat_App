import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    localStorage.setItem('userEmail', formData.email);
    if (!localStorage.getItem('userName')) {
      localStorage.setItem('userName', 'No Name');
    }
    toast.success('Login successful!');
    setTimeout(() => {
      navigate('/account');
    }, 1200);
  };
  const isDisabled = !formData.email || !formData.password;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[350px] min-h-[600px] shadow-md rounded-md p-6 flex flex-col">
        <h2 className="text-2xl font-bold ">
          Signin to your <br/> PopX account
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-4">
              <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2.5 left-3 px-1  bg-white text-purple-700 text-sm font-medium"
            >
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md px-3 pt-3 pb-2 bg-transparent text-gray-900 outline-none focus:border-purple-500"
            />
          </div>
       
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-2.5 left-3 px-1  bg-white text-purple-700 text-sm font-medium"
            >
              Password *
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md px-3 pt-3 pb-2 bg-transparent text-gray-900 outline-none focus:border-purple-500"
            />
          </div>
          <button
            type="submit"
            disabled={isDisabled}
            className={`w-full py-1.5 rounded-md font-medium mt-4 transition cursor-pointer 
              ${isDisabled 
                ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                : "bg-purple-600 text-white hover:bg-purple-700"}`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
