import Link from "next/link";
import React, {  useState } from "react";
import { BiSolidUser, BiCheckCircle } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { AiFillEye,AiFillEyeInvisible } from "react-icons/ai";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //check error
  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  //check color
  const [userNameColor, setUserNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  //check icon
  const [userNameCheck, setUserNameCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [confirmPasswordCheck, setConfirmPasswordCheck] = useState(false);

  //email form check
//   const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //password visibility
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    formCheck();
  };

  const formCheck = () => {
    // if(userName.length === 0){
    //     setErrorUserName("")
    //     setUserNameColor("")
    //     setUserNameCheck(false)
    // } else 
    if (userName.length >= 6) {
        setErrorUserName("");
        setUserNameColor("green");
        setUserNameCheck(true);
      } else {
        setErrorUserName("Username must be at least 6 characters");
        setUserNameColor("red");
        setUserNameCheck(false);
      }
  
      if (email.match(valid)) {
        setErrorEmail("");
        setEmailColor("green");
        setEmailCheck(true);
      } else {
        setErrorEmail("Email  is invalid");
        setEmailColor("red");
        setEmailCheck(false);
      }
  
      if (password.length >= 8) {
        setErrorPassword("");
        setPasswordColor("green");
        setPasswordCheck(true);
      } else {
        setErrorPassword("Password must be at least 8 characters");
        setPasswordColor("red");
        setPasswordCheck(false);
      }
  
      if (
        confirmPassword === password &&
        confirmPassword.length >= 8
      ) {
        setErrorConfirmPassword("");
        setConfirmPasswordColor("green");
        setConfirmPasswordCheck(true);
      } else {
        setErrorConfirmPassword("Passwords not match");
        setConfirmPasswordColor("red");
        setConfirmPasswordCheck(false);
      }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const togglePasswordCheck = () =>  {
    if (passwordCheck === true){
       return  <BiCheckCircle style={{ color: passwordColor }} onClick={togglePassword} />
    } else if(showPassword === false){
       return <AiFillEye onClick={togglePassword} className=" cursor-pointer" />
    } else {
       return <AiFillEyeInvisible onClick={togglePassword} className=" cursor-pointer" />
    }
  }

  const toggleConfirmPasswordCheck = () =>  {
    if (confirmPasswordCheck === true){
       return  <BiCheckCircle style={{ color: confirmPasswordColor }} onClick={toggleConfirmPassword} />
    } else if(showConfirmPassword === false){
       return <AiFillEye onClick={toggleConfirmPassword} className=" cursor-pointer" />
    } else {
       return <AiFillEyeInvisible onClick={toggleConfirmPassword} className=" cursor-pointer" />
    }
  }

//   useEffect(()=>{formCheck();},[userName,email,password,confirmPassword])

  return (
    <div className=" flex justify-center items-center min-h-screen bg-black border-y-2  border-amber-500">
      <div className=" w-[420px] sm:w-[350px] bg-transparent  border-2 border-amber-500 text-amber-500 rounded-[15px] py-[30px] px-[40px]">
        <form action="" onSubmit={handleSubmit}>
          <h1 className=" text-[36px] text-center font-extrabold">Register</h1>
          <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
            <input
              className="color_fill w-full h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ borderColor: userNameColor }}
            />
            <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
              {userNameCheck === true ? (
                <BiCheckCircle style={{ color: userNameColor }} />
              ) : (
                <BiSolidUser />
              )}
            </span>
            <small className="pl-[20px] " style={{ color: userNameColor }}>
              {errorUserName}
            </small>
          </div>
          <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
            <input
              className="color_fill w-full h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none  border-2 border-white/20 rounded-[40px] focus:border-amber-500  placeholder:text-white/70"
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: emailColor }}
            />
            <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
              {emailCheck === true ? (
                <BiCheckCircle style={{ color: emailColor }} />
              ) : (
                <GrMail />
              )}
            </span>

            <small className="pl-[20px] " style={{ color: emailColor }}>
              {errorEmail}
            </small>
          </div>
          <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
            <input
              className="color_fill w-full  h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: passwordColor }}
            />
            <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
              {togglePasswordCheck()}
              {/* {passwordCheck === true ? (
                <BiCheckCircle style={{ color: passwordColor }} />
              ) : (
               <AiFillEye />
              )} */}
            </span>
            <small className="pl-[20px] " style={{ color: passwordColor }}>
              {errorPassword}
            </small>
          </div>
          <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
            <input
              className="color_fill w-full  h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ borderColor: confirmPasswordColor }}
            />
            <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
                {toggleConfirmPasswordCheck()}
              {/* {confirmPasswordCheck === true ? (
                <BiCheckCircle style={{ color: confirmPasswordColor }} />
              ) : (
                <BiSolidLockAlt />
              )} */}
            </span>
            <small
              className="pl-[20px] "
              style={{ color: confirmPasswordColor }}
            >
              {errorConfirmPassword}
            </small>
          </div>

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
