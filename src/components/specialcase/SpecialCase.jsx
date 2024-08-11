import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const SpecialCase = () => {
    const cart = useSelector((state) => state.cartSliceOne.cart);
  return (
    <div className="fixed top-[50%] -translate-y-[50%] right-1 z-20 hidden md:flex flex-col gap-2">
      <Link to="/cart">
        <div className="cartShadow w-16 h-[70px] rounded-md flex flex-col bg-white gap-1 text-blue-900 justify-center items-center shadow-2xl overflow-x-hidden group cursor-pointer relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Buy Now</p>
          {cart.length > 0 && (
            <p className="absolute top-1 right-2 bg-primeColor text-white bg-blue-900 text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {cart.length}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
