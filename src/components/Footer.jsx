import React from "react";
import { useDarkMode } from "./DarkModeContext";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBuilding,
  FaMobile,
  FaFax,
  FaArrowUp,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } w-full m-auto lg:px-20 px-10 py-20 lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}
      >
        <div className="lg:flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">About Us</h1>
          <p className="text-slate-200 text-justify">
            Good real estate investment can be a valuable addition to your
            portfolio. There are various ways to invest in real estate, each
            with its unique benefits and risks.
          </p>
          <div
            id="social-icons"
            className="flex justify-start items-center gap-4 mt-4"
          >
            <div
              className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white 
                 cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              <FaFacebookF className="size-5" />
            </div>
            <div
              className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white 
                 cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram className="size-5" />
            </div>
            <a
              href="https://twitter.com/BankybennyD"
              target="blank"
              className="ml-1 h-[inherit]"
            >
              <div
                className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white 
                 cursor-pointer transform hover:scale-110 transition-transform duration-300"
              >
                <FaTwitter className="size-5" />
              </div>
            </a>
            <div
              className="p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white 
                 cursor-pointer transform hover:scale-110 transition-transform duration-300"
            >
              <FaYoutube className="size-5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">Contact Us</h1>
          <div className="flex justify-center items-center gap-3">
            <FaBuilding className="text-white size-6 " />
            <p className="text-slate-200">
              By investing in real estate, you may benefit from this
              appreciation, allowing you to build wealth as the property value
              increases.
            </p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMobile className="text-white size-5" />
            <p className="text-slate-200">+2349068767395</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaArrowUp className="text-white size-5" />
            <p className="text-slate-200">+2349068767395</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaFax className="text-white size-5" />
            <p className="text-slate-200">+2349068767395</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoMdMail className="text-white size-5" />
            <p className="text-slate-200">oduluyidavidadegoke@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white text-2xl font-semibold">
            Latest Properties
          </h1>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop7}
              alt=""
              className="w-[120px] rounded-lg  transform hover:scale-110 
                cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">Villa with amazing view</h1>
              <p className="text-slate-400">$ 287.98</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              src={prop8}
              alt=""
              className="w-[120px] rounded-lg  transform hover:scale-110 
                cursor-pointer transition-transform duration-300"
            />
            <div>
              <h1 className="text-lg text-white">Smart view from beach</h1>
              <p className="text-slate-400">$ 587.98</p>
            </div>
          </div>
        </div>
      </footer>

      {/*slide-to-top button*/}

      <div
        id="icon-box"
        className="bg-red-600 p-4 rounded-full hover:bg-black 
       cursor-pointer fixed lg:buttom-12 buttom-6 right-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-6 text-white" />
        </Link>
      </div>

      {/*dark mode toggle button section*/}
      <div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center p-4 
        rounded-full bg-orange-500 fixed top-20 right-6 z-30"
        >
          {darkMode ? (
            <FaMoon size={20} className="text-black" />
          ) : (
            <FaSun size={20} className="text-black" />
          )}
        </button>
        <h1 className="bg-black text-white mt-8 bottom-0 justify-center items-center">
            Copyright 2024 ROHBERN HOMES,All Rights Reserved
        </h1>
      </div>
    </>
  );
};

export default Footer;
