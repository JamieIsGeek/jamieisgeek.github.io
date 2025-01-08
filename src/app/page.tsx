"use client"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
      <main className="flex flex-col items-start px-4 min-h-screen bg-gradient-to-br from-slate-950 to-slate-700">
        <div className="flex justify-end items-center w-full absolute top-6 right-6 p-4">

          <a
            href="mailto:jamie@summitrealms.com"
           className="text-white px-5 py-3 rounded shadow-lg border border-white transform transition-transform duration-300 hover:scale-105 flex items-center space-x-2"

          >
<FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            <span>Contact</span>
          </a>
        </div>

        <h1 className="text-white text-4xl sm:text-6xl font-bold shadow-lg mt-64 text-left ml-5">Hi! My name is Jamie! </h1>
        <p className="text-white text-left sm:text-2xl mt-8 ml-5">
            I am a{" "}
            <span className="font-bold">
                <Typewriter
                words={["Systems Administrator", "Backend Developer", "Team Leader", "Cool Guy"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
                />
            </span>
        </p>
        <div className="mt-4 flex space-x-4 ml-5">
          <a
            href="https://discord.com/users/338063500616138752"
            target="_blank"
            className="text-white px-5 py-3 rounded shadow-lg border border-white transform transition-transform duration-300 hover:scale-105 flex items-center space-x-2"
          >
<FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
            <span>Discord</span>
          </a>
          <a
            href="https://github.com/JamieIsGeek"
            target="_blank"
            className="text-white px-5 py-3 rounded shadow-lg border border-white transform transition-transform duration-300 hover:scale-105 flex items-center space-x-2"
          >
<FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            <span>GitHub</span>
          </a>
        </div>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => {
              document.getElementById("experience")?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-white bg-transparent px-2 py-2 rounded-full flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

      <section id="experience" className="mt-[35rem] mb-20 px-4 w-full flex flex-col items-left">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-12 text-left">
            Experience
        </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div
                  className="border border-white rounded-lg shadow-lg p-4 transform transition-transform duration-700 hover:scale-105">
                  <Image
                      src="/sootmc.webp"
                      alt="Project 1"
                      width={150}
                      height={100}
                      className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-white text-left">
                      SootMC (Now Iridium Net)
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 text-left">
                      Role: <span className="font-bold">Staff, Network and Development Manager</span>
                  </p>
                  <p className="text-gray-300 font-bold text-sm mb-4">
                      January 2022 - October 2024
                  </p>
                  <div className="flex space-x-4">
                      <a
                          href="https://github.com/sootmc"
                          target="_blank"
                          className="text-white bg-gray-700 px-4 py-2 rounded">
                          GitHub
                      </a>
                      <a
                          href="https://x.com/iridium_net"
                          target="_blank"
className="text-white bg-blue-700 px-4 py-2 rounded flex items-center space-x-2">
<FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
Twitter
                      </a>
                  </div>
              </div>
              <div
                  className="border border-white rounded-lg shadow-lg p-4 transform transition-transform duration-700 hover:scale-105">
                  <Image
                      src="/summit-realms.jpg"
                      alt="Project 2"
                      width={150}
                      height={100}
                      className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-white">
                      Summit Realms
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                      Role: <span className="font-bold">Systems Admin and Development Lead</span>
                  </p>
                  <p className="text-gray-300 font-bold text-sm mb-4">
                      May 2023 - Present
                  </p>
                  <div className="flex space-x-4">
                      <a
                          href="https://github.com/summit-games"
                          target="_blank"
                          className="text-white bg-gray-700 px-4 py-2 rounded">
                          GitHub
                      </a>
                      <a
                          href="https://summitrealms.com"
                          target="_blank"
                          className="text-white bg-blue-700 px-4 py-2 rounded">
                          Website
                      </a>
                  </div>
              </div>
              <div
                  className="border border-white rounded-lg shadow-lg p-4 transform transition-transform duration-700 hover:scale-105">
                  <Image
                      src="/summit-games.png"
                      alt="Project 3"
                      width={150}
                      height={100}
                      className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-white">
                      Summit Games
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                      Role: <span className="font-bold">Tech Lead</span>
                  </p>
                  <p className="text-gray-300 font-bold text-sm mb-4">
                      May 2023 - Present
                  </p>
                  <div className="flex space-x-4">
                      <a
                          href="https://github.com/summit-games"
                          target="_blank"
                          className="text-white bg-gray-700 px-4 py-2 rounded">
                          GitHub
                      </a>
                      <a
                          href="https://summitgames.org"
                          target="_blank"
                          className="text-white bg-blue-700 px-4 py-2 rounded">
                          Website
                      </a>
                  </div>
              </div>
              <div
                  className="border border-white rounded-lg shadow-lg p-4 transform transition-transform duration-700 hover:scale-105">
                  <Image
                      src="/cloudmc.webp"
                      alt="Project 3"
                      width={150}
                      height={100}
                      className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold text-white">
                      SkycloudMC
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                      Role: <span className="font-bold">Development Lead</span>
                  </p>
                  <p className="text-gray-300 font-bold text-sm mb-4">
                      January 2025 - Present
                  </p>
                  <div className="flex space-x-4">
                      <a
                          href="https://github.com/summit-games"
                          target="_blank"
                          className="text-white bg-gray-700 px-4 py-2 rounded">
                          GitHub
                      </a>
                      <a
                          href="https://discord.com/cloudmc"
                          target="_blank"
                          className="text-white bg-blue-700 px-4 py-2 rounded">
                          Website
                      </a>
                  </div>
              </div>
          </div>
      </section>
      </main>
  );
}

