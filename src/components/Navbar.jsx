import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/credits">Credits</Link>
            <Link to="/debits">Debits</Link>
        </div>
    )
}

export default Navbar;