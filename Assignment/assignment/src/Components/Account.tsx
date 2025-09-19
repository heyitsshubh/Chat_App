import React from "react";
import { FiCamera } from "react-icons/fi";

const AccountSettings: React.FC = () => {

  const userName = localStorage.getItem('userName') || 'No Name';
  const userEmail = localStorage.getItem('userEmail') || 'No Email';
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[350px] min-h-[600px] shadow-md rounded-md p-6 flex flex-col bg-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Account Settings
        </h2>

        <div className="flex items-start space-x-4 border-b border-dashed pb-6">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full">
              <FiCamera size={14} />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900">{userName}</h3>
            <p className="text-sm text-gray-600">{userEmail}</p>
          </div>
        </div>
        <p className="text-[10px] text-gray-700 mt-2 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
