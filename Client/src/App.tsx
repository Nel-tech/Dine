import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Home from "./Pages/Home/Home"
import About from './Pages/About/About';
function App() {
 
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
