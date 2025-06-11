import React from 'react'
import ApiCalling from './ApiCalling'
import RestaurantCard from './RestaurantCard';

function Body() {

    const restArr = ApiCalling();
    console.log("rst", restArr)
  return (
    <div className='ml-20 mt-4'>
        <h1 className='text-2xl'>Restaurants with online food delivery in Meerut</h1>
        <button className='border rounded-2xl p-2 mx-4'>Ratings 4.5+</button>
        <button className='border rounded-2xl p-2 mx-4'>Reset</button>
        <input className='border rounded-2xl p-2 mx-4' type="text" placeholder='Search'/>

        <div>
            <RestaurantCard restArr={restArr}/>
        </div>
    </div>
  )
}

export default Body