import React from 'react'
import { Link,Outlet} from 'react-router-dom'


function SearchLayout() {
  return (
    <>   
     <Outlet/> 
    <div className='search-layout'>
     
   
    <div>
      <button className='search-btn'>  <Link  to="SearchRestaurants">Restaurants</Link></button>
       <button className='search-btn'> <Link to="SearchDishes">Dishes</Link></button>
    </div>
  
    </div>
    </>

  )
}

export default SearchLayout
