import React, { useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { AnimeDataContext } from '../context/AnimeData'

export default function Header() {
    const { handleSubmit, search, setSearch } = useContext(AnimeDataContext)
  return (
    <header>
    <div className=" min-h-[70vh] bg-headImage   bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center text-white text-center  ">
      <h2 className=" text-[4.2rem] mb-[2rem] md:text-[3rem] sm:text-[1.5rem]">
        Find You
        <span className="text-amber-500 font-extrabold underline">Anime</span>
        Of Choice.
      </h2>
      <p className="  mb-[2.8rem] max-w-[770px] opacity-[0.8] text-[1.8rem] font-[300] md:text-[1.8rem] sm:text-[0.8rem]  leading-[1.7]  ">
        There are many anime e.g. One Piece , Naruto , Bleach , Demon Slayer ,
        Chuunibyou , Tonikaku Kawaii , Yahari etc.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between px-[2.8rem] sm:px-[2rem]  rounded-[3.8rem] bg-transparent border-2 ">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Anime ..."
            className="bg-transparent  text-[1.8rem] p-[0.6rem]  font-bold  text-amber-500 outline-none placeholder:opacity-70 placeholder:text-amber-500 sm:text-[1rem] fold:text-[0.65rem]"
          />
          <button
            onClick={handleSubmit}
            className="flex items-center justify-center "
          >
            <FaSearch className=" text-amber-500 hover:text-black text-[32px] sm:text-[25px]" />
          </button>
        </div>
      </form>
    </div>
  </header>
  )
}
