import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function RestaurantMenu() {
let params=useParams()

let[restaurantMenu,setRestaurantMenu]=useState([])

useEffect(()=>{
    axios.get(` https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.492838&lng=78.54690149999999&restaurantId=${params.restaurantId}&catalog_qa=undefined&submitAction=ENTER`)
    .then((res)=>{
      setRestaurantMenu(res?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.splice(1)) 
     
    })
},[])

  return (
    <div className='container'>
      <h1>{params.restaurantName}</h1>
      <h2> Menu:</h2>

      <div class="accordion" id="accordionPanelsStayOpenExample">
      {restaurantMenu.map((items,i)=>{
        console.log(items)
       if(items.card.card.itemCards){
       console.log(items.card.card.itemCards)
        
        return  <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${i}`} aria-expanded="true" aria-controls={`panelsStayOpen-collapse${i}`}>
         <b>{items?.card?.card?.title} - {items?.card?.card?.title?.length}</b>
          </button>
        </h2>
        <div id={`panelsStayOpen-collapse${i}`} class="accordion-collapse collapse show">
          <div class="accordion-body">
           
          <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {items.card.card.itemCards.map((items,i)=>{
              console.log(items)
              return <div class="col">
              <div className="">
                <div class=" restaurant-card">
                <img className='restaurant-thumbnail' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${items?.card?.info?.imageId}`}  alt="Image not found"/>
                  <h5 class="card-title">{items?.card?.info?.name}</h5>
                  <br></br>
                  <p><i class={`bi bi-star-fill ${items?.info?.ratings?.aggregatedRating?.rating >=4.5 ? "high-rating": items?.info?.ratings?.aggregatedRating?.rating <=4 ? "low-rating"  : "avg-rating"}`}></i>{items?.card?.info?.ratings?.aggregatedRating?.rating}</p>
                  <h5 class="card-title"><i class="bi bi-currency-rupee"></i> {items?.card?.info?.price/100 ? items?.card?.info?.price/100 :items?.card?.info?.defaultPrice/100 }</h5>
                  <br></br>
                  <div> {items?.card?.info?.isVeg ? <p>Veg</p>: <p>Non Veg</p>}</div>
                 
                  <button type="button" class="btn btn-success">Add to Cart</button>
                </div> 
              </div>
            </div>
            })}
  
  
</div>

          </div>
        </div>
      </div>}
      })}
    
 
 
</div>
    </div>
  )
}

export default RestaurantMenu
