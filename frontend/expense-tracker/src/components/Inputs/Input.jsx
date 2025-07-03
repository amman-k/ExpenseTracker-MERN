import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({
  value,
  onChange,
  placeholder,
  type,
  label,
  showPassword,
  toggleShowPassword, // We'll use this prop to determine if it's a password field
}) => {
  return (
    <div className="relative">
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="input-box relative">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={onChange}
        />

        {/* Render the eye icon only if toggleShowPassword function is provided */}
        {toggleShowPassword && (
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <FaRegEye size={22} className="text-primary" />
            ) : (
              <FaRegEyeSlash size={22} className="text-slate-400" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;