import MenuBar from './component/MenuBar/MenuBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import ExploreFood from './pages/ExploreFood/ExploreFood'
import FoodDetails from './pages/FoodDetails/FoodDetails'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <div>
      <MenuBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/explore' element={<ExploreFood/>} />
        <Route path='/food/:id' element={<FoodDetails/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App