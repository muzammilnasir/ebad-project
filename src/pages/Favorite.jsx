import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosHeart } from "react-icons/io";
import { toggleFavorite } from "../redux/slice/cartSlice";
import EmptyCart from "../components/specialcase/EmptyCart";
import Heading from "../components/home/Heading";

function Favorite() {
  const dispatch = useDispatch();
  const { products, favorites } = useSelector((state) => state.cartSliceOne);

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  const handleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  const emptyData = {
    heading: 'Your Favorites list is empty.',
    description: "It seems like you haven't picked any favorites yet. Explore our products and add some to your favorites list.",
    btnText: 'Add Favorites',
  };
  

  return (
    <div className="bg-white dark:bg-gray-900 py-[20px]">
      <Heading heading="Favorite" />
      {favoriteProducts.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-[20px] lg:gap-[30px] m-auto max-w-[1200px] pt-[20px] pb-[80px] px-[20px]">
          {favoriteProducts.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-center w-[280px] sm:w-full lg:w-[300px]"
            >
              <div className="w-full mx-auto bg-white border-[1px] pt-5 border-[#111827] rounded-3xl shadow-xl overflow-hidden">
                <div className="max-w-md mx-auto">
                <div className="m-auto overflow-hidden rounded-xl h-[150px] w-[150px] mb-[20px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                  <div className="px-[20px] pt-[10px]">
                    <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
                    {product.title.split(' ').slice(0, 3).join(' ')}
                    </p>
                  </div>
                  <button
                    className="pb-[20px] pr-3 flex w-full justify-end mt-4 items-center gap-3 font-semibold"
                    onClick={() => handleFavorite(product.id)}
                  >
                    <p>Remove from Favorite</p>
                    <IoIosHeart
                      className={`text-2xl ${
                        favorites.includes(product.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <EmptyCart emptyData={emptyData} />
      )}
    </div>
  );
}

export default Favorite;
