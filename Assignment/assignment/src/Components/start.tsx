import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomeCard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[350px] h-[600px] shadow-md rounded-md flex flex-col justify-end p-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Welcome to PopX</h2>
          <p className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="mt-6 space-y-3">
          <button
            className="w-full py-1.5 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Create Account
          </button>
          <button
            className="w-full py-1.5 rounded-md bg-purple-300 text-gray-900 font-medium hover:bg-purple-400 transition cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
