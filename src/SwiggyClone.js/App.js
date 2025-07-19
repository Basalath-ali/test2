import React from 'react'
import Header from './Header'
import Home from './Home'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RestaurantMenu from './RestaurantMenu'
import SearchRestaurants from './SearchRestaurants'
import SearchDishes from './SearchDishes'
import SearchLayout from './SearchLayout'



function App() {
  return (
  <>
        <BrowserRouter>
   <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/restaurantMenu/:restaurantName/:restaurantId" element={<RestaurantMenu/>}/>    
              <Route path='/Search' element={<SearchLayout/>}> 
                    <Route path='SearchRestaurants' element={< SearchRestaurants/>}/>
                    <Route path='SearchDishes' element={< SearchDishes/>}/>
            </Route>
      
       </Routes>
       </BrowserRouter>

       
      
      
    

      
      </>
  )
}

export default App
