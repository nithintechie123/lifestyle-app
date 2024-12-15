import {Routes,Route, Navigate }from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home'
import PageNotFound from "./components/PageNotFound/PageNotFound"
import PagenationProvider from './components/Context/PaginationContext'
import Cart from "./components/Cart/Cart"
import ProductDetails from "./components/ProductDetails/ProductDetails"

function App() {
  
  return (<PagenationProvider>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/home" element={<Navigate to="/" replace />} /> 
                <Route path="/product/:id" element={<ProductDetails/>}/> 
                <Route path="*" element={<PageNotFound />} />
              </Routes>
          </PagenationProvider>
  )
}

export default App
