import React, { useState } from "react";
import validator from "validator";

import netflixBackground from "../assets/netflixBackground.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 60%, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 60%), url(${netflixBackground})`,
      }}
    >
      <div className="h-auto w-auto flex flex-col items-start justify-center space-y-10 p-10 bg-black max-sm:min-h-screen max-sm:w-full">
        <h2 className="text-3xl text-white font-bold">Sing In</h2>
        <form className="flex flex-col items-center justify-center space-y-5 max-sm:w-full">
          <input
            placeholder="Email or phone number"
            type="email"
            className="h-12 w-[22rem] pl-4 bg-gray-700  focus:border-[3px] focus: outline-none text-gray-400 rounded-md opacity-90 max-sm:w-full"
            onChange={handleEmailInput}
          />
          <input
            placeholder="Password"
            type="password"
            className="h-12 w-[22rem] pl-4 bg-gray-700 focus:border-[3px] focus: outline-none text-gray-400 rounded-md opacity-90 max-sm:w-full"
            onChange={handlePasswordInput}
          />
        </form>
        <button
          onClick={handleSubmission}
          className={` ${
            !validator.isEmail(email) || password.length <= 0
              ? "bg-red-400"
              : "bg-red-700"
          } text-white text-xl rounded-md flex items-center justify-center font-bold w-full py-2`}
          disabled={!validator.isEmail(email) || password.length <= 0}
        >
          Sing in
        </button>
      </div>
    </div>
  );
};

export default SignIn;
