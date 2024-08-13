import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import wifi from "../assets/wifi.png";
import apple from "../assets/apple.png";
import python from "../assets/python.png";
import arrowDown from '../assets/arrowDown.png'

const Navbar = () => {
  return (
    <div className="wrapper-div">
      <div className="navbar-right">
        <img src={logo} width="100px" onClick={()=>window.location.href ="https://www.asioso.com/en"} style={{cursor:"pointer"}} />
        <ul className="navList">
        <Link to='/'><li>HOME</li></Link>
          <div className="Navbar-news">
          <Link to='news'><li>NEWS</li></Link>
          <img src={arrowDown} width="20px"/>
          </div>
          <li>Unknown</li>
          <li>VIDEOS</li>
          <li>REVIEWS</li>
          <li onClick={()=>window.scrollTo(0,15000)} style={{cursor:"pointer"}}>CONTACT US</li>
        </ul>
      </div>
      <div className="navbar-icons">
        <img src={wifi} width="20px" style={{rotate: "40deg"}} />
        <img src={python} width="20px" />
        <img src={apple} width="20px" />
      </div>
    </div>
  );
};

export default Navbar;
