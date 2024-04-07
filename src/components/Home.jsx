import React, {useState, useEffect} from 'react';

import AccountBalance from './AccountBalance';
const Home = ({balance, credits, debits, updateBalance}) => {
    const [tempBalance, setTempBalance] = useState(0);
    useEffect(() => {
        let totalBalance = 0;
    
        if (credits && credits.length !== 0) {
            for(let i =0; i<credits.length; i++){
                totalBalance += credits[i].amount;
            }
        }
    
        if (debits && debits.length !== 0) {
            for(let i =0; i<debits.length; i++){
                totalBalance -= debits[i].amount;
            }
        }
    
        setTempBalance(totalBalance);
      }, [credits, debits]);
    
      useEffect(() => {
        updateBalance(tempBalance);
      }, [tempBalance]);
    return(
        <div>
            <img src="https://picsum.photos/200/200" alt="bank"/>
            <h1>Bank of React</h1>

        </div>
    )
}
export default Home;