import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black p-10 flex flex-col space-y-5 border-t-[5px] border-gray-700 max-sm:text-center">
      <p className="text-white text-lg">Questions? Call 000-800-919-1694</p>
      <div className="flex flex-row  justify-evenly w-full max-sm:flex-col">
        <div className="flex flex-col space-y-2">
          <a className="text-gray-400 text-lg underline" href="#">
            Accounts
          </a>
          <a className="underline text-gray-400 text-lg" href="#">
            Ways to watch
          </a>
          <a className=" underline text-gray-400 text-lg" href="#">
            Privacy
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <a className="underline text-gray-400 text-lg" href="#">
            Speed Test
          </a>
          <a className="underline text-gray-400 text-lg" href="#">
            Help Center
          </a>
          <a className="underline text-gray-400 text-lg" href="#">
            Media Centre
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <a className="underline text-gray-400 text-lg" href="#">
            Contact Prefernces
          </a>
          <a className="underline text-gray-400 text-lg" href="#">
            Terms of use
          </a>
          <a className="underline text-gray-400 text-lg" href="#">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
