// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { add } from "../../redux/slice/cartSlice";
// import { IoStar } from "react-icons/io5";
// import { IoIosStarHalf } from "react-icons/io";


// function CartDetails() {
//   const data = useSelector((state) => state.cartSliceOne.selectedProduct);
//   const dispatch = useDispatch();

//   const addToCart = (data) => {
//     dispatch(add(data));
//   };

//   if (!data) {
//     return <div>No product selected.</div>;
//   }

//   return (
//     <>
//       <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
//         <h1 className="text-center text-2xl sm:text-[2rem] font-bold text-gray-900 dark:text-white mb-[30px]">Product Details</h1>
//         <div className="max-w-screen-xl mx-auto p-[20px]">
//           <div className="flex items-center justify-between sm:gap-[2rem] xl:gap-[5rem] flex-col lg:flex-row">
//             <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
//               <img
//                 className="w-full dark:hidden"
//                 src={data.image}
//                 alt={data.title}
//               />
//               <img
//                 className="w-full hidden dark:block"
//                 src={data.image}
//                 alt={data.title}
//               />
//             </div>

//             <div className="mt-6 sm:mt-8 lg:mt-0 space-y-4 md:space-y-6">
//               <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
//                 {data.category}
//               </h1>
//               <h1 className="text-xl font-bold text-gray-900 sm:text-[2rem] dark:text-white leading-[1.5]">
//                 {data.title}
//               </h1>
//               <div className="sm:items-center sm:gap-4 sm:flex">
//                 <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
//                   $ {data.price}
//                 </p>

//                 <div className="flex items-center gap-2 mt-2 sm:mt-0">
//                   <div className="flex items-center gap-1">
//                     {[...Array(5)].map((_, index) => {
//                       const fullStars = Math.floor(data.rating.rate); // Full stars
//                       const hasHalfStar = data.rating.rate - fullStars >= 0.5; // Check for a half star

//                       if (index < fullStars) {
//                         // Full star
//                         return (
//                           <IoStar key={index} className="text-yellow-400" />
//                         );
//                       } else if (index === fullStars && hasHalfStar) {
//                         // Half star
//                         return (
//                           <IoIosStarHalf
//                             key={index}
//                             className="text-yellow-400"
//                           />
//                         );
//                       } else {
//                         // Empty star
//                         return <IoStar key={index} className="text-gray-300" />;
//                       }
//                     })}
//                   </div>
//                   <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
//                     ( {data.rating.rate} )
//                   </p>
//                   <p className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
//                     {data.rating.count} Reviews
//                   </p>
//                 </div>
//               </div>

//               <div className="sm:gap-4 sm:items-center sm:flex">
//                 <a
//                   href="#"
//                   title=""
//                   className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//                   role="button"
//                 >
//                   <svg
//                     className="w-5 h-5 -ms-2 me-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
//                     />
//                   </svg>
//                   Add to favorites
//                 </a>

//                 <button
//                   onClick={() => addToCart(data)}
//                   className="text-white mt-4 sm:mt-0 bg-blue-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
//                 >
//                   <svg
//                     className="w-5 h-5 -ms-2 me-2"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
//                     />
//                   </svg>
//                   Add to cart
//                 </button>
//               </div>

//               <hr className="border-gray-200 dark:border-gray-800" />

//               <p className="text-gray-500 dark:text-gray-400 text-justify">
//                 {data.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default CartDetails;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, toggleFavorite } from "../../redux/slice/cartSlice";
import { IoStar } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

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
                      const fullStars = Math.floor(data.rating.rate);
                      const hasHalfStar = data.rating.rate - fullStars >= 0.5;

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
                    ( {data.rating.rate} )
                  </p>
                  <p className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                    {data.rating.count} Reviews
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
                  <svg
                    className="w-5 h-5 -ms-2 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
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
