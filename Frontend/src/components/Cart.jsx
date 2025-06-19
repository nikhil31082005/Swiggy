import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../utils/cartSlice';

function Cart() {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    function handleDeleteItem(foodItem){
        dispatch(removeItem(foodItem));
    }
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
        {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No items found.</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2">
                    {cartItems.map((foodItem, index) => {
                        const { name, defaultPrice, price, category, imageId } = foodItem.card.info;
                        const displayPrice = (defaultPrice || price || 0) / 100;

                        return (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row items-center bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 animate-fadeIn"
                            >
                                {imageId && (
                                    <img
                                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                                        alt={name}
                                        className="w-full sm:w-40 h-40 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-6 transition-transform duration-300 hover:scale-105"
                                    />
                                )}

                                <div className="flex-1">
                                    <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Category: <span className="font-medium text-gray-700">{category}</span>
                                    </p>
                                    <p className="text-lg text-green-600 font-semibold mt-2">₹ {displayPrice.toFixed(2)}</p>
                                </div>

                                <button onClick={() => handleAddItem(foodItem)} className="bg-green-500 text-white font-semibold px-5 py-2 rounded-lg mt-4 sm:mt-0 sm:ml-6 hover:bg-green-600 transition-all duration-300">
                                    Add +
                                </button>
                                <button onClick={() => handleDeleteItem(foodItem)} className="bg-red-500 text-white font-semibold px-5 py-2 rounded-lg mt-4 sm:mt-0 sm:ml-6 hover:bg-green-600 transition-all duration-300">
                                    Remove -
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
    </div>
  )
}

export default Cart