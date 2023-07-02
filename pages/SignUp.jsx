import Link from "next/link";
import React from "react";
import { BiSolidUser, BiSolidLockAlt } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

export default function SignUp() {
  return (
    <div className=" flex justify-center items-center min-h-[90vh] bg-black border-y-2  border-amber-500">
      <div className=" w-[420px] sm:w-[350px] bg-transparent  border-2 border-amber-500 text-amber-500 rounded-[15px] py-[30px] px-[40px]">
        <form action="">
          <h1 className=" text-[36px] text-center font-extrabold">Register</h1>
          <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
            <input
              className="w-full h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
              type="text"
              placeholder="Username"
            />
            <BiSolidUser className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]" />
            <small className="pl-[20px] "> Email error </small>
          </div>
          <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
            <input
              className="w-full h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
              type="text"
              placeholder="E-mail"
            />
            <GrMail className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]" />
            <small className="pl-[20px] "> Email error </small>
          </div>
          <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
            <input
              className="w-full  h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
              type="password"
              placeholder="Password"
            />
            <BiSolidLockAlt className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px] " />
            <small className="pl-[20px] "> Email error </small>
          </div>
          <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
            <input
              className="w-full  h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
              type="password"
              placeholder="Confirm Password"
            />
            <BiSolidLockAlt className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px] " />
            <small className="pl-[20px] "> Email error </small>
          </div>
          {/* <div className=" flex justify-between text-[14.5px] mt-[-15px] my-0 mb-[15px]">
               <label htmlFor="" ><input type="checkbox" className='accent-amber-500 mr-[3px]' />Remember me</label>
               <a href="" className=' hover:underline'>Forgot Password?</a>
           </div> */}
          <button
            type="submit"
            className="w-full h-[45px] bg-amber-500 text-white border-none outline-none rounded-[40px] font-bold text-[20px] hover:text-black"
          >
            Register
          </button>
          <div className="text-[14.5px] text-center mt-[20px] mx-0 my-[15px]">
            <p>
              You have an account?{" "}
              <Link href="/SignIn" className=" font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
