import axios from 'axios';
import { useState, useEffect } from 'react';

function ApiCalling() {
    const [allRestaurantArr, setAllRestaurantArr] = useState([]);
    // const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.98340&lng=77.70600&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    const API = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=27.49870&lng=77.66690&carousel=true&third_party_vendor=1"
    
    useEffect(() => {
        async function fetchApi() {
            const response = await axios.get(API);
            // console.log("response",response.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            setAllRestaurantArr(response.data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }

        fetchApi();
    }, [])

    return allRestaurantArr;
}

export default ApiCalling;