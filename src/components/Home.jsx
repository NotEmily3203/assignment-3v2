import React, {useState, useEffect} from 'react';

import AccountBalance from './AccountBalance';
const Home = ({balance, credits, debits, updateBalance}) => {
    
    return(
        <div>
            <img src="https://picsum.photos/200/200" alt="bank"/>
            <h1>Bank of React</h1>
            <AccountBalance balance={balance} credits={credits} debits={debits} updateBalance={updateBalance}/>
        </div>
    )
}
export default Home;