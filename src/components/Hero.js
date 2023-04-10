import React, { useState } from "react";
import validator from "validator";

import netflixBackground from "../assets/netflixBackground.png";
import tvVideo from "../assets/video-tv-in-0819.mp4";
import mobilePhone from "../assets/mobile.png";
import backshot from "../assets/backshot.png";

const Hero = () => {
  const [emailInput, setEmailInput] = useState("");

  const handleInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  return (
    <>
      <div
        className="min-h-screen bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 60%), url(${netflixBackground})`,
        }}
      >
        <div className="text-center flex flex-col items-center justify-center space-y-4 p-3">
          <h1 className="text-white font-bold text-5xl max-sm:text-4xl">
            Unlimited movies, TV shows and more.
          </h1>
          <p className="text-white font-semi bold text-2xl max-sm:text-xl">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="text-white font-semi bold text-2xl max-sm:text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-row items-center justify-center space-x-5  max-sm:flex-col max-sm:space-y-4 max-sm:space-x-0">
            <input
              placeholder="Email address"
              type="email"
              className="h-14 w-[22rem] pl-4 bg-black border-[1px] focus:border-[3px] focus: outline-none text-gray-400 rounded-md opacity-90 max-sm:w-[18rem]"
              onChange={handleInputChange}
            />
            {validator.isEmail(emailInput) ? (
              <button className="flex flex-row space-x-1 items-center justify-center text-white text-lg bg-red-600 hover:bg-red-800 tranistion: duration-150 py-2 px-8 h-14 rounded-md">
                <p className="font-semibold">Get Started</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 font-semibold"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div
        className="flex flex-row items-center justify-center space-x-32 p-[5rem]
      max-sm:p-[3rem] bg-black border-t-[5px] border-gray-700 max-sm:flex-col max-lg:flex-col max-sm:space-y-10 max-lg:space-y-10 max-lg:space-x-0"
      >
        <div className="flex flex-col space-y-4 max-sm:text-center max-lg:text-center w-1/3 max-sm:w-full max-lg:w-full">
          <h1 className="text-white text-5xl font-bold max-sm:text-3xl max-lg:text-4xl">
            Enjoy on your TV.
          </h1>
          <p className="text-white text-2xl max-sm:text-lg max-lg:text-xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <video autoPlay loop muted>
          <source src={tvVideo} type="video/mp4" />
        </video>
      </div>
      <div
        className="flex flex-row items-center justify-center space-x-32 p-[5rem]
      max-sm:p-[3rem] bg-black border-t-[5px] border-gray-700 max-sm:flex-col-reverse max-sm:space-y-reverse max-lg:space-y-reverse
      max-lg:flex-col-reverse max-sm:space-y-10 max-lg:space-y-10 max-lg:space-x-0"
      >
        <div className="flex flex-col items-center justify-center relative">
          <img
            src={mobilePhone}
            alt="stranger-things-in-phone"
            className="h-[20rem]"
          />
          <div className="flex flex-row items-center justify-between border-[1px] border-white p-2 rounded-md w-[20rem]  absolute bg-black bottom-4">
            <div className="flex flex-row items-center justify-center space-x-4">
              <img src={backshot} alt="Stanger-things" className="h-[3rem]" />
              <div>
                <p className="text-white font-bold">Strangers Things</p>
                <p className="text-blue-300">Downloading...</p>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col space-y-4 max-sm:text-center max-lg:text-center w-1/3 max-sm:w-full max-lg:w-full">
          <h1 className="text-white text-5xl font-bold max-sm:text-3xl max-lg:text-4xl">
            Download your shows to watch offline.
          </h1>
          <p className="text-white text-2xl max-sm:text-lg max-lg:text-xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
