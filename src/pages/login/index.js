import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full flex justify-center items-center min-h-screen my-5">
      <div className="w-96 max-w-lg">
        <form className="rounded px-16 pt-6 pb-8 mb-4">
          <h3 className=" text-center mb-8 text-black text-2xl font-semibold">
            Log In
          </h3>
              <div className="mb-6">
          <div className="mb-4 ">
            <Input
              className="border-solid border-1 text-sm border-gray-300  bg-slate-100 rounded-lg w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
            />
          </div>
            <div className="relative">
              <Input
                className="border-solid  text-sm border-1 border-gray-300 bg-slate-100 rounded-lg w-full py-2 px-3  text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute top-0 right-0 mt-2 mr-3 cursor-pointer text-black text-sm font-semibold "
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>
          <div className="flex items-center   justify-between">
          <Link to={"/task"} className="w-full">
            <Button type="submit" size="medium" variant="formButton"  className="w-full bg-black rounded-full">
              Login
            </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;