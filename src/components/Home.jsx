import React from 'react';
import { Link } from "react-router-dom";

import AccountBalance from './AccountBalance';
const Home = ({balance}) => {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/credits">Credits</Link>
            <Link to="/debits">Debits</Link>
            <AccountBalance balance={balance}/>
        </div>
    )
}
export default Home;