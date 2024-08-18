import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { Link } from 'react-router-dom';


function Banner() {
  const bannerData = [
    {
      titleOne: 'Discover Our Latest Collection',
      titleTwo: 'Shop Now',
      image: 'https://images.unsplash.com/photo-1515938736719-95b568dc8dd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat felis, ut consectetur turpis. Donec facilisis, nisi vel bibendum lobortis, velit velit sollicitudin neque.',
      btnText: 'Contact Us'
    },{
      titleOne: 'Discover Our Latest Collection',
      titleTwo: 'Shop Now',
      image: 'https://images.unsplash.com/photo-1627661368047-1193270a9907?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHx3b21hbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat felis, ut consectetur turpis. Donec facilisis, nisi vel bibendum lobortis, velit velit sollicitudin neque.',
      btnText: 'Contact Us'
    },{
      titleOne: 'Discover Our Latest Collection',
      titleTwo: 'Shop Now',
      image: 'https://images.unsplash.com/photo-1486693326701-1ea88c6e2af3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cm9uaWN8ZW58MHx8MHx8fDA%3D',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel placerat felis, ut consectetur turpis. Donec facilisis, nisi vel bibendum lobortis, velit velit sollicitudin neque.',
      btnText: 'Contact Us'
    }
  ];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-4 bottom-[-4rem] z-10 p-2 text-white bg-gray-700 rounded-full cursor-pointer hover:bg-gray-800"
        onClick={onClick}
      >
        <GrFormNextLink size={30} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-[5rem] bottom-[-4rem] z-10 p-2 text-white bg-gray-700 rounded-full cursor-pointer hover:bg-gray-800"
        onClick={onClick}
      >
        <GrFormPreviousLink size={30} />
      </div>
    );
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className='w-[100%] h-[100%] pt-[60px] pb-[80px]'>
        <div className='max-w-screen-xl m-auto'>
      <Slider {...settings}>
        {bannerData.map((data) => (
          <div key={data} >
        <div className='flex items-center flex-col gap-[50px] lg:gap-[20px] lg:flex-row justify-between w-full m-auto px-[20px]'>
          <div className='dark:text-white space-y-5 lg:max-w-lg'>
            <p className='font-semibold text-2xl'>{data.titleOne}</p>
            <h3 className='font-bold text-[2.5rem] sm:text-5xl text-blue-500'>{data.titleTwo}</h3>
            <p className='text-lg'>{data.description}</p>
            <Link to="contact" className='sm:text-[20px] block w-fit rounded-md bg-blue-500 px-6 py-[10px] text-white duration-100 hover:bg-blue-600'>{data.btnText}</Link>
          </div>
          <div className='md:h-[600px]'>
            <img className='h-full w-full rounded-lg' src={data.image} alt="" />
          </div>
        </div>
        </div>
        ))}
        </Slider>
        </div>
      </div>
    </>
  )
}

export default Banner
