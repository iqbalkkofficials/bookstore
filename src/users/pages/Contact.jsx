import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import {
  FaEnvelope,
  FaLocationPin,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, message } = form.current;
    if (name.value && email.value && message.value) {
      emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
          () => {
            console.log("SUCCESS!");
            toast.success("Thank you contacting us...")
            form.current.reset()
          },
          (error) => {
            console.log("FAILED...", error.text);
          },
        );
    } else {
      toast.warning("Please fill the form completely!!!")
    }
  };

  return (
    <>
      <Header />
      <div className="md:px-20 p-5 my-5">
        <h1 className="text-3xl font-bold text-center"> Contact Us</h1>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          impedit distinctio similique ea voluptas. Optio fuga magni, enim,
          molestiae nemo molestias deserunt reprehenderit reiciendis qui
          cupiditate, velit similique mollitia! Expedita. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur impedit distinctio similique
          ea voluptas. Optio fuga magni, enim, molestiae nemo molestias deserunt
          reprehenderit reiciendis qui cupiditate, velit similique mollitia!
          Expedita. Lorem ipsum dolor sit amet consectetur adipisicing
          elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consectetur impedit distinctio similique ea voluptas. Optio fuga
          magni, enim, molestiae nemo molestias deserunt reprehenderit
          reiciendis qui cupiditate, velit similique mollitia! Expedita. Lorem
          ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className="md:grid grid-cols-3 items-center md:px-40 p-5 mt-5 md:mt-0">
          <div className="flex items-center">
            <div
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              className="bg-gray-200 flex items-center justify-center"
            >
              <FaLocationPin />
            </div>
            <p className="ms-5">12A Bowdon Road, Walthamstow, London</p>
          </div>
          <div className="flex items-center">
            <div
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              className="bg-gray-200 flex items-center justify-center"
            >
              <FaPhone />
            </div>
            <p className="ms-5">+44 774333778</p>
          </div>
          <div className="flex items-center">
            <div
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              className="bg-gray-200 flex items-center justify-center"
            >
              <FaEnvelope />
            </div>
            <p className="ms-5">contact@bookstore.com</p>
          </div>
        </div>
        <div className="md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40">
          {/* form */}
          <div className="bg-gray-100 p-5 text-center">
            <h1 className="text-semi-bold text-2xl">Send Us Message!</h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-5 mt-10">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="bg-white w-full p-2"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="bg-white w-full p-2"
                />
              </div>
              <div className="mb-5">
                <textarea
                  type="text"
                  placeholder="Message"
                  name="message"
                  className="bg-white w-full p-2"
                />
              </div>
              <div className="mb-5">
                <button
                  type="submit"
                  className="bg-black w-full p-2 text-white flex justify-center items-center"
                >
                  Submit <FaPaperPlane className="ms-2" />
                </button>
              </div>
            </form>
          </div>
          {/* map embed */}
          <div className="mt-5 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7797400255727!2d-0.13152942319069505!3d51.517256809983095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2d7e43158d%3A0x347702e5a39ddf7d!2sThe%20Bloomsbury%20Hotel!5e0!3m2!1sen!2suk!4v1784626797991!5m2!1sen!2suk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
