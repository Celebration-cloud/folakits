import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Folakits from './layout/Homepage/Folakits'
import Shop from './layout/Shop/Shop'
import Contact from './layout/Contact/Contact'
import About from './layout/About/About'
import Log from './layout/Log/Log'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Folakits/>}/>
        <Route path='/log' element={<Log/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about' element={<Ca}/>
        <Route path='/about' element={<About/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
