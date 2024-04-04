import React from 'react';

import AccountBalance from './AccountBalance';
const Home = ({balance}) => {
    return(
        <div>
            <img src="https://picsum.photos/200/200" alt="bank"/>
            <h1>Bank of React</h1>

            <AccountBalance balance={balance}/>
        </div>
    )
}
export default Home;