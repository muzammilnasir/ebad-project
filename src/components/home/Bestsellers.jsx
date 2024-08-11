import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, add } from "../../redux/slice/cartSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "./Heading";

function Bestsellers() {
  const dispatch = useDispatch();
  const { isLoading, products, isError } = useSelector(
    (state) => state.cartSliceOne
  );

  useEffect(() => {
    console.log("Dispatching fetchApi");
    dispatch(fetchApi());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
    console.log("Added product", product);
  };

  return (
    <>
      <div className="mt-[10px] max-w-screen-xl w-full mx-auto p-[20px] ">
        <Heading heading="Best Sellers" />
        {isLoading ? (
          <h1 className="text-[40px] font-bold flex items-center justify-center mt-[20px]">
            Loading...
          </h1>
        ) : isError ? (
          <h1 className="text-[40px] font-bold flex items-center justify-center mt-[20px]">
            Failed to load products.
          </h1>
        ) : (
          <div className="flex items-center justify-center flex-wrap gap-[20px]">
            {products.map((product) => (
              <article
                key={product.id}
                className="w-[100%] sm:w-[280px] rounded-xl p-3 shadow-xl hover:shadow-xl duration-300 "
              >
                <div className="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[200px] object-contain"
                  />
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-800 font-semibold">
                    {product.title.slice(0, 20)}
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    {product.category}
                  </p>

                  <div className="mt-3 flex items-end justify-between">
                    <p className="text-lg font-bold text-blue-500">
                      ${product.price}
                    </p>

                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                      <button
                        className="text-sm flex items-center gap-1"
                        onClick={() => addToCart(product)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Bestsellers;
