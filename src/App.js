import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import React, {useState} from 'react';
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

  const mockLogIn = (logInInfo) => {  // Update state's currentUser (userName) after "Log In" button is clicked
    setUser({currentUser: {userName: logInInfo.userName, memberSince: '11/22/99'}})
  }


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home balance = {user.accountBalance}/>}/>
        <Route path="/login" element={<Login mockLogin={mockLogIn}/>}/>
        <Route path="/profile" element={<UserProfile userName={user.currentUser.userName} memberSince={user.currentUser.memberSince}/>}/>
        <Route path="/credits" element={<Credits/>}/>
        <Route path="/debits" element={<Debits/>}/>
      </Routes>
    </div>
  );
}

export default App;
