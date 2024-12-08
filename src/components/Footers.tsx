
import React from 'react';

const Footers = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-full md:w-64 flex-shrink-0 text-center md:text-left mb-10 md:mb-0">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <span className="ml-3 text-2xl font-bold text-[#3563E9]">MORENT</span>
            </a>
            <p className="mt-2 text-gray-800 text-sm">
              Our vision is to provide convenience and help increase your sales business
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 md:mt-0 mt-10 justify-center md:justify-end text-center">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
              <h2 className="title-font text-lg font-bold text-gray-900 tracking-widest mb-3">
                About
              </h2>
              <nav className="list-none mb-4 space-y-2">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">How it Works</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Featured</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Partnership</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Business Relation</a>
                </li>
              </nav>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
              <h2 className="title-font text-lg font-bold text-gray-900 tracking-widest mb-3">
                Community
              </h2>
              <nav className="list-none mb-4 space-y-2">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Events</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Podcast</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Invite a Friend</a>
                </li>
              </nav>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
              <h2 className="title-font text-lg font-bold text-gray-900 tracking-widest mb-3">
                Socials
              </h2>
              <nav className="list-none mb-4 space-y-2">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Discord</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Instagram</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Twitter</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Facebook</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-center text-sm md:text-base py-5">
          <div className="container mx-auto flex flex-wrap justify-center sm:justify-between items-center">
            <p className="text-gray-800 mb-2 sm:mb-0">
              ©2020 MORENT. All rights reserved
            </p>
            <div className="flex space-x-4">
              <a className="text-gray-800 hover:underline">Privacy & Policy</a>
              <a className="text-gray-800 hover:underline">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footers;
