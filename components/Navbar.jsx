import Link from "next/link";
import { useState } from "react";
import Logo from "../assets/images/logo.png";
import Image from "next/image";


export const Navbar = ({ onClick, navbar }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav
        className={
          !navbar
            ? "z-10 sticky top-0 bg-nav bg-cover bg-no-repeat   flex items-center flex-wrap bg-my_bg_image  py-3 md:px-20 px-5 "
            : "z-10 sticky top-0 bg-footer flex items-center flex-wrap  py-4 md:px-24 px-5  backdrop-blur-xs"
        }
      >
        <Link href="/">
          <a className="inline-flex items-center  mr-4 ">
            <Image src={Logo} width={200} height={70} alt="" />
          </a>
        </Link>
        <button
          className=" inline-flex p-3 bg-secondary rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:mr-40 lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a
                className={
                  !navbar
                    ? "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font- items-center justify-center"
                    : "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font- items-center justify-center"
                }
              >
                Jobs
              </a>
            </Link>
            <Link href="/">
              <a
                className={
                  !navbar
                    ? "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-600 font- items-center justify-center"
                    : "lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font- items-center justify-center"
                }
              >
                Post jobs
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-primary font-bold items-center justify-center">
                <button
                  type="text"
                  className=" text-sm bg-secondary text-white rounded-lg px-5 py-2"
                  onClick={onClick}
                >
                  Login/Sign up
                </button>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
