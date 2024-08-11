import './App.css'
import { Blog } from './Blog/Blog'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Blog/>
      <Routes>
        <Route path='/'/>
      </Routes>
      </Router>
      
    </div>
  )
}

export default App
