import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi, selectProduct } from "../../redux/slice/cartSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "./Heading";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

function Bestsellers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, products, isError } = useSelector(
    (state) => state.cartSliceOne
  );

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const handleCardClick = (product) => {
    dispatch(selectProduct(product));
    navigate('details');
  };

  return (
    <>
      <div className="mt-[10px] max-w-screen-xl w-full mx-auto p-[20px] ">
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
            {products.map((product) => (
              <article
              key={product.id}
              className="w-[100%] sm:w-[280px] rounded-xl p-3 cartShadow duration-500 hover:shadow-lg"
              style={{
                transformStyle: "preserve-3d",
                transition: "transform 0.5s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateZ(10px) rotateX(-10deg) rotateY(10deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
              }}
            >
                <div className="relative m-auto overflow-hidden rounded-xl h-[130px] w-[130px] mb-[20px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-800 font-semibold">
                  {product.title.split(' ').slice(0, 3).join(' ')}  
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
                      onClick={() => handleCardClick(product)}
                        className="text-sm flex items-center gap-1"
                      >
                        <TbListDetails />
                        More Details
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
