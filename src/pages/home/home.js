import './home.css'
import { useState } from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import Example from './docs/docs';

export default function Home({darkMode}){
    const[skills,setSkills]=useState(false)
    return(
    <div className={darkMode ? "darkMain" : "main"}>
            
      <div className={darkMode ? "darkhero" : "hero"}>
        <div className='text'>
          <p>عرفان کاشانیان</p>
          <p>front-end developper</p>
          <p>متخصص در javaScript  و React</p>
          <p>مسلط به طراحی سایت های Responsive به درخواست و سلیقه مشتری</p>
        </div>
        <div className='image'>
          <img src={img2} alt='resume'/>
        </div>
      </div>
      <div className={darkMode ? "bodyDark" : "body"}>
      <aside className={darkMode ? "darkaside" : "aside"}>
        <ul>
          <li><a href='#detail'>مشخصات کلی</a></li>
          <li><a href='#skill'>مهارت ها </a></li>
          <li><a href='#licence'>دوره های گذرانده شده</a></li>
          <li><a href='#contact'>ارتباط با من</a></li>
        </ul>
      </aside>
      <div className={darkMode ? "darkContent" : "content"}>
        <h4> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={darkMode ? "white" : "black"} className="svg" viewBox="0 0 16 16">
      <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"/>
      </svg> مشخصات کلی</h4>
                  <ul className='detail' id='detail'>
                <li>نام و نام خانوادکی: عرفان کاشانیان</li>
                <li>تاریخ تولد: 13/2/1377</li>
                <li>میزان تحصیلات: کارشناسی</li>
                <li>رشته و گرایش: مهدنسی پزشکی - بیوالکتریک</li>
                <li>دانشگاه: ازاد واحد تهران مرکز</li>
                <li>معدل: 15.8</li>
                <li>زبان خارجی و میزان تسلط: انگلیسی - متوسط</li>
            </ul>
            <h4 id='skill'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={darkMode ? "white" : "black"} className="svg" viewBox="0 0 16 16">
            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
    </svg> مهارت ها</h4>
            <p>برای دیدن مهارت ها روی دکمه زیر کلیک کنید</p>
            <div className={darkMode? "skillButtonDark" : "skillButton"}><button  onClick={()=>{if(skills){setSkills(false)}else{setSkills(true)}}}>اینجا را کلیک کنید</button></div>
            <div>
            <ul className={`${skills && !darkMode ? "down" : ""} ${ skills && darkMode ? "darkdropDown" : ""} ${!skills && !darkMode ? "up" : ""} ${!skills && darkMode ? "darkdropUp" : ""}`}>
              <li>html</li>
              <li>css</li>
              <li>bootStrap</li>
              <li>scss</li>
              <li>Javascript</li>
              <li>React</li>
              <li>git/github</li>
            </ul>
            </div>
            <h4 id='licence'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={darkMode ? "white" : "black"} className="svg" viewBox="0 0 16 16">
           <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
            </svg> دوره های گذرانده شده</h4>
            <p>دوره هایی که گذرانده ام بیشتر مربوط به رشته ی تحصیلی ام هست و برنامه نویسی را بدون دوره و بطور
                خود اموز یاد گرفته ام ولی خب بارگزاری مدارکم خالی از لطف نیست
            </p>
            <div className='example'><Example/></div>
            
            <h4 id='contact'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={darkMode ? "white" : "black"} className="svg" viewBox="0 0 16 16">
            <path  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"/>
            
    </svg> ارتباط با من  </h4>
            <ul>
            <li>شماره تماس : 09194252656</li>
            <li>شماره منزل : 44262767-021</li>
            <li>نشانی منزل : اتوبان شیخ فضل الله - بلوار چوب تراش - کوچه حسینمردی شرقی - بن بست ولی عصر - پلاک 1 واحد 4</li>
            <li>ایمیل : erfankashanian@yahoo.com</li>
        </ul>
        <a id='topLink' href='#top' className={darkMode ? "darkTopLink" : "topLink"}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill={darkMode ? "black" : "white"} class="bi bi-arrow-up-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
</svg></a>
      </div>
      <div className='img'><img className={darkMode ? "darkimg1" : "img1"} src={img1} alt='resume'/></div>
      </div>
      
        </div>
    )
}