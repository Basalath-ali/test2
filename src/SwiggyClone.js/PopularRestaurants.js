import React from 'react'
import Shimmer from './Shimmer'
import { NavLink } from 'react-router-dom'

function PopularRestaurants({popularRestaurants}) {
  return (
    <>


    <h1>Popular Restaurants in <span className='hyderabad'> Hyderabad </span></h1>
       <div style={{backgroundColor:"whitesmoke"}} className='col-12'>

    
<div className='restaurant'>


   </div>

  <div className='container mt-4 '>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
      {popularRestaurants?.length==0? <Shimmer/>:""}

      {popularRestaurants?.map((items, i) => {
      // console.log(items)
        return <NavLink to={`/restaurantMenu/${items.info.name}/${items.info.id}`}> <div  >
          <div className="card h-100 restaurant-card">
            <img className='restaurant-thumbnail'
             src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${items.info.cloudinaryImageId}`}  />
            <div class="card-body">
              <h5 class="card-title">{items?.info?.name}</h5>
              
              <p> <i class={`bi bi-star-fill ${items?.info?.avgRating >=4.5 ? "high-rating": items?.info?.avgRating <=4 ? "low-rating"  : "avg-rating"}`}></i> {items?.info?.avgRating ? items?.info?.avgRating : items?.info?.avgRatingString}</p>
              <p class="card-title">{items?.info?.sla?.slaString}</p>
              <h5 class="card-title">{items?.info?.areaName}</h5>
              <p class="card-title">{items?.info?.cuisines?.slice(0,4).join(",")}</p>
             
            </div>
          </div>
        </div>
        </NavLink>
      })}
</div> 

    </div>
  </div>

  </>

  )
}

export default PopularRestaurants
