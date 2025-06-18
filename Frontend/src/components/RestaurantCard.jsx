import React from "react";
import { Link } from "react-router-dom";

function RestaurantCard({ restArr }) {
  // console.log("rest", restArr);
  return (
    // `/retaurants/${restDetails.info.id}`
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100 min-h-screen">
      {restArr.map((restDetails) => (
        <Link to={`/restaurants/${restDetails.info.id}`}>
          <div
          key={restDetails.info.id}
          className="w-72 bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img
            className="h-44 w-full object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restDetails.info.cloudinaryImageId}`}
            alt={restDetails.info.name}
          />
          <div className="p-4">
            <h1 className="text-lg font-semibold text-gray-800 truncate">
              {restDetails.info.name}
            </h1>
            <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                ⭐ {restDetails.info.avgRating}
              </span>
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                ⏱ {restDetails.info.sla.deliveryTime} min
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-500 line-clamp-1">
              {restDetails.info.cuisines?.join(", ")}
            </p>
            <p className="text-sm text-gray-500">
              📍 {restDetails.info.areaName}
            </p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default RestaurantCard;
