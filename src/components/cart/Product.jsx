import React from "react";
import { Link } from "react-router-dom";
import Heading from "../home/Heading";
import ItemProduct from "./ItemProduct";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../redux/slice/cartSlice";
import { emptyCart } from "../../assets";

function Product() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSliceOne.cart);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.cartQuantity,
      0
    );
  };

  const subtotal = calculateSubtotal();

  // Determine shipping charge based on subtotal
  const getShippingCharge = () => {
    if (subtotal > 500) return 20;
    if (subtotal > 200) return 25;
    return 30;
  };

  const shippingCharge = getShippingCharge();
  const total = subtotal + shippingCharge;

  return (
    <div className="max-w-screen-xl m-auto p-[20px]">
      <Heading heading="Cart" className="text-start" />
      {cart.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5">
            <ItemProduct />
          </div>
          <button
            onClick={() => dispatch(resetCart())}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            Reset cart
          </button>

          <div className="flex flex-col md:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
            <div className="flex items-center flex-col sm:flex-row gap-4">
              <input
                className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
                type="text"
                placeholder="Coupon Number"
              />
              <p className="text-sm mdl:text-base font-semibold">
                Apply Coupon
              </p>
            </div>
            <p className="text-lg font-semibold">Update Cart</p>
          </div>
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Cart totals</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Subtotal
                  <span className="font-semibold tracking-wide">
                    ${subtotal.toFixed(2)}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  Shipping Charge
                  <span className="font-semibold tracking-wide">
                    ${shippingCharge.toFixed(2)}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  Total
                  <span className="font-bold tracking-wide text-lg">
                    ${total.toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="flex justify-end">
                <Link to="/checkout">
                  <button className="w-52 h-11 font-semibold rounded-lg text-white bg-blue-900 duration-300">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-20">
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="bg-primeColor rounded-md cursor-pointer bg-blue-900 hover:bg-white border-[1px] border-blue-900 px-8 py-2 font-semibold text-lg text-[#fff] hover:text-blue-900 duration-300">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
