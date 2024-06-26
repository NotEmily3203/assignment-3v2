import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits'
import UserProfile from './components/UserProfile';

function App() {
  const [user, setUser] = useState(
    { accountBalance: 1234567.89,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    }
  );
  const [error, setError] = useState(null);// eroor=null
  useEffect(() => {
    const yoinkCredits = async () => {
        try {
            const response = await fetch('https://johnnylaicode.github.io/api/credits.json'); // call endpoint
            if (!response.ok) {
                throw Error('Connection Failed');
            }
            const jsonData = await response.json();
            setUser((prevState)=>({
              ...prevState,
              creditList:jsonData,
            }));
        } catch (error) {
            setError(error);
        }
    };

    yoinkCredits();
}, []);

  const [error1, setError1] = useState(null);
  useEffect(() => {
    const yoinkDebits = async () => {
        try {
            const response = await fetch('https://johnnylaicode.github.io/api/debits.json'); // call endpoint
            if (!response.ok) {
                throw Error('Connection Failed');
            }
            const jsonData = await response.json();
            setUser((prevState)=>({
              ...prevState,
              debitList: jsonData,
            }));
        } catch (error) {
            setError1(error);
        }
    };
    yoinkDebits();
}, []);

  const mockLogIn = (logInInfo) => {  // Update state's currentUser (userName) after "Log In" button is clicked
    setUser((prevState) => ({
      ...prevState,
      currentUser: {userName: logInInfo.userName, memberSince: '11/22/99'},
    }));
  }
    //const [credit, setCredit] = useState([]);

    const updateCredits = (newCredits) => {
      setUser((prevState) => ({
        ...prevState,
        creditList: newCredits,
      }));
    }


    const updateDebits = (newDebits) => {
      console.log(newDebits);
      setUser((prevState) => ({
        ...prevState,
        debitList: newDebits,
      }));
    }

    const updateBalance = (newBalance) => {
      setUser((prevState) => ({
        ...prevState,
        accountBalance: newBalance,
      }));
    }

    useEffect(()=>{
      console.log(user)
    },[user])

    
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home balance = {user.accountBalance} credits={user.creditList} debits={user.debitList} updateBalance={updateBalance}/>}/>
        <Route path="/login" element={<Login mockLogin={mockLogIn}/>}/>
        <Route path="/profile" element={<UserProfile userName={user.currentUser.userName} memberSince={user.currentUser.memberSince}/>}/>
        <Route path="/debits" element={<Debits updateDebits={updateDebits} credits={user.creditList} currentDebits={user.debitList} error={error1} balance={user.accountBalance} updateBalance={updateBalance}/>}/>
        <Route path="/credits" element={<Credits updateCredits={updateCredits} currentCredits={user.creditList} debits={user.debitList} error={error} balance={user.accountBalance} updateBalance={updateBalance}/>}/>
      </Routes>
    </div>
  );
}

export default App;
