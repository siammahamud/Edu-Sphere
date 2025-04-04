import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div>
      <div className="flex items-center my-2">
        <div className="flex-grow border-t border-gray-800"></div>
        <span className="mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-800"></div>
      </div>

      <div className="flex gap-4 justify-center mt-2 text-2xl">
        <button className="p-2 cursor-pointer flex-grow bg-blue-200 hover:bg-blue-400 rounded-full flex justify-center items-center">
          <FaGoogle className="text-red-500" />
        </button>
        <button className="p-2 cursor-pointer flex-grow bg-blue-200 hover:bg-blue-400 rounded-full flex justify-center items-center">
          <FaFacebook className="text-blue-600" />
        </button>
        <button className="p-2 cursor-pointer flex-grow bg-blue-200 hover:bg-blue-400 rounded-full flex justify-center items-center">
          <FaGithub className="text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
