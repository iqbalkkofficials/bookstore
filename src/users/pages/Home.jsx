import React from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      {/* hero section */}
      <div
        style={{ height: "570px" }}
        className="flex flex-col justify-center items-center text-white bg-[url(/landing.jpg)] bg-cover bg-center"
      >
        <div
          style={{ height: "570px", backgroundColor: "rgba(0,0,0,0.4)" }}
          className="w-full flex flex-col justify-center items-center"
        >
          <h1 className="text-6xl font-bold">Wonderful Gifts</h1>
          <p>Give your family and friends a book</p>
          <div className="mt-8 flex items-center">
            <input
              type="text"
              placeholder="Search book here"
              className="rounded-4xl p-2 w-100 bg-white text-black"
            />
            <FaSearch
              className="text-gray-500 cursor-pointer"
              style={{ marginLeft: "-40px" }}
            />
          </div>
        </div>
      </div>
      {/* new book arrival */}
      <section className="md:px-40 my-5 p-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
        <h1 className="text-4xl my-2">Explore Our Latest Collection</h1>
        <div className="md:grid grid-cols-4 w-full my-10">
          {/* card */}
          <div className="shadow rounded p-3 m-4 md:my-0">
            <img
              width={"100%"}
              height={"300px"}
              src="/arrivalcard.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="text-xl font-bold">Dan Brown</h2>
              <h3 className="text-lg">The Da Vinci Code</h3>
              <p className="font-bold text-red-600">$18</p>
            </div>
          </div>
          <div className="shadow rounded p-3 m-4 md:my-0">
            <img
              width={"100%"}
              height={"300px"}
              src="/arrivalcard.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="text-xl font-bold">Dan Brown</h2>
              <h3 className="text-lg">The Da Vinci Code</h3>
              <p className="font-bold text-red-600">$18</p>
            </div>
          </div>
          <div className="shadow rounded p-3 m-4 md:my-0">
            <img
              width={"100%"}
              height={"300px"}
              src="/arrivalcard.jpg"
              alt=""
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="text-xl font-bold">Dan Brown</h2>
              <h3 className="text-lg">The Da Vinci Code</h3>
              <p className="font-bold text-red-600">$18</p>
            </div>
          </div>
          <div className="shadow rounded p-3 m-4 md:my-0">
            <img
              width={"100%"}
              height={"300px"}
              src="/arrivalcard.jpg"
              alt="book"
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="text-xl font-bold">Dan Brown</h2>
              <h3 className="text-lg">The Da Vinci Code</h3>
              <p className="font-bold text-red-600">$18</p>
            </div>
          </div>
        </div>
        <div className="text-center my-10">
          <Link to={"/books"} className="bg-black p-3 text-white">
            Explore More...
          </Link>
        </div>
      </section>

      {/* authors */}
      <section className="md:grid grid-cols-2 items-center gap-10 p-5 md:px-40">
        <div className="text-center">
          <h3 className="text-lg font-bold">FEATURED AUTHORS</h3>
          <h1 className="text-2xl font-bold">Captivates with every word</h1>
          <p className="my-5 text-justify font-bold">
            Authors in a bookstore application are the visionaries behind the
            books that fill the shelves, each contributing their own unique
            voice, creativity, and perspective to the world of literature.
            Whether writing fiction, non-fiction, poetry, or educational works,
            authors bring stories, ideas, and knowledge to life in ways that
            resonate with readers of all backgrounds.
          </p>
          <p className="my-5 text-justify font-bold">
            Their work spans a wide array of genres, from thrilling mysteries
            and heartwarming romances to thought-provoking memoirs and
            insightful self-help books. Through their words, authors not only
            entertain and inform but also inspire and challenge readers to think
            deeply, reflect, and grow. In a bookstore application, authors'
            works become accessible to readers everywhere, offering a diverse
            and rich tapestry of voices and experiences, all of which contribute
            to the evolving landscape of modern literature.
          </p>
        </div>
        <div>
          <img
            height={"100%"}
            width={"100%"}
            src="/authorimage.png"
            alt="authorimage"
          />
        </div>
      </section>

      {/* testimony */}
      <section className="md:px-40 my-5 p-5 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">TESTIMONIALS</h1>
        <h1 className="text-3xl my-2">See What Others Are Saying</h1>
        <div>
          <img width={"89px"} height={"89px"} src="/user.png" alt="user" />
        </div>
        <h1 className="text-2xl font-bold mt-2">Treesa Joseph</h1>
        <p className="my-5 text-justify font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          impedit distinctio similique ea voluptas. Optio fuga magni, enim,
          molestiae nemo molestias deserunt reprehenderit reiciendis qui
          cupiditate, velit similique mollitia! Expedita. Lorem ipsum dolor sit
          amet consectetur adipisicing elit
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Home;
