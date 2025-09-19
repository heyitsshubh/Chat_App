import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const Signup: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState("");
  const [isSubmitting] = useState(false);
  const navigate = useNavigate();

  const isButtonDisabled =
    isSubmitting || !fullName || !phone || !email || !password || !company || !isAgency;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-[350px] min-h-[600px] shadow-md rounded-md p-6 flex flex-col">
      <div>
        <h1 className="text-2xl font-bold mb-8">Create your PopX account</h1>

        <form className="space-y-6">
          <div className="relative">
            <label
              htmlFor="fullName"
              className="absolute -top-2.5 left-3 px-1 bg-white text-purple-700 text-sm font-medium"
            >
              Full Name *
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={isSubmitting}
              className="w-full border border-gray-400 rounded-md px-3 pt-3 pb-2 bg-transparent text-gray-900 outline-none focus:border-purple-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="phone"
              className="absolute -top-2.5 left-3 px-1  bg-white text-purple-700 text-sm font-medium"
            >
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={isSubmitting}
              className="w-full border border-gray-400 rounded-md px-3 pt-3 pb-2 bg-transparent text-gray-900 outline-none focus:border-purple-500"
            />
          </div>

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
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
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isSubmitting}
              className="w-full border border-gray-400 rounded-md px-3 pt-3 pb-2 bg-transparent text-gray-900 outline-none focus:border-purple-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="company"
              className="absolute -top-2.5 left-3 px-1  bg-white text-purple-700 text-sm font-medium"
            >
              Company Name *
            </label>
            <input
              id="company"
              type="text"
              placeholder="Enter company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              disabled={isSubmitting}
              className="w-full border border-gray-400 rounded-md px-3 pt-3 pb-2 bg-transparent text-gray-900 outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-800 mb-2">
              Are you an Agency? <span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === "yes"}
                  onChange={() => setIsAgency("yes")}
                  disabled={isSubmitting}
                  className="accent-purple-600"
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-gray-700 text-sm">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === "no"}
                  onChange={() => setIsAgency("no")}
                  disabled={isSubmitting}
                  className="accent-purple-600"
                />
                No
              </label>
            </div>
          </div>
        </form>
      </div>

      <button
        onClick={() => {
          if (isButtonDisabled) return;
          localStorage.setItem('userName', fullName);
          localStorage.setItem('userEmail', email);
          toast.success('Account created successfully!');
          setTimeout(() => {
            navigate('/account');
          }, 1200);
        }}
        disabled={isButtonDisabled}
        className={`w-full text-white font-semibold py-1.5 rounded-md mt-5 transition cursor-pointer
          ${isButtonDisabled ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"}`}
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>
    </div>
    </div>
  );
};

export default Signup;
