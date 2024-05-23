import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter } from "react-icons/sl";

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
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Signika:wght@300..700&display=swap" rel="stylesheet"></link>
      </head> */}
      <body className={` ${inter.className}`}>
        {children}

        {/* Aside Socials Icons */}
        <div className="fixed bottom-40 left-12 flex flex-col gap-0 items-center">
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
          <hr className="w-px h-48 my-8 bg-emerald-200 border-0 hover:bg-emerald-400" />
        </div>

        {/* Aside Email Right */}
        <div className="fixed bottom-0 right-12 flex flex-col gap-0 items-center">
          <span className="text-slate-400 text-sm vert-text font-mono tracking-wider hover:text-emerald-400 duration-300 hover:scale-105 cursor-pointer transition ease-out ">
            mujeeb.o.hammed@gmail.com
          </span>
          <hr className="self-center w-px h-20 my-8 bg-emerald-200 border-0 hover:bg-emerald-400" />
        </div>
      </body>
    </html>
  );
}
