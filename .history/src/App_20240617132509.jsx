import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Folakits from './layout/Homepage/Folakits'
import Shop from './layout/Shop/Shop'
import Contact from './layout/Contact/Contact'
import About from './layout/About/About'
import Log from './layout/Log/Log'
import Cart from './layout/Cart/Cart'
import WishList from './layout/WishList/WishList'
import { lazy } from 'react'
const FolaKits = lazy
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Folakits/>}/>
        <Route path='/log' element={<Log/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about' element={<Cart/>}/>
        <Route path='/about' element={<WishList/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
