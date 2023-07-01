import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaCaretDown, FaGrunt } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);
  const active = useRouter();

  return (
    <div className="relative py-2 px-8 bg-black text-amber-500">
      <div
        className={
          toggle
            ? `navbar w-full h-16   mx-0 my-auto  flex items-center justify-between`
            : `w-full h-16   mx-0 my-auto  flex items-center justify-between`
        }
      >
        <div className={`logo sm:text-3xl font-extrabold  text-5xl`}>
          Anime.
        </div>
        <ul className={`link flex gap-10 text-2xl font-bold  `}>
          <li className={active.pathname == "/" ? `active` : ""}>
            <Link
              href="/"
              onClick={toggleMenu}
              className={active.pathname == "/" ? `active` : "hover:underline"}
            >
              Home
            </Link>
          </li>
          <li className={active.pathname == "/0" ? `active` : ""}>
            <div className={`dropdown relative inline-block`}>
              <span className=" cursor-pointer">
                Top Anime
                <FaCaretDown className=" text-xl inline-block ml-1" />
              </span>

              <div
                className={`dropdown_content min-w-[160px]  absolute z-10 rounded-xl bg-black hidden  `}
              >
                <div className="grid grid-cols-1">
                  <a
                    href="/components/AnimeList/50410"
                    onClick={toggleMenu}
                    className="py-3 px-4 text-xl  hover:text-white "
                  >
                    <FaGrunt className="inline-block mr-2" />
                    <span>One Piece</span>
                  </a>

                  <a
                    href="/components/AnimeList/1735"
                    onClick={toggleMenu}
                    className="py-3 px-4 text-xl border-t-2 border-amber-500 hover:text-white"
                  >
                    <FaGrunt className="inline-block mr-2" />
                    <span>Naruto</span>
                  </a>

                  <Link
                    href="/components/AnimeList/269"
                    onClick={toggleMenu}
                    className="py-3 px-4 text-xl border-t-2 border-amber-500  hover:text-white "
                  >
                    <FaGrunt className="inline-block mr-2" />
                    <span>Bleach</span>
                  </Link>

                  <a
                    href="/components/AnimeList/34096"
                    onClick={toggleMenu}
                    className="py-3 px-4 text-xl border-t-2 border-amber-500  hover:text-white "
                  >
                    <FaGrunt className="inline-block mr-2" />
                    <span>Gintama</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className={active.pathname == "/0" ? `active` : ""}>
            <Link
              href="/"
              onClick={toggleMenu}
              className={active.pathname == "/0" ? `active` : " hover:underline"}
            >
              Sign In
            </Link>
          </li>
          <li className={active.pathname == "/0" ? `active` : ""}>
            <Link
              href="/"
              onClick={toggleMenu}
              className={active.pathname == "/0" ? `active` : "hover:underline"}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <div
          className={`toggle sm:block hidden text-2xl cursor-pointer  `}
          onClick={toggleMenu}
        >
          {toggle ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}
