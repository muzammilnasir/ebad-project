import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosHeart } from "react-icons/io";
import { toggleFavorite } from '../redux/slice/cartSlice';

function Favorite() {
  const dispatch = useDispatch();
  const { products, favorites } = useSelector((state) => state.cartSliceOne);

  const favoriteProduct = products.filter(favProduct => favorites.includes(favProduct.id));

  const handleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div>
      <h1 className='text-center mt-5 text-[2.5rem] font-bold'>Favorite Product</h1>
      {favoriteProduct.length > 0 ? (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] lg:gap-[30px] m-auto max-w-[1200px] py-[40px] px-[20px]'>
          {favoriteProduct.map((favProduct) => (
            <div key={favProduct.id} className='flex items-center justify-center'>
              <div className='w-full max-w-md mx-auto bg-white border-[1px] border-[#111827] rounded-3xl shadow-xl overflow-hidden'>
                <div className='max-w-md mx-auto'>
                  <div className='h-full w-full m-auto'>
                    <img className='w-full h-full object-contain' src={favProduct.image} alt={favProduct.titile} />
                  </div>
                  <div className='px-[20px] pt-[10px]'>
                    <p className='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{favProduct.title}</p>
                  </div>
                  <button className='pb-[20px] pr-3 flex w-full justify-end mt-4 items-center gap-3 font-semibold' onClick={() => handleFavorite(favProduct.id)}>
                  <p>Remove from Favorite</p>
                    <IoIosHeart className={`text-2xl ${favorites.includes(favProduct.id) ? 'text-red-500' : 'text-gray-400'}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p className='text-center text-[2rem] font-semibold w-full'>No favorite meals yet. Add some to see them here!</p>
      )}
    </div>
  );
}

export default Favorite;