import React, { useContext, useState } from 'react'
import { BsCardImage } from "react-icons/bs";
import { BiSolidUser} from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { UserDataContext } from '@/pages/context/UserData';
import { useRouter } from 'next/router';
import axios from 'axios';


export const getStaticPaths = async() => {

    const res = await axios.get("https://www.melivecode.com/api/users");
    const user = await res.data
    const paths = user.map((data) => `/components/Login/${data.id}`);
    
    return {
        paths,
        fallback: false,
    } 

} 

export const getStaticProps = async({params}) => {
    // const id = params.id
    const res = await axios.get(`https://www.melivecode.com/api/users/${params.id}`);
    const user = await res.data.user
    console.log(user)
    return {
      props: {user},
    } 
    
} 



export default function Detail({user}) {
    const {  EditSubmit,fnameEdit,lnameEdit,usernameEdit,avatarEdit,setAvatarEdit,setUsernameEdit,setFnameEdit,setLnameEdit ,Url } = useContext(UserDataContext);
    // const router = useRouter();
    // const { id } = router.query;
  
    
  return (
    <div className=" flex justify-center items-center min-h-screen bg-black border-y-2  border-amber-500">
    <div className=" w-[420px] sm:w-[350px] bg-transparent  border-2 border-amber-500 text-amber-500 rounded-[15px] py-[30px] px-[40px]">
      <form action="" onSubmit={EditSubmit}>
        <h1 className=" text-[36px] text-center font-extrabold">Edit User</h1>
        <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
          <input
            className="color_fill w-full h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
            type="text"
            placeholder={user.fname}
            value={fnameEdit}
            onChange={(e) => setFnameEdit(e.target.value)}
           
           
          />
             <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
           
           <BiSolidUser />
           </span>
         
        </div>
        <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
          <input
            className="color_fill w-full h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none  border-2 border-white/20 rounded-[40px] focus:border-amber-500  placeholder:text-white/70"
            type="text"
            placeholder={user.lname}
            value={lnameEdit}
            onChange={(e) => setLnameEdit(e.target.value)}
        
          
          
          />
              <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
           
           <BiSolidUser />
           </span>
     
        </div>
        <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
          <input
            className="color_fill w-full  h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
            type="text"
            placeholder={user.username}
            value={usernameEdit}
            onChange={(e) => setUsernameEdit(e.target.value)}
            
         
          />
             <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
           
           <GrMail />
           </span>
        
    
        </div>
        <div className=" w-full h-[50px] my-[30px] mx-[0] relative">
          <input
            className="color_fill w-full  h-full bg-transparent pt-[20px] pr-[45px] pb-[20px] pl-[20px]  outline-none border-2 border-white/20 rounded-[40px] focus:border-amber-500 placeholder:text-white/70"
            type="url"
            placeholder={user.avatar}
            value={avatarEdit}
            onChange={(e) => setAvatarEdit(e.target.value)}
            

          />
          <span className=" absolute right-[20px] top-[50%] translate-y-[-50%]  text-[20px]">
         <BsCardImage />
          </span>
      
        </div>

        <button
          type="submit"
          className="w-full h-[45px] bg-amber-500 text-white border-none outline-none rounded-[40px] font-bold text-[20px] hover:text-black"
        >
          Edit User
        </button>
     
      </form>
    </div>
  </div>

  )
}


