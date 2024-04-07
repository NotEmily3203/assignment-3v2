import React, {useState, useEffect} from 'react';
import AccountBalance from './AccountBalance';
import './credit_debit.css'
const Credits = ({updateCredits,currentCredits,debits, error, balance, updateBalance}) => {
    const [data, setData] = useState(currentCredits); // data=null
    const [newEntry, setNewEntry] = useState(null);
    useEffect(()=>{ //when currentCredits changes, we update data (local value)
        if (currentCredits) {
            setData(currentCredits);
        } else {
            setData([]);
        }
        console.log(currentCredits)
    },[currentCredits]); //this updates the page

    const [desc, setDesc]=useState('');
    const [amt, setAmt]=useState(0);

    

    /*useEffect(() => {
        
        let value = data;
        updateCredits(value);
    }, [data]);*/
    

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    }

    const handleAmtChange = (e) => {
        setAmt(parseInt(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const entry = {
            id: data.length + 1,
            description: desc,
            amount: +(amt.toFixed(2)),
            date: new Date().toISOString(),
        };
        const newArray = [...data, entry];
        setNewEntry(newArray);
        //console.log(data);
        setDesc('');
        setAmt('');
    }

    useEffect(()=>{ //if new entry, then update data in APP.js
        //;
        if(newEntry){
            updateCredits(newEntry);
        }
    },[newEntry]);
   
    
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='page_layout'>
                <div className='display'>
                <h1>Credits</h1>
                {data.map(entry => (
                    <div key={entry.id} className='row'>
                        <div>
                            <p><strong>Description:</strong> {entry.description}</p>
                        </div>
                        <div>
                        <p><strong>Date:</strong> {entry.date}</p>
                        </div>
                        <div>
                        <p><strong>Amount:</strong> {entry.amount}</p>
                        </div>
                    </div>
                ))}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" onChange={handleDescChange}/>
                    </div>
                    <div>
                        <label>Amount</label>
                        <input type="text" name="amount" onChange={handleAmtChange}/>
                    </div>
                    <button>Submit</button>
                </form>
                </div >
                <div className='balance'><AccountBalance balance={balance} credits={currentCredits} debits={debits} updateBalance={updateBalance}/>
</div>
            </div>
        );
    }
}
export default Credits;