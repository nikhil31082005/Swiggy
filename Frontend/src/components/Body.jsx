import React, { useEffect, useState } from "react";
import ApiCalling from "./ApiCalling";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";

function Body() {
  const restArr = ApiCalling();
  const[allRestArr, setAllRestArr] = useState(restArr);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  // console.log("allrestarr", allRestArr)

  

  function handleRating() {
    let newArr = allRestArr.filter((restDetails) => restDetails.info.avgRating >= 4.5)
    // console.log("new", newArr)
    setAllRestArr(newArr);
    setActive1(true);
    setActive2(false);
  }

  function resetRating() {
    setAllRestArr(restArr);
    setActive2(true);
    setActive1(false);
  }

  useEffect(()=>{
    if(restArr && restArr.length){
      setAllRestArr(restArr);
    }
  }, [restArr])
  // console.log("rst", restArr);
  return (
    <div className="px-8 py-6 md:px-20 md:py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Restaurants with Online Food Delivery in Meerut
      </h1>

      <div className="flex flex-wrap items-center gap-4 mb-8">
        <button onClick={handleRating} className= {active1 ? "bg-red-500 text-white px-4 py-2 rounded-full " : " text-black px-4 py-2 rounded-full "} >
          Ratings 4.5+
        </button>

        <button onClick={resetRating} className={active2 ? "bg-red-500 text-white px-4 py-2 rounded-full": " text-black px-4 py-2 rounded-full "}>
          Reset
        </button>

        <Search restArr={restArr} setAllRestArr={setAllRestArr}/>
        {/* <button onClick={filterRest}>Search</button> */}
      </div>

      <div>
        <RestaurantCard restArr={allRestArr} />
      </div>
    </div>
  );
}

export default Body;
