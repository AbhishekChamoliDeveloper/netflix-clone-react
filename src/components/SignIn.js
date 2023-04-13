import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";

import netflixBackground from "../assets/netflixBackground.png";

import "./custom.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const data = { username: email, password };

    const response = await axios.post(
      "https://dummyjson.com/auth/login",
      {
        username: "kminchelle",
        password: "0lelplR",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    if (response.status === 200) {
      navigate("/Main");
    }

    console.log(response);
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
            disabled={isSubmitting}
          />
          <input
            placeholder="Password"
            type="password"
            className="h-12 w-[22rem] pl-4 bg-gray-700 focus:border-[3px] focus: outline-none text-gray-400 rounded-md opacity-90 max-sm:w-full"
            onChange={handlePasswordInput}
            disabled={isSubmitting}
          />
        </form>
        <button
          onClick={handleSubmission}
          className={` 
          
          ${
            !validator.isEmail(email) || password.length <= 0 || isSubmitting
              ? "bg-red-500"
              : "bg-red-700"
          }
                    
          text-white text-xl rounded-md flex items-center justify-center font-bold w-full py-2`}
          disabled={
            !validator.isEmail(email) || password.length <= 0 || isSubmitting
          }
        >
          {isSubmitting ? (
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            "Sign In"
          )}
        </button>
      </div>
    </div>
  );
};

export default SignIn;
