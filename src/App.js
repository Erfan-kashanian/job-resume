import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes, Link, BrowserRouter, Navigate } from 'react-router-dom'
import Home from './pages/home/home';
import Antecedent from './pages/antecedent/antecedent';
import Sign from './pages/sign/sign';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Article from './pages/article/article';

function App() {
const[time,setTime]=useState("")

useEffect(()=>{
  const timer= setInterval(()=>{setTime(moment().locale("fa").format('LTS'))},1000)
  return ()=>clearInterval(timer)
},[])
  return (
    <div className='main'>
      
      <BrowserRouter>
      <nav className='nav' id='top'>
      <div><h4>{time}</h4></div>
      <h2>رزومه کاری من</h2>
      <div className='links'>
        <NavLink to='/' className={({isActive})=>(isActive ? "active" : "")}>صفحه اصلی</NavLink>
        <NavLink to='/antecedent'>سوابق کاری</NavLink>
        <NavLink to='/sign'>ثبت نام</NavLink>
      </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/antecedent' element={<Antecedent/>}/>
        <Route path='/sign' element={<Sign/>}/>
        <Route path='/Article/:id' element={<Article/>}/>
        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
