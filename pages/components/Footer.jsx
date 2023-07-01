import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="  grid justify-center content-end  p-[50px] bg-black text-amber-500 ">
      <footer className=" relative w-full  py-[50px] px-[100px] sm:px-[80px] fold:px-[30px]">
        <div className=" md:grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(1,1fr)] w-full grid grid-cols-[2fr_1fr_1fr_1fr] gap-[20px] ">
          <div>
            <h2 className=" relative font-bold mb-[15px]">About US</h2>
            <p className=" text-indigo-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              odit reprehenderit? Quas repudiandae labore perferendis laborum
              voluptatum? Mollitia, a et?
            </p>
            <ul className="mt-[20px] grid grid-cols-[repeat(4,50px)]">
              <li>
                <a
                  href="/"
                  className="  w-[36px] h-[36px] bg-amber-500 grid content-center justify-center rounded-full "
                >
                  <FaFacebook className="text-black text-xl hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" w-[36px] h-[36px] bg-amber-500 grid content-center justify-center rounded-full "
                >
                  <FaTwitter className="text-black text-xl hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="  w-[36px] h-[36px] bg-amber-500 grid content-center justify-center rounded-full "
                >
                  <FaInstagram className="text-black text-xl hover:text-white" />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className=" \ w-[36px] h-[36px] bg-amber-500 grid content-center justify-center rounded-full "
                >
                  <FaYoutube className="text-black text-xl hover:text-white" />
                </a>
              </li>
            </ul>
          </div>
          <div className=" relative">
            <h2 className=" relative font-bold mb-[15px]">Support</h2>
            <ul>
              <li>
                <a
                  href="/"
                  className="mb-[10px] inline-block text-indigo-100 hover:text-amber-500"
                >
                  FQA
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-[10px] inline-block text-indigo-100 hover:text-amber-500"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-[10px] inline-block text-indigo-100 hover:text-amber-500"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-[10px] inline-block text-indigo-100 hover:text-amber-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="relative">
            <h2 className=" relative font-bold mb-[15px]">Anime</h2>
            <ul>
              <li>
                <a
                  href="/"
                  className="mb-[10px] inline-block text-indigo-100 hover:text-amber-500"
                >
                  One Piece
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-[10px] inline-block text-indigo-100 hover:text-amber-500"
                >
                  Naruto
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-[10px] inline-block text-indigo-100 hover:text-amber-500"
                >
                  Bleach
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-[10px] inline-block text-indigo-100 hover:text-amber-500"
                >
                  Gintama
                </a>
              </li>
            </ul>
          </div>
          <div className="relative">
            <h2 className=" relative font-bold mb-[15px]">Contact Us</h2>
            <ul>
              <li className="grid grid-cols-[30px_1fr]  mb-[10px]">
                <span className="text-[20px] mb-[10px]">
                  <FaPhoneAlt />
                </span>
                <p>000-000-0000</p>
              </li>
              <li className="grid grid-cols-[30px_1fr]  mb-[10px]">
                <span className="text-[20px] mb-[10px]">
                  <FaEnvelope />
                </span>
                <p>mail@info.com</p>
              </li>
              <li className="grid grid-cols-[30px_1fr]  mb-[10px]">
                <span className="text-[20px] mb-[10px]">
                  <FaLocationDot />
                </span>
                <p>Bangkok Thailand</p>
              </li>
              <li className="grid grid-cols-[30px_1fr]">
                <form className="grid grid-cols-[180px_30px]">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="border-2 border-white  bg-transparent rounded-sm outline-none text-white placeholder:text-white pl-[5px]"
                  />
                  <button className="text-amber-500 hover:text-white text-2xl ">
                    <FaTelegramPlane className="ml-[10px]" />
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="w-full pt-[20px] px-[100px]  text-center border-t-2 border-white">
        <p>Copyright ©2023 Anime Website</p>
      </div>
    </div>
  );
}
