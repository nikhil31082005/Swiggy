import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RestaurantDetails() {
    const { id } = useParams();
    const API = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.49870&lng=77.66690&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;

    const [restInfoDetails, setRestInfoDetails] = useState([]);

    useEffect(() => {
        async function fetchRestaurantDetails() {
            try {
                const response = await axios.get(API);
                const items = response.data.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
                setRestInfoDetails(items);
            } catch (error) {
                console.error("Error fetching restaurant details:", error);
            }
        }

        fetchRestaurantDetails();
    }, [id]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
                Items available at Restaurant ID: <span className="text-black">{id}</span>
            </h1>

            {restInfoDetails.length === 0 ? (
                <p className="text-center text-gray-600">No items found.</p>
            ) : (
                restInfoDetails.map((foodItem, index) => {
                    const { name, defaultPrice, price, category, imageId } = foodItem.card.info;
                    const displayPrice = (defaultPrice || price || 0) / 100;

                    return (
                        <div key={index} className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-md rounded-lg mb-6 overflow-hidden border hover:shadow-lg transition-shadow">
                            <div className="md:w-3/4 p-4">
                                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                                <p className="text-gray-600 mt-2">Category: <span className="font-medium">{category}</span></p>
                                <p className="text-green-600 font-bold mt-1">₹ {displayPrice.toFixed(2)}</p>
                            </div>

                            {imageId && (
                                <img
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                                    alt={name}
                                    className="w-full md:w-52 h-44 object-cover"
                                />
                            )}

                            <button className="md:ml-auto bg-green-500 text-white font-medium px-4 py-2 m-4 rounded hover:bg-green-600 transition-colors">
                                Add +
                            </button>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default RestaurantDetails;
