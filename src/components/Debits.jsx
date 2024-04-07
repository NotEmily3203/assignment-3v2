import React, {useState, useEffect} from 'react';
const Debits = ({updateDebits, currentDebits}) => {
    const [data, setData] = useState(null); // data=null
    const [error, setError] = useState(null);// eroor=null

    const [desc, setDesc]=useState('');
    const [amt, setAmt]=useState(0);
    useEffect(() => {
        const yoinkDebits = async () => {
            try {
                const response = await fetch('https://johnnylaicode.github.io/api/debits.json'); // call endpoint
                if (!response.ok) {
                    throw Error('Connection Failed');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            }
        };
        if(!currentDebits){
            yoinkDebits();
        }else if(currentDebits.length != 0){
            setData(currentDebits);
        }else if(currentDebits.length == 0){
            yoinkDebits();
        }
    }, []);

    

    useEffect(() => {
        let value = data;
        updateDebits(value);
    }, [data]);
    

    const handleDescChange = (e) => {
        setDesc(e.target.value);
    }

    const handleAmtChange = (e) => {
        setAmt(parseInt(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            id: data.length + 1,
            description: desc,
            amount: amt,
            date: "now",
        };
        const newData = [...data, newEntry];
        setData(newData)
        //console.log(data);
        setDesc('');
        setAmt('');
        
    }
   
    
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