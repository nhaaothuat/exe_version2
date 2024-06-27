import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="flex flex-col justify-center font-[sans-serif] text-[#333] p-4">
      <div className="max-w-md w-full mx-auto shadow-[0_2px_10px_-3px_rgba(6,81,237,0.5)] p-8 relative mt-12">
        <div className="bg-white w-20 h-20 border-[8px] p-1.5 absolute left-0 right-0 mx-auto -top-10 rounded-full overflow-hidden">
          <Link to="/">
            <img
              src="https://readymadeui.com/readymadeui-short.svg"
              alt="logo"
              className="w-full inline-block"
            />
          </Link>
        </div>
        <form className="mt-12">
          <h3 className="text-xl font-bold text-gray-300 mb-8 text-center">
            Create free account
          </h3>
          <div className="space-y-4">
            <input
              name="name"
              type="text"
              className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
              placeholder="Enter name"
            />
            <input
              name="email"
              type="text"
              className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
              placeholder="Enter email"
            />
            <input
              name="password"
              type="password"
              className="bg-gray-100 w-full text-sm px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
              placeholder="Enter password"
            />

            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 border-gray-300 rounded"
              />
              <label className="ml-3 block text-sm">
                I accept the{" "}
                <a
                 
                  className="text-orange-400 font-semibold hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <div className="mt-8">
            <button
              type="button"
              className="w-full py-4 px-4 text-sm font-semibold text-white bg-orange-400 hover:bg-orange-500 focus:outline-none"
            >
              Create an account
            </button>
          </div>
          <p className="text-sm mt-8 text-center">
            Already have an account?
            <Link
              to="/signin"
              className="text-orange-400 font-semibold hover:underline ml-1"
            >
              Login here
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
