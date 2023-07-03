import React, { useContext, useEffect, useRef, useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import Loading from "./components/Loading";
import { UserDataContext } from "./context/UserData";



// username: eve.holt@reqres.in  password: cityslicka
export default function SignIn() {
  const {
    setUserName,
    setPassword,
    userName,
    password,
    handleSubmit,
    errorLogin,
    successLogin,
    onChangeCheckbox,
    isChecked,
  } = useContext(UserDataContext);

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className=" flex justify-center items-center min-h-[75vh] bg-black border-y-2  border-amber-500">
    {errorLogin && 
      <div className="z-10 fixed min-w-[280px] rounded-[9px] min-h-[100px]  bg-[#dc3545]">
      <div className="mt-[2.2rem]"><h1 className=" text-[1.2rem] font-bold text-white text-center ">Username or Password Error</h1></div>
    </div> }
    {successLogin && <div className="z-10 fixed min-w-[280px] rounded-[9px] min-h-[100px]  bg-[#198754]">
      <div className="mt-[2.2rem]"><h1 className=" text-[1.2rem] font-bold text-white text-center ">Login Success</h1></div>
    </div>}
      <div className=" w-[420px] sm:w-[350px] bg-transparent  border-2 border-amber-500 text-amber-500 rounded-[15px] py-[30px] px-[40px]">
        <form action="" onSubmit={handleSubmit}>
          <h1 className=" text-[36px] text-center font-extrabold">Sign In</h1>
          <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
            <input
              className="color_fill w-full h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
              type="text"
              placeholder="Username or Email"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <BiSolidUser className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]" />
          </div>
          <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
            <input
              className="color_fill w-full  h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
              {showPassword === false ? (
                <AiFillEye onClick={togglePassword} />
              ) : (
                <AiFillEyeInvisible onClick={togglePassword} />
              )}
            </span>
          </div>
          <div className=" flex justify-between text-[14.5px] mt-[-15px] my-0 mb-[15px]">
            <label htmlFor="">
              <input
                type="checkbox"
                className="accent-amber-500 mr-[3px]"
                checked={isChecked}
                name="lsRememberMe"
                onChange={onChangeCheckbox}
              />
              Remember me
            </label>
            <a href="" className=" hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full h-[45px] bg-amber-500 text-white border-none outline-none rounded-[40px] font-bold text-[20px] hover:text-black"
          >
            Sign In
          </button>
          <div className="text-[14.5px] text-center mt-[20px] mx-0 my-[15px]">
            <p>
              Don't have an account?{" "}
              <Link href="/SignUp" className=" font-bold hover:underline">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
