import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchApi, add, selectProduct, toggleFavorite } from "../../redux/slice/cartSlice";
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Heading from "./Heading";
import { TbListDetails } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { IoIosHeart } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";

function CardSlider() {
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
          <Slider {...settings}>
            {products.map((product) => {
              const isFavorite = favorites.includes(product.id);
              return (
                <article
                key={product.id}
                className="relative w-[280px] rounded-xl bg-gray-900 p-3 duration-300 border-[1px]"
              >
                <div className="absolute top-4 right-2 space-y-3 z-[999]">
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
              )
            })}
          </Slider>
        )}
      </div>
    </>
  );
}

export default CardSlider;
