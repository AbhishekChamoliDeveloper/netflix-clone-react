import React from "react";
import FandqBox from "../components/FandqBox";

const Fandq = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-black p-10 space-y-8
    "
    >
      <div>
        <h1 className="text-4xl font-bold text-white max-sm:text-3xl">
          Frequently Asked Questions
        </h1>
      </div>
      <div>
        <FandqBox
          question="What is Netflix?"
          answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices."
        />
      </div>
    </div>
  );
};

export default Fandq;
