import { Link, NavLink} from "react-router-dom";
import "./index.css";
import Profile from './profile'
import { useState } from "react";


function Header() {

    const [active,setActive] = useState(false)
    function handleClick(){
        setActive(prev => !prev)
    }
  return (
    <header className="header-section">
      <div className="header-container">
        <nav>
          <NavLink to="/" className="main-nav-link">
            Home
          </NavLink>
          <NavLink to="/projects" className="main-nav-link">
            Projects
          </NavLink>
          <NavLink to="/about" className="main-nav-link">
            About
          </NavLink>
          <Link to="/policy" onClick={handleClick} className={`main-nav-link ${active ? "actives": ""}`}>
            Policies
          </Link>
          <NavLink to="/contact" className="main-nav-link">
            Contact
          </NavLink>

          <NavLink to="/submittedcontact" className="main-nav-link">
            Submitted Contacts
          </NavLink>
        </nav>

        <Profile/>

      </div>
    </header>
  );
}

export default Header;
