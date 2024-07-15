import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Folakits from './layout/Homepage/Folakits'
import Shop from './layout/Shop/Shop'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Folakits/>}/>
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
