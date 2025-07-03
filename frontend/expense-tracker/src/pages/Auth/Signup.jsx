import React, { useState } from 'react'
import Authlayout from "../../components/layouts/Authlayout";
import Input from "../../components/Inputs/Input";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

const Signup = () => {
  const [profilePic,setProfilePic]=useState(null);
  const [fullName,setFullName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const [error,setError]=useState('');
  const navigate=useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (error) setError("");
  };

   const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSignup=async (e)=>{

  }
  return (
    <Authlayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md-mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Join us today by entering your details below.</p>
        <form onSubmit={handleSignup} className=''>

        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}></ProfilePhotoSelector>


          <div className='grid gid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              label="Full Name"
              placeholder="Enter your full name"
              type="text"
            ></Input>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              placeholder="Enter your email"
              type="text"
            ></Input>
            <Input
            value={password}
            onChange={handlePasswordChange}
            label="Password"
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword} // This prop now correctly controls icon visibility in Input
          />
          </div>
        </form>
      </div>
    </Authlayout>
  )
}

export default Signup