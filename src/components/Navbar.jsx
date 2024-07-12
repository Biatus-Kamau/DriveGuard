import React from "react";
import { Link } from 'react-router-dom';
import './comp.css';

const Navbar = ()=>{
    return(
        <nav className="navbar">
            <div className="brand">DriveGuard</div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/report">Report</Link>
            </div>
          </nav>
    )
}
export default Navbar;