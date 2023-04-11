import React, { useState } from "react";
import validator from "validator";
import FandqBox from "../components/FandqBox";

const Fandq = () => {
  const [activeBox, setActiveBox] = useState(null);
  const [emailInput, setEmailInput] = useState("");

  const handleInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleActiveBox = (index) => {
    if (activeBox === index) {
      setActiveBox(null);
    } else {
      setActiveBox(index);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-black p-10 space-y-8
      border-t-[5px] border-gray-700 
    "
    >
      <div>
        <h1 className="text-4xl font-bold text-white max-sm:text-3xl">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="w-full flex flex-col space-y-5">
        <FandqBox
          question="What is Netflix?"
          answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

          You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
          isActive={activeBox === 1}
          onClick={() => handleActiveBox(1)}
        />
        <FandqBox
          question="How much does Netflix cost?"
          answer="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
          isActive={activeBox === 2}
          onClick={() => handleActiveBox(2)}
        />
        <FandqBox
          question="Where can i watch?"
          answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

          You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
          isActive={activeBox === 3}
          onClick={() => handleActiveBox(3)}
        />
      </div>

      <div className="w-full bg-black flex flex-col items-center justify-center text-center space-y-5">
        <p className="text-lg text-white font-semibold">
          Ready to watch? Enter your email to create or restart your membership.
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
          ) : (
            <button
              className="flex flex-row space-x-1 items-center justify-center text-white text-lg bg-red-400  tranistion: duration-150 py-2 px-8 h-14 rounded-md"
              disabled={true}
            >
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Fandq;
