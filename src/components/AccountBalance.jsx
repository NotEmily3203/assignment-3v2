import React, {useState, useEffect} from 'react';
const AccountBalance = ({balance, credits, debits, updateBalance}) => {
    const [tempBalance, setTempBalance] = useState(null);
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
    
        setTempBalance(+(totalBalance.toFixed(2))); //round and convert to float
      }, [credits, debits]);
    
      useEffect(() => {
        if(tempBalance){
        updateBalance(tempBalance);
        }
      }, [tempBalance]);
    return(
        <div>
            <p>Account Balance : {balance}</p>
        </div>
    )
}
export default AccountBalance;