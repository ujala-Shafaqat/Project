import React from "react";
const variants = {
  primary:
    "rounded-lg bg-indigo-600 text-white hover:enabled:bg-indigo-700 focus:ring-indigo-500",
  danger: "bg-red-600 text-white hover:enabled:bg-red-500 focus:ring-red-500",
  naked: "hover:text-gray-500  shadow:none",
  formButton:"bg-black rounded-full  h-10  w-80 hover:enabled:bg-indigo-70 text-white",
  webtaskButton:"rounded-r-full w-64 h-14 mt-11 text-white bg-black font-bold items-center justify-center",
  locationButton:" w-52 h-14 mt-11 text-black bg-white font-bold items-center justify-center",
  taskButton:"w-52 h-14 mt-11 text-white bg-black font-bold items-center justify-center",
  logoutButton:" w-52 h-14 mb-25  text-black bg-white font-bold  items-center justify-center",
  secondformButton:"bg-white text-black  w-96 h-14"
};
const sizes = {
  small: "px-2 py-1 text-xs leading-1",
  medium: "px-4 py-2 text-sm",
  large: "px-4 py-2 text-base",
};
export const Button = ({
  className,
  variant = "primary",
  size = "small",
  ...props
}) => {
  return (
    <button
      className={`  inline-flex justify-center items-center border border-transparent w-full bg-black  font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
            ${variants[variant]}
            ${sizes[size]}`}
      {...props}
    />
  );
};