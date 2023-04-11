import React from "react";

const FandqBox = (props) => {
  const { question, answer, isActive, onClick } = props;

  return (
    <div className="w-full" onClick={onClick}>
      <div
        className={`p-3 flex flex-row items-center justify-between bg-gray-900 border-b-[5px] border-black hover:bg-gray-800 tranistion duration-300 ease-in-out ${
          isActive ? "bg-gray-800" : "bg-gray-900"
        }`}
      >
        <div className="p-5">
          <h1 className="text-3xl text-white font-semibold">{question}</h1>
        </div>

        <div>
          {isActive ? (
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
          ) : (
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
                d="M19.5 12h-15"
              />
            </svg>
          )}
        </div>
      </div>
      <div
        className={`p-4 text-xl text-white bg-gray-900 transition-all duration-500 ease-in-out ${
          isActive ? "h-auto opacity-100" : "h-0 opacity-0"
        }`}
      >
        {isActive ? answer : null}
      </div>
    </div>
  );
};

export default FandqBox;
