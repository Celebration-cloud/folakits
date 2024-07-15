import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Folakits from './layout/Homepage/Folakits'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Folakits/>}/>
      <Route path='/shop' element={<SH}
    </Routes>
    </BrowserRouter>
  )
}

export default App
