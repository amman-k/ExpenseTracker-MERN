import React, { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/inputs/input";
import { validateEmail } from "../../utils/helper";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";

const Signup = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setfullname] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";
    if (!fullname) {
      setError("Please enter your name.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter the password.");
      return;
    }

    setError("");
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md: h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details below.
        </p>
        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector
            image={profilePic}
            setImage={setProfilePic}
          ></ProfilePhotoSelector>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullname}
              onChange={(e) => {
                setfullname(e.target.value);
              }}
              placeholder="Enter your full name"
              label="Name"
              type="text"
            ></Input>
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="Enter Email Address"
              type="text"
            ></Input>
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Enter Password"
              type="password"
            ></Input>
            <button
              type="submit"
              className="btn-primary h-[50px] justify-center flex items-center relative top-[30px]"
            >
              SIGN UP
            </button>
          </div>
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          <p className="text-[13px] text-slate-800 mt-3">
            Have an account?{" "}
            <Link to="/login" className="font-medium text-primary underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
