import React, {useState, useEffect} from 'react';
const Debits = ({updateDebits, currentDebits, error}) => {
    const [data, setData] = useState(currentDebits); // data=null
    const [newEntry, setNewEntry] = useState(null);// eroor=null

    useEffect(()=>{ //when currentDebits changes, we update data (local value)
        if (currentDebits) {
            setData(currentDebits);
        } else {
            setData([]);
        }
    },[currentDebits]);

    const [desc, setDesc]=useState('');
    const [amt, setAmt]=useState(0);
    

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
        setNewEntry(newArray)
        //console.log(data);
        setDesc('');
        setAmt('');
        
    }
   
    useEffect(()=>{ //if new entry, then update data in APP.js
        //;
        if(newEntry){
            updateDebits(newEntry);
        }
    },[newEntry]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1>Debits</h1>
                {data.map(entry => (
                    <div key={entry.id}>
                        <div>
                            <strong>Description:</strong> {entry.description}
                        </div>
                        <div>
                            <strong>Date:</strong> {entry.date}
                        </div>
                        <div>
                            <strong>Amount:</strong> {entry.amount}
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
            </div>
        );
    }
}
export default Debits;