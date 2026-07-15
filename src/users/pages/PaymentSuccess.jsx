import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

function PaymentSuccess() {
  return (
    <>
      <Header />
      <div className="container min-h-screen flx justify-center items-center">
        <div className="md:grid grid-cols-2 px-20 justify-center items-center my-10">
          <div>
            <h1 className="text-blue-600 md:text-3xl font-bold">
              Congratulations
            </h1>
            <p className="text-2xl my-10">
              Thank you for purchasing with Bookstore. Hope you have a good time
              with us...
            </p>
            <Link
              to={"/books"}
              className="flex bg-blue-600 p-2 text-white font-bold w-60 items-center"
            >
              {" "}
              <FaBackward className="me-3" />
              Explore More Books...
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif"
              alt="success"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentSuccess;
