import { UserDataContext } from '@/pages/context/UserData';
import React, { useContext } from 'react'
import { BsCardImage } from "react-icons/bs";
import { BiSolidUser} from "react-icons/bi";
import { GrMail } from "react-icons/gr";



export default function CreateUser() {
    const { createUserSubmit,setFname,setLname,setUsernameCreate,setAvatar, fname,lname,usernameCreate,avatar } = useContext(UserDataContext);

    
  return (
    <div className=" flex justify-center items-center min-h-screen bg-black border-y-2  border-amber-500">
    <div className=" w-[420px] sm:w-[350px] bg-transparent  border-2 border-amber-500 text-amber-500 rounded-[15px] py-[30px] px-[40px]">
      <form action="" onSubmit={createUserSubmit}>
        <h1 className=" text-[36px] text-center font-extrabold">Create User</h1>
        <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
          <input
            className="color_fill w-full h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
           
           
          />
             <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
           
           <BiSolidUser />
           </span>
         
        </div>
        <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
          <input
            className="color_fill w-full h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none  border-2 border-white/20 rounded-[40px] focus:border-amber-500  placeholder:text-white/70"
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            
          
          />
              <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
           
           <BiSolidUser />
           </span>
     
        </div>
        <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
          <input
            className="color_fill w-full  h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
            type="text"
            placeholder="E-mail"
            value={usernameCreate}
            onChange={(e) => setUsernameCreate(e.target.value)}
            
         
          />
             <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
           
           <GrMail />
           </span>
        
    
        </div>
        <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
          <input
            className="color_fill w-full  h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
            type="url"
            placeholder="Image URL"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            

          />
          <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
         <BsCardImage />
          </span>
      
        </div>

        <button
          type="submit"
          className="w-full h-[45px] bg-amber-500 text-white border-none outline-none rounded-[40px] font-bold text-[20px] hover:text-black"
        >
          Create User
        </button>
     
      </form>
    </div>
  </div>

  )
}
