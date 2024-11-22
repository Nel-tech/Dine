import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from "./Pages/Home/Home"
import About from './Pages/About/About';
import SignIn from "./Pages/Authentication/SignIn/SignIn"
import SignUp from "./Pages/Authentication/SignUp/SignUp"
import Menu from './Pages/Menu/Menu';
function App() {
 
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
         <Route path="/signin" element={<SignIn />}></Route>
           <Route path="/signup" element={<SignUp />}></Route>
           <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
