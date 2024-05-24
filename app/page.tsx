"use client";
import { PiHandWavingLight } from "react-icons/pi";
import { SiHandshakeProtocol } from "react-icons/si";
export default function Home() {

  
  
  return (
    <main className="">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>

      {/* Hero Section */}
      <div className="px-10 md:px-36 sm:px-28 mt-24 font-inter">
        
        <h3 className="sm:text-lg lg:text-xl text-md text-teal-300 sm:mt-4  mt-2 font-mono">
          Hello
          <span className="inline-flex mr-1 ml-1">
            <PiHandWavingLight className="ml-1 hover:animate-ping" />
          </span>
          , my name is
        </h3>
        <div className="relative z-[-1] mb-6 before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-emerald-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-emerald-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#01ffd0] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
        <h4 className="sm:text-5xl lg:text-7xl md:text-6xl  text-4xl font-inter text-slate-200 mt-5 md:mt-7 lg:mt-9 font-bold">
          Mujeeb Hammed.
        </h4>
        <h5 className="lg:text-7xl md:text-5xl text-4xl font-inter  text-slate-500 mt-2 sm:mt-4 font-bold sm:text-4xl">
          I build backend stuffs.
        </h5>
        <p className="text-slate-400 mt-5 lg:mt-8 pr-16 lg:pr-72 text-sm lg:text-base font-inter font-relaxed">
          Senior Software Developer with extensive experience in building
          fullstack solutions. Specializing in backend development, I excel in
          creating robust, scalable applications using
          <span className="text-emerald-400"> PHP Laravel </span> and
          <span className="text-emerald-400"> JavaScript Node.js</span>, my
          preferred stacks.
        </p>
        {/* <p className="text-slate-400 mt-9 mb-3 lg:mt-12 pr-16 lg:pr-60 text-sm lg:text-base font-inter font-relaxed">
          With a strong foundation in both frontend and backend technologies, I
          have successfully led and contributed to numerous projects across
          various industries. My expertise includes designing complex databases,
          optimizing application performance, and implementing secure
          authentication systems. Passionate about clean code and best
          practices, I am dedicated to delivering high-quality software that
          meets user needs and business goals.
        </p> */}

        <button
          type="button"
          className="mt-6 md:mt-8 hover:border-r-4 font-mono  hover:border-b-4 py-4 px-7 me-2 mb-2 text-md font-medium  focus:outline-none bg-transparent rounded-lg border border-emerald-400 transition ease-out duration-300 hover:scale-105 text-emerald-400 focus:z-10 focus:ring-2 focus:ring-emerald-100"
        >
          Hire me Now!
        </button>
      </div>

      {/* <div className="relative z-[-1]  mt-20 px-20 place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-emerald-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-emerald-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#01ffd0] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div>Name</div>
        <div>Another</div>
      </div> */}
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left"></div>

      {/* ABOUT  */}
      <div className="px-10 md:px-36 sm:px-28 mt-10 font-inter flex ">
        <div>
          <div className="flex items-center justify-items-center ">
            <span className="mr-3 font-mono text-lg text-emerald-400">01.</span>
            <h2 className="mr-4 text-2xl text-slate-300 font-bold">About Me</h2>
            <span>
              <hr className="self-center h-0.1 w-64 bg-emerald-400 mb-12 inline-flex" />
            </span>
          </div>
          <div>
            <p className="text-slate-400 mt-9 mb-3 lg:mt-12 pr-16 lg:pr-60 text-md lg:text-lg font-inter lg:text-relaxed font-relaxed tracking-wide">
              Hello, my name is Mujeeb Hammed. I am a
              <span className="text-emerald-400">
                {" seasoned Senior Software Developer "}
              </span>
              with a passion for building innovative and efficient backend
              solutions. My journey in software development
              <span className="text-emerald-400">
                {" started back in 2015 "}
              </span>
              when I was creating website pages for small businesses of friends
              and family. This early experience sparked my interest and led me
              to pursue further education in Software Engineering at
              <span className="text-emerald-400">{" SQI College of ICT"}</span>,
              a prestigous institute of learning SWE in Nigeria.
            </p>
            <p className="text-slate-400 mt-9 mb-3 lg:mt-12 pr-16 lg:pr-60 text-md lg:text-lg font-inter lg:text-relaxed font-relaxed tracking-wide">
              During my studies, I picked up various stacks like
              <span className="text-emerald-400"></span> PHP Laravel and
              JavaScript Node.js, and also became proficient with frontend
              frameworks such as <span className="text-emerald-400"></span>
              React, Vue.js, Blade, and Next.js. I have had the opportunity to
              <span className="text-emerald-400">
                {
                  " lead and collaborate  on numerous side projects with like-minded professional teams"
                }
              </span>
              , further enhancing my skills and knowledge.
            </p>
            <p className="text-slate-400 mt-9 mb-3 lg:mt-12 pr-16 lg:pr-60 text-md lg:text-lg font-inter lg:text-relaxed font-relaxed tracking-wide">
              Fast forward to today, I am currently working with an
              <span className="text-emerald-400">
                {"educational institution"}
              </span>{" "}
              where I have created and actively maintaining a
              <span className="text-emerald-400">
                {" Library Management System"}
              </span>
              . This role has allowed me to apply my expertise in backend
              development and continue my commitment to delivering high-quality
              software solutions.
            </p>
            <p className="text-slate-400 mt-9 mb-3 lg:mt-12 pr-16 lg:pr-60 text-md lg:text-lg font-inter lg:text-relaxed font-relaxed tracking-wide">
              Throughout my career, I have designed and managed complex
              databases, optimized application performance, and implemented
              secure authentication systems. I am dedicated to writing clean,
              maintainable code and adhering to best practices to ensure the
              highest quality in every project I undertake.
            </p>
            <p className="text-slate-400 mt-9 mb-3 lg:mt-12 pr-16 lg:pr-60 text-md lg:text-lg font-inter lg:text-relaxed font-relaxed tracking-wide">
              I am passionate about technology and continuously seek to stay
              updated with the latest trends and advancements in the field.
              Whether it's collaborating with a team or working independently, I
              strive to deliver solutions that not only meet but exceed client
              expectations.
            </p>
            <p className="text-slate-400 mt-9 mb-3 lg:mt-12 pr-16 lg:pr-60 text-md lg:text-lg font-inter lg:text-relaxed font-relaxed tracking-wide">
              Outside of coding, I enjoy exploring new technologies,
              contributing to open-source projects, and sharing knowledge with
              the developer community.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
