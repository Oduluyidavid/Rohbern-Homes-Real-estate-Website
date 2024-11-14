import React, { useEffect, useRef, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_8m46np8",
        "template_tfb16yq",
        form.current,
        "rULTBWkjdEMpYeEDU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          alert("Email Sent");
        },
        (error) => {
          setIsLoading(false);
          console.log(error.text);
        }
      );
  };

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
         justify-center items-start gap-4 rounded-xl w-full"
        >
          <form
            className="contactForm flex flex-col gap-3"
            ref={form}
            onSubmit={sendEmail}
          >
            <h1 className="text-2xl text-black font-semibold dark:text-white space-x-3">
              Send us a message today
            </h1>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your full name here"
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl p-5 space-x-3"
            />
            <input type="text" name="to_name" value={"Rohbern Homes"} hidden />
            <input
              type="email"
              name="email"
              placeholder="Enter your valid email"
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl p-5"
            />
            <input
              type="number"
              placeholder="Enter your vaild mobile number"
              name="number"
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl p-5"
            />
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Enter your message here...
          "
              className="w-full px-6 py-3 border-2 border-gray-200 rounded-xl p-5 "
            ></textarea>
            <button
              type="Sumbit"
              disabled={isLoading}
              value="send"
              onClick={(e) => {
                sendEmail(e);
              }}
              className="btn px-14 py-4 shadow-sm bg-red-600 w-full text-md text-white font-semibold 
               rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer p-5"
            >
              {isLoading ? "loading..." : "Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
