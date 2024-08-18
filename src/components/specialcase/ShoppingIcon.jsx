import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const SpecialCase = () => {
    const cart = useSelector((state) => state.cartSliceOne.cart);
  return (
    <div className="fixed top-[50%] -translate-y-[50%] right-1 z-20 md:flex flex-col gap-2">
      <Link to="/cart">
        <div className={`${cart.length > 0 ? "block" : "hidden"} cartShadow w-12 border-[1px] h-[50px] sm:w-16 sm:h-[70px] rounded-md flex flex-col bg-white dark:bg-gray-900 gap-1 text-blue-900 dark:text-white justify-center items-center shadow-2xl overflow-x-hidden group cursor-pointer relative`}>
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont hidden sm:block">Buy Now</p>
          {cart.length > 0 && (
            <p className="absolute top-[2px] sm:top-2 right-[3px] sm:right-2 bg-primeColor text-white dark:text-blue-900 bg-blue-900 dark:bg-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {cart.length}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
