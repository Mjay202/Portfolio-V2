import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";
import { SiHandshakeProtocol } from "react-icons/si";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mujeeb Hammed",
  description: "Portfolio Version 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`relative ${inter.className}`}>
        <nav className="fixed top-0 left-0 right-0 bg-black">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-10">
            {/* <Image
            className="hover:animate-bounce"
            src="/logo.png"
            alt="Next.js Logo"
            width={80}
            height={80}
            priority
          /> */}
            <SiHandshakeProtocol className="text-emerald-400 text-4xl hover:animate-spin" />
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3   rounded md:bg-transparent  md:p-0 "
                    aria-current="page"
                  >
                    <span className="text-sm font-mono mr-1 text-emerald-400">
                      {" 01."}
                    </span>
                    <span className="text-md hover:text-emerald-400 font-mono text-slate-300">
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
                    <span className="text-md hover:text-emerald-400 font-mono text-slate-300">
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
                    <span className="text-md hover:text-emerald-400 font-mono text-slate-300">
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
                    <span className="text-md hover:text-emerald-400 font-mono text-slate-300">
                      {"Contact"}
                    </span>
                  </a>
                </li>
                <li className="place-content-center">
                  <button
                    type="button"
                    className="hover:border-r-4 font-mono  hover:border-b-4 py-2 px-5 me-2 mb-2 text-md font-medium  focus:outline-none bg-transparent rounded-lg border border-emerald-400 transition ease-out duration-300 hover:scale-105 text-emerald-400 focus:z-10 focus:ring-2 focus:ring-emerald-100"
                  >
                    Resume
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}

        {/* Aside Socials Icons */}
        <div className="fixed bottom-0 md:left-12 sm:left-8 hidden sm:flex flex-col gap-0 items-center ">
          {" "}
          <div className="flex flex-col gap-7 align-items-center  justify-center mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-400 hover:scale-125 transition duration-300 ease-in-out ms-5"
            >
              <SlSocialGithub className="w-5 h-5" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-400 hover:scale-125 transition duration-300 ease-in-out ms-5"
            >
              <SlSocialInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-400 hover:scale-125 transition duration-300 ease-in-out ms-5"
            >
              <SlSocialTwitter className="w-5 h-5" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-emerald-400 hover:scale-125 transition duration-300 ease-in-out ms-5"
            >
              <SlSocialLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <hr className="w-px h-20 mt-8 bg-emerald-200 border-0 hover:bg-emerald-400" />
        </div>

        {/* Aside Email Right */}
        <div className="fixed bottom-0 right-12 hidden sm:flex flex-col gap-0 items-center">
          <span className="text-slate-400 text-sm vert-text font-mono tracking-wider hover:text-emerald-400 duration-300 hover:scale-105 cursor-pointer transition ease-out ">
            mujeeb.o.hammed@gmail.com
          </span>
          <hr className="self-center w-px h-20 mt-2 bg-emerald-200 border-0 hover:bg-emerald-400" />
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </body>
    </html>
  );
}
