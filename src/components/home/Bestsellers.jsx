// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchApi, add, selectProduct, toggleFavorite } from "../../redux/slice/cartSlice";
// import Heading from "./Heading";
// import { TbListDetails } from "react-icons/tb";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { IoIosHeart } from "react-icons/io";

// function Bestsellers() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { isLoading, products, isError } = useSelector(
//     (state) => state.cartSliceOne
//   );
//   const favorites = useSelector((state) => state.cartSliceOne.favorites);

//   useEffect(() => {
//     dispatch(fetchApi());
//   }, [dispatch]);

//   const addToCart = (product) => {
//     dispatch(add(product));
//   };

//   const handleFavoriteToggle = (id) => {
//     dispatch(toggleFavorite(id));
//   };

//   const handleCardClick = (product) => {
//     dispatch(selectProduct(product));
//     navigate("details");
//   };

//   return (
//     <>
//       <div className="mt-[10px] max-w-screen-xl w-full mx-auto p-[20px] pb-[50px]">
//         <Heading heading="Best Sellers" />
//         {isLoading ? (
//           <div className="flex flex-row gap-2 justify-center py-[40px]">
//             <div className="w-4 h-4 rounded-full bg-blue-900 animate-bounce"></div>
//             <div className="w-4 h-4 rounded-full bg-blue-900 animate-bounce [animation-delay:-.3s]"></div>
//             <div className="w-4 h-4 rounded-full bg-blue-900 animate-bounce [animation-delay:-.5s]"></div>
//           </div>
//         ) : isError ? (
//           <h1 className="text-[40px] font-bold flex items-center justify-center mt-[20px]">
//             Failed to load products.
//           </h1>
//         ) : (
//           <div className="flex items-center justify-center flex-wrap gap-[30px]">
//             {products.map((product) => {
//               const isFavorite = favorites.includes(product.id);

//               return (
//                 <article
//                   key={product.id}
//                   className="relative w-[100%] sm:w-[280px] rounded-xl p-3 bg-[white] dark:bg-gray-900 cartShadow duration-500 hover:shadow-lg border-[1px]"
//                 >
//                   <div className="absolute top-4 right-2 space-y-3">
//                     <div className="flex items-center justify-center rounded-full overflow-hidden duration-100">
//                       <button
//                         onClick={() => handleFavoriteToggle(product.id)}
//                         className={`flex items-center justify-center ${
//                           isFavorite ? "text-red-500" : "text-gray-400"
//                         }`}
//                         role="button"
//                       >
//                         <IoIosHeart size={25} />
//                       </button>
//                     </div>
//                     <div className="flex items-center justify-center rounded-full bg-blue-500 overflow-hidden h-8 w-8 text-white duration-100 hover:bg-blue-600">
//                       <button
//                         className="flex items-center justify-center h-8 w-8"
//                         onClick={() => handleCardClick(product)}
//                       >
//                         <TbListDetails />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="relative m-auto overflow-hidden rounded-xl h-[130px] w-[130px] mb-[20px]">
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>

//                   <div className="mt-1 p-2">
//                     <h2 className="text-slate-800 dark:text-white font-semibold">
//                       {product.title.split(" ").slice(0, 3).join(" ")}
//                     </h2>
//                     <p className="mt-1 text-sm text-slate-400">
//                       {product.category}
//                     </p>

//                     <div className="mt-3 flex items-end justify-between">
//                       <p className="text-lg font-bold text-blue-500">
//                         ${product.price}
//                       </p>

//                       <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
//                         <button
//                           onClick={() => addToCart(product)}
//                           className="text-sm flex items-center gap-1"
//                         >
//                           <MdOutlineShoppingCart size={17} />
//                           Add To Cart
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Bestsellers;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, add, selectProduct, toggleFavorite } from "../../redux/slice/cartSlice";
import Heading from "./Heading";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosHeart } from "react-icons/io";

function Bestsellers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, products, isError } = useSelector(
    (state) => state.cartSliceOne
  );
  const favorites = useSelector((state) => state.cartSliceOne.favorites);

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const handleFavoriteToggle = (id) => {
    dispatch(toggleFavorite(id));
  };

  const handleCardClick = (product) => {
    dispatch(selectProduct(product));
    navigate("details");
  };

  return (
    <>
      <div className="mt-[10px] max-w-screen-xl w-full mx-auto p-[20px] pb-[50px]">
        <Heading heading="Best Sellers" />
        {isLoading ? (
          <div className="flex flex-row gap-2 justify-center py-[40px]">
            <div className="w-4 h-4 rounded-full bg-blue-900 animate-bounce"></div>
            <div className="w-4 h-4 rounded-full bg-blue-900 animate-bounce [animation-delay:-.3s]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-900 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        ) : isError ? (
          <h1 className="text-[40px] font-bold flex items-center justify-center mt-[20px]">
            Failed to load products.
          </h1>
        ) : (
          <div className="flex items-center justify-center flex-wrap gap-[30px]">
            {products.map((product, index) => {
              const isFavorite = favorites.includes(product.id);

              return (
                <article
                  key={`${product.id}-${index}`}
                  className="relative w-[100%] sm:w-[280px] rounded-xl p-3 bg-[white] dark:bg-gray-900 cartShadow duration-500 hover:shadow-lg border-[1px]"
                >
                  <div className="absolute top-4 right-2 space-y-3">
                    <div className="flex items-center justify-center rounded-full overflow-hidden duration-100">
                      <button
                        onClick={() => handleFavoriteToggle(product.id)}
                        className={`flex items-center justify-center ${
                          isFavorite ? "text-red-500" : "text-gray-400"
                        }`}
                        role="button"
                      >
                        <IoIosHeart size={25} />
                      </button>
                    </div>
                    <div className="flex items-center justify-center rounded-full bg-blue-500 overflow-hidden h-8 w-8 text-white duration-100 hover:bg-blue-600">
                      <button
                        className="flex items-center justify-center h-8 w-8"
                        onClick={() => handleCardClick(product)}
                      >
                        <TbListDetails />
                      </button>
                    </div>
                  </div>

                  <div className="relative m-auto overflow-hidden rounded-xl h-[130px] w-[130px] mb-[20px]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="mt-1 p-2">
                    <h2 className="text-slate-800 dark:text-white font-semibold">
                      {product.title.split(" ").slice(0, 3).join(" ")}
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
                          onClick={() => addToCart(product)}
                          className="text-sm flex items-center gap-1"
                        >
                          <MdOutlineShoppingCart size={17} />
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Bestsellers;
