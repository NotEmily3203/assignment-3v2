import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits'

function App() {
  var user = {
    accountBalance: 1234567.89,
      /*creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }*/
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home balance = {user.accountBalance}/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/credits" element={<Credits/>}/>
        <Route path="/debits" element={<Debits/>}/>
      </Routes>
    </div>
  );
}

export default App;
