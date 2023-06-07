import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import CarDetail from './pages/CarDetail';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cardetail/:id' element={<CarDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
