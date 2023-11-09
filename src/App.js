import logo from './logo.svg';
import './App.css';
import Home from './Companats/Home';
import Register from './Companats/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from './Companats/Payment';
import PaySuccess from './Companats/PaySuccess';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/payment" element={<Payment />}/>
      <Route path="/paysuccess" element={<PaySuccess/>}/>
  </Routes>
   </BrowserRouter>
  
);
}

export default App;
