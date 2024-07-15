import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Folakits from './layout/Homepage/Folakits'
import Shop from './layout/Shop/Shop'
import Contact from './layout/Contact/Contact'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Folakits/>}>
        <Route path='shop' element={<Shop/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<Contact/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
