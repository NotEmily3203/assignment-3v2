import React, {useState, useEffect} from 'react';
const Credits = ({updateCredits,currentCredits, error}) => {
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
            <div>
                <h1>Credits</h1>
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
export default Credits;