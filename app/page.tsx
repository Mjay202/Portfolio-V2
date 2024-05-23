"use client";
import Image from "next/image";
import { use, useEffect, useState } from "react";
export default function Home() {

  const [scroll, setscroll] = useState(false);
  
  useEffect(() => {
    seeScroll();
  }, [scroll])
  
  let scrollPosition = window.scrollY;
  const seeScroll = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setscroll(true);
      }
      if (window.scrollY == 0 || window.screenY < scrollPosition) {
        setscroll(false);
      }
    });
  }
  
  return (
    <main className="">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>

      <nav className={`z-10 ${!scroll ? "" : "hidden"}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-10">
          <Image
            className="hover:animate-bounce"
            src="/logo.png"
            alt="Next.js Logo"
            width={80}
            height={80}
            priority
          />
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  <span className="text-sm font-mono mr-1 text-emerald-400">
                    {" 01."}
                  </span>
                  <span className="text-md font-mono text-slate-300">
                    {"Home"}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  <span className="text-sm font-mono mr-1 text-emerald-400">
                    {" 02."}
                  </span>
                  <span className="text-md font-mono text-slate-300">
                    {"Experience"}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  <span className="text-sm font-mono mr-1 text-emerald-400">
                    {" 03."}
                  </span>
                  <span className="text-md font-mono text-slate-300">
                    {"Projects"}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  <span className="text-sm font-mono mr-1 text-emerald-400">
                    {" 04."}
                  </span>
                  <span className="text-md font-mono text-slate-300">
                    {"Contact"}
                  </span>
                </a>
              </li>
              <li className="place-content-center">
                <button
                  type="button"
                  className="transition ease-in-out bg-transparent border  focus:outline-none font-mono hover:shadow-lg focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-md px-5 py-2 me-2 mb-2 delay-150 border-emerald-400 text-emerald-400 hover:-translate-y-1 hover:scale-105  duration-300"
                >
                  Resume
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="px-36 mt-10 font-inter">
        <h4 className="text-sm text-teal-300 font-mono"> Hello</h4>
        <h3 className="text-lg text-teal-300 mt-4 font-mono">Welcome, my name is</h3>
        <h3 className="text-7xl text-slate-300 mt-7 font-bold">Mujeeb Hammed.</h3>
        <h3 className="text-7xl text-slate-500 mt-7 font-bold">Senior Backend Developer.</h3>
        <h3 className="text-7xl text-slate-500 mt-7 font-bold">Senior Backend Developer.</h3>
        <h3 className="text-7xl text-slate-500 mt-7 font-bold">Senior Backend Developer.</h3>
        <h3 className="text-7xl text-slate-500 mt-7 font-bold">Senior Backend Developer.</h3>
        <h3 className="text-7xl text-slate-500 mt-7 font-bold">Senior Backend Developer.</h3>
        <h3 className="text-7xl text-slate-500 mt-7 font-bold">Senior Backend Developer.</h3>
        <h3 className="text-7xl text-slate-500 mt-7 font-bold">Senior Backend Developer.</h3>
        <h3 className="text-7xl text-slate-500 mt-7 font-bold">Senior Backend Developer.</h3>
      </div>

      {/* <div className="relative z-[-1] flex justify-between mt-20 px-20 place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-emerald-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-emerald-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#01ffd0] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div>Name</div>
        <div>Another</div>
      </div> */}
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left"></div>
    </main>
  );
}
