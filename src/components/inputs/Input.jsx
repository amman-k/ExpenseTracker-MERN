import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="text-[13px] text-slate-800">{props.label}</label>

      <div className="input-box">
        <input
          type={props.type==='password' && (showPassword ? "text" : "password")}
          placeholder={props.placeholder}
          className="w-full bg-transparent outline-none"
          value={props.value}
          onChange={(e) => {
            props.onChange(e);
          }}
        />
        <div
          className="transform cursor-pointer"
          onClick={toggleShowPassword}
        >
          {props.type === 'password' && (showPassword ? (
            <FaRegEye size={22} className="primary-color"/>
          ) : (
            <FaRegEyeSlash   size={22} className="primary-color" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Input;
