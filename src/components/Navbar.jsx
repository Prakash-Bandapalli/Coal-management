import { useState } from "react";
import Header from "./Header";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <div className="flex items-center lg:justify-around justify-between px-4">
        <Header />
        <div className="ml-24">
          <ul className="hidden lg:flex gap-14 font-semibold text-xl">
            <li className="shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200 px-4 rounded-xl  hover:text-white hover:bg-black cursor-pointer flex items-center">
              <Link to="/">Home</Link>
            </li>
            <li className="shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200 rounded-xl px-2 hover:text-white hover:bg-black cursor-pointer flex items-center">
              <Link to="/about">About Us</Link>
            </li>
            {/* <li className="shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200 rounded-lg px-2 hover:text-darkGrayishBlue cursor-pointer">
              <Link to="/login">Login</Link>
            </li> */}
            {/* <li className="shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200 rounded-lg px-2 hover:text-darkGrayishBlue cursor-pointer">
              <Link to="/register">Register</Link>
            </li> */}
            <li className="p-4 px-8 rounded-full bg-lightBlue hover:opacity-80 md:px-20 md:text-2xl shadow-sm hover:-translate-y-0.5 hover:shadow-md duration-200">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <button onClick={() => setToggle((prev) => !prev)}>
          <FaBars className="lg:hidden text-2xl" />
        </button>

        {toggle && (
          <div className="fixed bg-white inset-0">
            <div className="flex items-center lg:justify-around justify-between px-4">
              <Header />
              <button onClick={() => setToggle((prev) => !prev)}>
                <IoMdClose className="lg:hidden text-3xl" />
              </button>
            </div>
            <ul className="flex flex-col gap-8 text-xl font-semibold items-center">
              <li
                onClick={() => setToggle((prev) => !prev)}
                className="text-center w-full hover:bg-grayishBlue duration-200 py-2"
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => setToggle((prev) => !prev)}
                className="text-center w-full hover:bg-grayishBlue duration-200 py-2"
              >
                <Link to="/about">About Us</Link>
              </li>
              <li
                onClick={() => setToggle((prev) => !prev)}
                className="text-center w-full hover:bg-grayishBlue duration-200 py-2"
              >
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
