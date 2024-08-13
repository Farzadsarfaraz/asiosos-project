import './App.css'
import { Blog } from './Blog/Blog'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import News from './News/News'
import Footer from './Footer/Footer'
import Home from './Home/Home'

function App() {


  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Blog/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='news' element={<News/>}/>
      </Routes>
      <Footer/>
      </Router>
      
    </div>
  )
}

export default App
