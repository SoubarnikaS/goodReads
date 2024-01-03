import Landing from './Components/Landing'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import Explore from './Components/Explore'
import Fav from './Components/Fav'
import ReadingList from './Components/ReadingList'
import './Assests/CSS/Landing.css'
import './Assests/CSS/Home.css'
import './Assests/CSS/NavBar.css'
import './Assests/CSS/ONav.css'
import './Assests/CSS/Login.css'
import './Assests/CSS/Register.css'
import './Assests/CSS/Explore.css'
import './Assests/CSS/Fav.css'

import { Route, Routes } from 'react-router-dom';

const App=()=>{
  return(
    <>
    <Routes>
      <Route path = "/" element = {<Landing/>}/>
      <Route path = "/home" element = {<Home/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/register" element = {<Register/>}/>
      <Route path = "/explore" element = {<Explore/>}/>
      <Route path = "/fav" element = {<Fav/>}/>
      <Route path = "/readList" element = {<ReadingList/>}/>
    </Routes>
    
    </>
  )
}

export default App;