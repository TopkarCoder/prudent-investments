import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/PrudentLogo.jpeg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <div className='logo-container'>
            <img src={logo} alt="Prudent Investments Logo" className="logo-img" />
            <span className="company-name">Prudent Investments</span>
          </div>
        </Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
        <li className="dropdown">
          <Link to="/products" onClick={toggleMenu}>Products</Link>
          <ul className="dropdown-menu">
            <li><Link to="/products/mutual-funds" onClick={toggleMenu}>Mutual Funds</Link></li>
            <li><Link to="/products/fdsandbonds" onClick={toggleMenu}>FDs/Bonds</Link></li>
            <li><Link to="/products/insurance" onClick={toggleMenu}>Insurance</Link></li>
          </ul>
        </li>
        

        <li className='dropdown'>
          <Link to="/login" className="dropdown-title" onClick={toggleMenu}>Login</Link>
            <ul className="dropdown-menu">
              <li><Link to="https://prudentinvestment.investwell.app/app/#/login" target='blank' onClick={toggleMenu}>Client Login</Link></li>
              <li><Link to="/admin-login" target='blank' onClick={toggleMenu}>Admin Login</Link></li>
            </ul>
        </li>

        <li className="dropdown"> 
          <Link to="/KnowledgeCenter" className="dropdown-title" onClick={toggleMenu}>Knowledge Center</Link>
            <ul className="dropdown-menu">
              <li><Link to="/KnowledgeCenter/investor-education" onClick={toggleMenu}>Investor Education</Link></li>
              <li><Link to="/KnowledgeCenter/tools" onClick={toggleMenu}>Tools</Link></li>
            </ul>
        </li>

        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </nav>
    
  );
}

export default Navbar;

