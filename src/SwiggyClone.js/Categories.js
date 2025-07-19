import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Categories() {



  return (
    <>
      <div style={{display:"flex",padding:"10px",margin:"15px",justifyContent:"space-around"}}>
        <h2>What's on your mind ?</h2>
        <div>
            <div className='categories-section'><i class="bi bi-arrow-left-short arrow"></i></div>
            <div className='categories-section'><i class="bi bi-arrow-right-short arrow"></i></div>
            </div>
      </div>

      <div className='food-items'>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png" width="144" height="180" alt="restaurants curated for south indian"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" width="144" height="180" alt="restaurants curated for biryani"/>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North Indian.png" width="144" height="180" alt="restaurants curated for north indian"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" width="144" height="180" alt="restaurants curated for pizza"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png" width="144" height="180" alt="restaurant curated for chinese"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png" width="144" height="180" alt="restaurants curated for burger"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png" width="144" height="180" alt="restaurants curated for veg"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png" width="144" height="180" alt="restaurant curated for cakes"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad.png" width="144" height="180" alt="restaurant curated for salad"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_shawarma.png" width="144" height="180" alt="restaurant curated for shawarma"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/4ec9d604-32db-4820-a21d-4dde0ced8ecc_Rolls1.png" width="144" height="180" alt="restaurants curated for roll"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png" width="144" height="180" alt="restaurants curated for dosa"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png" width="144" height="180" alt="restaurants curated for paratha"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png" width="144" height="180" alt="restaurant curated for shakes"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Bath.png" width="144" height="180" alt="restaurant curated for bath"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png" width="144" height="180" alt="restaurant curated for pasta"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png" width="144" height="180" alt="restaurants curated for icecream"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png" width="144" height="180" alt="restaurant curated for noodles"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png" width="144" height="180" alt="restaurants curated for idly"></img>
          <img class="sc-guDLRT eBoSEC  food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png" width="144" height="180" alt="restaurant curated for Pastry"></img>
      </div>


      

    </>
  )
}

export default Categories
