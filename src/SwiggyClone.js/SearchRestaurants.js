import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SearchRestaurants() {
    let [searchRestaurants,setSearchRestaurants]=useState("")
    let [ moreRestaurants,setMoreRestaurants]=useState([])
    let [ exactRestaurants,setExactRestaurants]=useState(null)



    useEffect(()=>{
        axios.get(` https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.4400802&lng=78.3489168&str=${searchRestaurants}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=181a64ea-9b53-f5c2-fb99-84a451867b15`)
        .then((res)=>{
         if(res?.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT){
          if(res?.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.length==2){
            setExactRestaurants(res?.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[0]?.card?.card?.info)
          setMoreRestaurants(res?.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants)
          }else{
            setExactRestaurants(null)
            setMoreRestaurants(res?.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards)
          }
         }
        })

    },[searchRestaurants])

  return (
    <>
    <div style={{textAlign:"center"}}>
      <h1>Search your Restaurant</h1>
      <input className='search-input' placeholder='Search Restaurant'
      value={searchRestaurants}
      onChange={(e)=>{
        setSearchRestaurants(e.target.value)
      }}/>

    </div>
    <div className='container mt-4'>
    {exactRestaurants!= null ?<>
    <h2>Your Search</h2>
     <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-2">
      <Link to={`/restaurantMenu/${exactRestaurants?.name}/${exactRestaurants?.id}`}> <div  >
            <div className="card h-100 restaurant-card">
              <img className='restaurant-thumbnail'
               src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${exactRestaurants?.cloudinaryImageId}`}  />
              <div class="card-body">
                <h5 class="card-title">{exactRestaurants?.name}</h5>
        
                <p> <i class={`bi bi-star-fill ${exactRestaurants?.avgRating >=4.5 ? "high-rating": exactRestaurants?.avgRating <=4 ? "low-rating"  : "avg-rating"}`}></i> {exactRestaurants?.infoavgRating ? exactRestaurants?.avgRating : exactRestaurants?.avgRatingString}</p>
                <p class="card-title">{exactRestaurants?.sla?.slaString}</p>
                <h5 class="card-title">{exactRestaurants?.areaName}</h5>
                <p class="card-title">{exactRestaurants?.cuisines?.slice(0,4).join(",")}</p>
               
              </div>
            </div>
          </div> </Link>

      </div> </>:""}
   

      
     { moreRestaurants?.length!=0? <h2>Results related to Search</h2>:""}
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mt-2"> 
    {exactRestaurants== null ?  moreRestaurants?.map((item, i) => {
        return <Link to={`/restaurantMenu/${item?.card?.card?.info?.name}/${item?.card?.card?.info?.id}`}> <div  >
          <div className="card h-100 restaurant-card">
            <img className='restaurant-thumbnail'
             src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.card?.card?.info?.cloudinaryImageId}`}  />
            <div class="card-body">
              <h5 class="card-title">{item?.card?.card?.info?.name}</h5>
              
              <p> <i class={`bi bi-star-fill ${item?.card?.card?.info?.avgRating >=4.5 ? "high-rating": item?.card?.card?.info?.avgRating <=4 ? "low-rating"  : "avg-rating"}`}></i> {item?.card?.card?.info?.avgRating ? item?.card?.card?.info?.avgRating : item?.card?.card?.info?.avgRatingString}</p>
              <p class="card-title">{item?.card?.card?.info?.sla?.slaString}</p>
              <h5 class="card-title">{item?.card?.card?.info?.areaName}</h5>
              <p class="card-title">{item?.card?.card?.info?.cuisines?.slice(0,4).join(",")}</p>
             
            </div>
          </div>
        </div>
        </Link>
      }): moreRestaurants?.map((items, i) => {
        console.log(items)
          return <Link to={`/restaurantMenu/${items?.info?.name}/${items?.info?.id}`}> <div  >
            <div className="card h-100 restaurant-card">
              <img className='restaurant-thumbnail'
               src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items?.info?.cloudinaryImageId}`}  />
              <div class="card-body">
                <h5 class="card-title">{items?.info?.name}</h5>
        
                <p> <i class={`bi bi-star-fill ${items?.info?.avgRating >=4.5 ? "high-rating": items?.info?.avgRating <=4 ? "low-rating"  : "avg-rating"}`}></i> {items?.info?.avgRating ? items?.info?.avgRating : items?.info?.avgRatingString}</p>
                <p class="card-title">{items?.info?.sla?.slaString}</p>
                <h5 class="card-title">{items?.info?.areaName}</h5>
                <p class="card-title">{items?.info?.cuisines?.slice(0,4).join(",")}</p>
               
              </div>
            </div>
          </div>
          </Link>
        }) }

      </div>
      </div>

      {searchRestaurants?.length!="" && moreRestaurants?.length==0 ? <h2>Sorry Restaurant not Foumd</h2>:""}
    
    </>
  )
}

export default SearchRestaurants
