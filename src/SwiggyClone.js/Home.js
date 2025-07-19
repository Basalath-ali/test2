
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PopularRestaurants from './PopularRestaurants'
import LocationSection from './LocationSection'
import SearchRestaurants from './SearchRestaurants'
import Categories from './Categories'




function Home() {

  let [popularRestaurants, setPopularRestaurants] = useState([])
  let [locationSearch, setLocationSearch] = useState("")
  let [locationName, setLocationName] = useState([])
  let [coordinates,setCoordinates]=useState({lat:"17.4485835",lng: "78.39080349999999"})


  useEffect(() => {
    axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${coordinates.lat}&lng=${coordinates.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
      .then((res) => {
        setPopularRestaurants(res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      })
  }, [coordinates])

  useEffect(()=>{
    axios.get(`https://www.swiggy.com/dapi/misc/place-autocomplete?input=${locationSearch}&type=`)
    .then((res)=>{
     setLocationName(res?.data?.data)
     console.log(res)
    })
  },[locationSearch])

  function locationRestaurants(placeId){
    axios.get(`https://www.swiggy.com/dapi/misc/address-recommend?place_id=${placeId}`)
    .then((res)=>{
      setCoordinates(res?.data?.data[0]?.geometry?.location)
    })
    

  }

  return (
    <>

<Categories/>
    <LocationSection
    setLocationSearch={setLocationSearch}
    locationSearch={locationSearch}
    locationName={locationName}
    locationRestaurants={locationRestaurants}
    setPopularRestaurants={setPopularRestaurants}
    />

    
    
    <div className='row p-4 m-20'>
   
     
    <PopularRestaurants 
    popularRestaurants={popularRestaurants}
   
    />

    
     </div>
    
    </>
  )
}

export default Home

