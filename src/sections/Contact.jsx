import React, { useEffect, useRef, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();



  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] w-ful h-fit m-auto 
      rounded-xl grid lg:grid-cols-2  justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      id="contact"
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col 
         justify-center items-start gap-4 rounded-xl w-full" >
          <h1 className='text-2xl text-black font-semibold dark:text-white'>Send us a message today</h1>
          <input type='text' placeholder='Enter your full name here' 
          className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl p-5' />
          <input type='email' placeholder='Enter your valid email' 
          className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl p-5' />
          <input type='number' placeholder='Enter your vaild mobile number' 
          className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl p-5' />
          <textarea name='' id='' cols='30'rows='5' placeholder='Enter your message here...
          'className='w-full px-6 py-3 border-2 border-gray-200 rounded-xl p-5'></textarea>
          <button className='bg-red-600 w-full text-md px-8 py-3 text-white font-semibold 
          rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer p-5'>SEND MAIL</button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
