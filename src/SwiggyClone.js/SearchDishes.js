import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link,Navigate } from 'react-router-dom'

  function SearchDishes() {

    let[searchDishes,setSearchDishes]=useState("")
    let[dishes,setDishes]=useState([])

    useEffect(()=>{
        axios.get(` https://www.swiggy.com/dapi/restaurants/search/v3?lat=17.4400802&lng=78.3489168&str=${searchDishes}&trackingId=undefined&submitAction=ENTER&queryUniqueId=ca695039-e861-0903-c8bf-c205a4cdd78d`)
        .then((res)=>{
            if(res?.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH){
            setDishes(res?.data?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.splice(1))}
        })

    },[searchDishes])

  return (
    <>
    
    <div style={{textAlign:"center"}}>
      <h1>Search Dishes</h1>
      <input className='search-input' placeholder='Search your Dish'
      value={searchDishes}
      onChange={(e)=>{
        setSearchDishes(e.target.value)
      }}
      />
    </div>

      <div className='container mt-4'>
    <div class="row row-cols-1 row-cols-md-3 g-4">
     
    {dishes.map((item,i)=>{
      console.log(item)
        return <div class="col">
        <div class="card h-100">
          <div className='p-3'>
          <h3>{item?.card?.card?.restaurant?.info?.name}</h3>
          <Link to={`/restaurantMenu/${item?.card?.card?. restaurant?.info?.name}/${item?.card?.card?. restaurant?.info?.id}`} > <span><button type="button" class="btn btn-warning">Menu</button></span></Link>
          </div>
         {item?.card?.card?.info?.imageId ? <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ ${item?.card?.card?.info?.imageId}`} class="image-pic" alt="image not found"/>
         : <img className='class="image-pic" alt="image not found"
         ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuZnWQ3bF1Lvn-EOB7ty4iFjuRW08tWfltg&s' />}
          <div class="card-body">
            <h5 class="card-title">{item?.card?.card?.info?.name}</h5>
            <p class="card-title">{item?.card?.card?.info?.ratings?.aggregatedRating?.rating}</p>
            <h5 class="card-text"><i class="bi bi-currency-rupee"></i>{item?.card?.card?.info?.price/100}</h5>
            <div> {item?.card?.info?.isVeg ? <p>Veg</p>: <p>Non Veg</p>}</div>
            <button type="button" class="btn btn-success">Add to Cart</button>
          </div>
        </div>
      </div>
     
      })}
  
</div>
</div>

    </>
  )
}

export default SearchDishes
