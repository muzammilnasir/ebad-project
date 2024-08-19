import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, toggleFavorite } from "../../redux/slice/cartSlice";
import { IoStar } from "react-icons/io5";
import { IoIosStarHalf, IoIosHeart } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

function CartDetails() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartSliceOne.selectedProduct);
  const favorites = useSelector((state) => state.cartSliceOne.favorites);

  const addToCart = (data) => {
    dispatch(add(data));
  };

  const handleFavoriteToggle = (id) => {
    dispatch(toggleFavorite(id));
  };

  const isFavorite = favorites.includes(data?.id);

  if (!data) {
    return <div>No product selected.</div>;
  }

  return (
    <>
      <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <h1 className="text-center text-2xl sm:text-[2rem] font-bold text-gray-900 dark:text-white mb-[30px]">
          Product Details
        </h1>
        <div className="max-w-screen-xl mx-auto p-[20px]">
          <div className="flex items-center justify-between sm:gap-[2rem] xl:gap-[5rem] flex-col lg:flex-row">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              <img
                className="w-full dark:hidden"
                src={data.image}
                alt={data.title}
              />
              <img
                className="w-full hidden dark:block"
                src={data.image}
                alt={data.title}
              />
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0 space-y-4 md:space-y-6">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                {data.category}
              </h1>
              <h1 className="text-xl font-bold text-gray-900 sm:text-[2rem] dark:text-white leading-[1.5]">
                {data.title}
              </h1>
              <div className="sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  $ {data.price}
                </p>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => {
                      const fullStars = Math.floor(data?.rating?.rate);
                      const hasHalfStar = data?.rating?.rate - fullStars >= 0.5;

                      if (index < fullStars) {
                        return (
                          <IoStar key={index} className="text-yellow-400" />
                        );
                      } else if (index === fullStars && hasHalfStar) {
                        return (
                          <IoIosStarHalf
                            key={index}
                            className="text-yellow-400"
                          />
                        );
                      } else {
                        return <IoStar key={index} className="text-gray-300" />;
                      }
                    })}
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    ( {data?.rating?.rate} )
                  </p>
                  <p className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                    {data?.rating?.count} Reviews
                  </p>
                </div>
              </div>

              <div className="sm:gap-4 sm:items-center sm:flex">
                <button
                  onClick={() => handleFavoriteToggle(data.id)}
                  className={`flex items-center gap-2 justify-center py-2.5 px-5 text-sm font-medium focus:outline-none rounded-lg border border-gray-200 dark:focus:ring-gray-700 dark:border-gray-600 ${
                    isFavorite
                      ? "bg-red-500 text-white hover:bg-red-600"
                      : "bg-white text-gray-900 hover:bg-gray-100"
                  }`}
                  role="button"
                >
                  <IoIosHeart size={20} />
                  {isFavorite ? "Remove from favorites" : "Add to favorites"}
                </button>

                <button
                  onClick={() => addToCart(data)}
                  className="text-white mt-4 sm:mt-0 bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                >
                  <MdOutlineShoppingCart size={18} className="mr-2" />
                  Add to cart
                </button>
              </div>

              <hr className="border-gray-200 dark:border-gray-800" />

              <p className="text-gray-500 dark:text-gray-400 text-justify">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartDetails;
