import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
    <header className='top-header' >
      <div  className='header' >

        <div>  
      <Link to={"/"}>  <img className='swiggy-image' 
         src='https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ=w240-h480-rw'/><b className='swiggy'> Swiggy </b></Link>
         </div>

      <div style={{cursor:"pointer"}}>
        <span className='address'>Home</span> 16-8-796, Kala Dera, Malakpet
        <i style={{textAlign:"center"}} class="bi bi-caret-down address-icon " ></i>
      </div>

      <nav style={{textAlign:"center"}} >
     <ul className='navbar' >

        <NavLink style={{color:"black"}} to={"/Search" }> <li className='list-navbar'><i class="bi bi-search list-icon"></i>Search</li></NavLink>

        <li className='list-navbar'><i class="bi bi-browser-edge list-icon"></i>Offers</li>
        <li className='list-navbar'> <i class="bi bi-patch-question list-icon"></i> Help</li>
        <li className='list-navbar'><i class="bi bi-person  list-icon"></i>Basalath</li>
        <li className='list-navbar'><i class="bi bi-cart-dash  list-icon"></i>Cart</li>
     </ul>
      </nav>

     

       {/* <Link to={"/SearchRestaurants"}> <h2> Search Restaurants</h2></Link>
        <Link to={"/SearchDishes"}> <h2> Search Dishes</h2></Link>
        <Link to={"/Cart"}><h2> Cart</h2></Link> */}
        </div>
    </header>
    </>
  )
}

export default Header
