import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchApi, selectProduct } from "../../redux/slice/cartSlice";
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Heading from "./Heading";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

function SliderCart() {
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

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-[-15px] top-[50%] -translate-y-[50%] z-10 p-2 text-white bg-gray-700 rounded-full cursor-pointer hover:bg-gray-800"
        onClick={onClick}
      >
        <GrFormNextLink size={30} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute left-[-15px] top-[50%] -translate-y-[50%] z-10 p-2 text-white bg-gray-700 rounded-full cursor-pointer hover:bg-gray-800"
        onClick={onClick}
      >
        <GrFormPreviousLink size={30} />
      </div>
    );
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="my-[10px] max-w-screen-xl w-full mx-auto p-[20px]">
        <Heading heading="New Arrivals" />
        {isLoading ? (
          <div class="flex flex-row gap-2 justify-center py-[40px]">
            <div class="w-4 h-4 rounded-full bg-blue-900 animate-bounce"></div>
            <div class="w-4 h-4 rounded-full bg-blue-900 animate-bounce [animation-delay:-.3s]"></div>
            <div class="w-4 h-4 rounded-full bg-blue-900 animate-bounce [animation-delay:-.5s]"></div>
          </div>
        ) : isError ? (
          <h1 className="text-[40px] font-bold flex items-center justify-center mt-[20px]">
            Failed to load products.
          </h1>
        ) : (
          <Slider {...settings}>
            {products.map((product) => (
              <article
                key={product.id}
                className="w-[280px] rounded-xl bg-gray-900 p-3 duration-300 "
              >
                <div className="relative m-auto overflow-hidden rounded-xl h-[130px] w-[130px] mb-[20px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="mt-1 p-2">
                  <h2 className="text-slate-200">
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
          </Slider>
        )}
      </div>
    </>
  );
}

export default SliderCart;
