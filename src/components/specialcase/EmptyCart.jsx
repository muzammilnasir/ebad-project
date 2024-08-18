import React from "react";
import { Link } from "react-router-dom";
import { emptyCart } from "../../assets";

function EmptyCart({ emptyData }) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:h-[400px] py-[50px] px-[20px]">
        <div>
          <img
            className="w-80 rounded-lg p-4 mx-auto object-contain"
            src={emptyCart}
            alt="emptyCart"
          />
        </div>
        <div className="md:max-w-[400px] lg:max-w-[500px] p-[20px] sm:p-4 sm:py-8 bg-white dark:bg-gray-800 flex gap-4 flex-col items-center rounded-md shadow-xl">
          <h1 className="text-xl font-bold uppercase text-gray-900 dark:text-white">
            {emptyData.heading}
          </h1>
          <p className="text-sm text-center sm:px-10 -mt-2 text-gray-900 dark:text-gray-300">
            {emptyData.description}
          </p>
          <Link to="/">
            <button className="bg-primeColor rounded-md cursor-pointer bg-blue-900 dark:bg-gray-400 hover:bg-white border-[1px] border-blue-900 px-5 py-2 font-semibold text-md text-[#fff] hover:text-blue-900 dark:hover:text-gray-800 duration-300">
              {emptyData.btnText}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default EmptyCart;
