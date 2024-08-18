import React from "react";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { remove, increaseQuantity, decreaseQuantity  } from "../../redux/slice/cartSlice";
import { FaPlus, FaMinus } from "react-icons/fa6";

function ItemProduct() {
  const cart = useSelector((state) => state.cartSliceOne.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(remove(product));
  };

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product));
  };

  return (
    <div>
      {cart.map((data) => (
        <div key={data.id}>
          <div className="w-full grid grid-cols-5 mb-4 border py-2">
            <div className="flex col-span-5 md:col-span-2 items-center gap-4 mx-4">
              <ImCross
                className="dark:text-white hover:text-red-500 duration-300 cursor-pointer"
                onClick={() => handleRemove(data)}
              />
              <img className="w-[100px] h-[100px] object-contain" src={data.image} alt={data.title} />
              <h1 className="font-semibold dark:text-white">{data.title.split(' ').slice(0, 3).join(' ')}</h1>
            </div>
            <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 md:px-0 gap-6 md:gap-0">
              <div className="flex md:w-1/3 items-center dark:text-white text-lg font-semibold">
                $ {data.price}
              </div>
              <div className="md:w-1/3 flex items-center gap-6 text-lg">
              <FaMinus
                  className="w-6 h-6 bg-gray-100 p-1 flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
                  onClick={() => handleDecreaseQuantity(data)}
                />
                <p className="font-bold text-[17px] dark:text-white">{data.cartQuantity}</p>
                <FaPlus
                  className="w-6 h-6 bg-gray-100 p-1 flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
                  onClick={() => handleIncreaseQuantity(data)}
                  />
              </div>
              <div className="w-1/3 flex items-center font-semibold text-lg dark:text-white">
              <p>$ {data.cartQuantity * data.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemProduct;
