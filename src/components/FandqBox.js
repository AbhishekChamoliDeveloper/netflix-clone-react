import React from "react";

const FandqBox = (props) => {
  const { question, answer } = props;

  return (
    <div>
      <div className="p-3 flex flex-row items-center justify-between bg-gray-700 border-b-[1px] border-black">
        <div>
          <h1 className="text-3xl text-white">{question}</h1>
        </div>

        <div>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div className="p-4 text-xl text-white bg-gray-700">{answer}</div>
    </div>
  );
};

export default FandqBox;
