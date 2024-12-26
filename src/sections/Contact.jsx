import React, { useEffect, useState } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();

  // Define validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name can't be longer than 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{11}$/, "Phone number must be exactly 11 digits")
      .required("Phone number is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  // Initialize Formik with form state and validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);

      // Send email using EmailJS
      emailjs
        .send(
          "service_ryniztr",
          "template_vv9w5cf",
          {
            from_name: values.name,
            email: values.email,
            number: values.phoneNumber,
            message: values.message,
          },
          "k9sAbH6MRzJlJVBm4"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsLoading(false);
            toast.success("Email sent successfully! We will get back to you shortly", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: darkMode ? "dark" : "light",
            });
            resetForm(); // Reset form on successful submission
          },
          (error) => {
            setIsLoading(false);
            console.error(error.text);
            toast.error("Failed to send email. Please try again.", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: darkMode ? "dark" : "light",
            });
          }
        );
    },
  });

  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <ToastContainer />
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-blue-100"
        } lg:w-[95%] w-ful h-fit m-auto 
      rounded-xl grid lg:grid-cols-2 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
        id="contact"
      >
        <div
          data-aos="zoom-out"
          className="bg-white dark:bg-black p-10 flex flex-col 
         justify-center items-start gap-4 rounded-xl w-full"
        >
          <form
            className="contactForm flex flex-col gap-3"
            onSubmit={formik.handleSubmit}
          >
            <h1 className="text-2xl text-black font-semibold dark:text-white space-x-3">
              Contact Us
            </h1>
            {/* Name Field */}
            <input
              type="text"
              name="name"
              placeholder="Enter your full name here"
              className={`w-full px-6 py-3 border-2 rounded-xl ${
                formik.touched.name && formik.errors.name
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            )}

            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Enter your valid email"
              className={`w-full px-6 py-3 border-2 rounded-xl ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}

            {/* Phone Number Field */}
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your valid mobile number"
              className={`w-full px-6 py-3 border-2 rounded-xl ${
                formik.touched.phoneNumber && formik.errors.phoneNumber
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phoneNumber}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="text-red-500 text-sm">
                {formik.errors.phoneNumber}
              </div>
            )}

            {/* Message Field */}
            <textarea
              name="message"
              cols="30"
              rows="5"
              placeholder="Enter your message here..."
              className={`w-full px-6 py-3 border-2 rounded-xl ${
                formik.touched.message && formik.errors.message
                  ? "border-red-500"
                  : "border-gray-200"
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500 text-sm">{formik.errors.message}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="btn px-14 py-4 shadow-sm bg-blue-700 w-full text-md text-white font-semibold 
               rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer"
            >
              {isLoading ? "Loading..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
