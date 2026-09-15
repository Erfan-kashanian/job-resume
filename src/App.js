import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Routes, Link, BrowserRouter, Navigate } from 'react-router-dom'
import Home from './pages/home/home';
import Antecedent from './pages/antecedent/antecedent';
import Sign from './pages/sign/sign';
import moment from 'moment';
import { useEffect, useState } from 'react';
import Article from './pages/article/article';
import bale from './bale.png'
import eita from './eita.png'
import telegram from './telegram.png'
import whatsapp from './whatsapp.png'


function App() {
const[time,setTime]=useState("")

useEffect(()=>{
  const timer= setInterval(()=>{setTime(moment().locale("fa").format('LTS'))},1000)
  return ()=>clearInterval(timer)
},[]);
    const[modal,setModal]=useState(true)
    const[darkMode,setDarkMode]=useState(false)
  return (
    <div className='main'>
      {modal && <div className='modalBack'>
            <div className='modalFront'>
            <h3>سلام من عرفان کاشانیان هستم این سایت رزومه من هست
             و شما در modal سایت من هستید
            </h3>
            <button onClick={()=>{setModal(false)}}>ورود به سایت</button>
            </div>
            </div>}
      <BrowserRouter basename='/job-resume'>
      <nav className={darkMode ? "navdark" : "nav"} id='top' darkMode={darkMode} setDarkMode={setDarkMode}>
      <div><h4>{time}</h4></div>
      <h2>رزومه کاری من</h2>
      <div className={darkMode ? "darkLinks" : "links"}>
        <NavLink to='/' className={({isActive})=>`${isActive && !darkMode ? "active" : ""} ${isActive && darkMode ? "darkactive" : ""}`}>صفحه اصلی</NavLink>
        <NavLink to='/antecedent' className={({isActive})=>`${isActive && !darkMode ? "active" : ""} ${isActive && darkMode ? "darkactive" : ""}`}>سوابق کاری</NavLink>
        <NavLink to='/sign' className={({isActive})=>`${isActive && !darkMode ? "active" : ""} ${isActive && darkMode ? "darkactive" : ""}`}>ثبت نام</NavLink>
      </div>
        <button className={darkMode ? "darkBut" : "but"} onClick={()=>setDarkMode(!darkMode)}>dark / light</button>
      </nav>
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode}/>}/>
        <Route path='/antecedent' element={<Antecedent darkMode={darkMode}/>}/>
        <Route path='/sign' element={<Sign darkMode={darkMode}/>}/>
        <Route path='/Article/:id' element={<Article darkMode={darkMode}/>}/>
        <Route path='*' element={<Navigate to={'/'} darkMode={darkMode}/>}/>
      </Routes>
      <footer className={darkMode ? "darkfooter" : "footer"}>
        <p>این footer سایت بنده است که لینک شبکه های مجازی که در انها در دسترس و پاسخگو هستم را قرار داده ام</p>
        <div className='icons'>
          <div><a href='https://eitaa.com/Erfan_kashanian'><img src={eita} alt='eita address'/></a></div> 
          <div><a href='https://ble.ir/Erfan_kashanian'><img src={bale} alt='bale address'/></a></div>
          <div><a href='t.me/Bme_kashanian'><img src={telegram} alt='telegram'/></a></div>
          <div><a href='https://wa.me/qr/VAOTCLP4GGXBM1'><img src={whatsapp} alt='whatsapp'/></a></div>
        </div>
      </footer>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
