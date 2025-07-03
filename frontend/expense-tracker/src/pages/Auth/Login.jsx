import React from "react";
import Authlayout from "../../components/layouts/Authlayout";
import Input from "../../components/Inputs/Input";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";


const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }
    if(!password){
      setError("Please enter the password");
      return;
    }

    setError("");
  }
  return (
    <Authlayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to login
        </p>
      

      <form onSubmit={handleLogin}>
        <Input
          value={email}
          onChange={() => {
            setEmail(e.target.value);
          }}
          label="Email Address"
          placeholder="Enter your email"
          type="text"
        ></Input>
        <Input
          value={password}
          onChange={() => {
            setPassword(e.target.value);
          }}
          label="Password"
          placeholder="Enter your password"
          type="password"
        ></Input>
        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
        <button type='submit' className="btn-primary">LOGIN</button>
        <p className="text-[13px] text-slate-800 mt-3">Dont have an account? <Link className="font-medium text-primary underline" to="/signup">SignUp</Link></p>
      </form>
      </div>
    </Authlayout>
  );
};

export default Login;
