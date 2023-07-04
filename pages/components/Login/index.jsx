import { UserDataContext } from "@/pages/context/UserData";
import React, { useContext } from "react";
import Loading from "../Loading";
import { BiEdit, BiTrash } from "react-icons/bi";
import Link from "next/link";

export default function index() {
  const { user, loading, logOut,deleteUser} = useContext(UserDataContext);
  if (loading === true) return <Loading />;

  return (
    <div className="">
        <div className="flex justify-between m-[1rem] mb-[4rem] sm:mb-[2rem]">
            <h1 className="text-[3rem] font-extrabold text-amber-500 sm:text-[2rem] fold:text-[1rem] text-center">CRUD Web App</h1>
            <button className="logout_btn sm:text-[1rem] fold:text-[0.5rem]" onClick={logOut}>Log Out</button>
        </div>
      <div className=" flex justify-end m-[1rem]">
        <Link href='/' className="create_btn sm:text-[1rem] fold:text-[0.5rem]">Create User</Link>
      </div>
      <div>
        {user.map((user, index) => {
          return (
            <div
              className="grid grid-cols-[repeat(5,1fr)] fold:grid-cols-4 m-[1rem] items-center justify-center"
              key={index}
            >
              <div className="w-[100px] h-[100px] sm:w-[50px] sm:h-[50px] ">
                <img src={user.avatar} alt={user.avatar} />
              </div>
              <div className="sm:text-[0.5rem] sm:pl-[0.5rem]">
                <p>{user.fname}</p>
              </div>
              <div className="sm:text-[0.5rem] sm:pl-[0.5rem]">
                <p>{user.lname}</p>
              </div>
              <div className="sm:text-[0.5rem] sm:pl-[0.5rem] fold:hidden">
                <p>{user.username}</p>
              </div>
              <div className="flex justify-center pl-[1rem] cursor-pointer">
                <BiEdit className=" text-green-500 mr-[10px] text-[2rem] sm:text-[1rem]" />
                <BiTrash onClick={() => deleteUser(user.id)} className=" text-red-500 text-[2rem] sm:text-[1rem]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
