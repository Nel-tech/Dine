import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/Index.css'
import Home from "./Pages/Home/Home"

function App() {
 
  return (
    <>
      <Router>
      <Routes>
        <Route path="" element={<Home />}></Route>
       
      </Routes>
    </Router>
    </>
  )
}

export default App
