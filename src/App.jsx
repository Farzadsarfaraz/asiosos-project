import './App.css';
import { Blog } from './Blog/Blog';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './API1/News';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import NewsFiltering from './API2/NewsFiltering';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Blog />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='news' element={<News />} />
            <Route path='newsFiltering/:category' element={<NewsFiltering />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;