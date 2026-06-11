import { Link } from "react-router-dom"
import { useFetch } from "../fetch"
import './antecedent.css'
import img21 from './img21.jpg'
export default function Antecedent(){
    const url ="http://localhost:3000/josbs"
    const {data,error}=useFetch(url)
    return(
        <div className="div">
            <div className="map">
            {error && <div>{error}</div>}
            {data && data.map((item)=>{
                return <div key={item.id}><h3>{item.id}-{item.title}</h3>
                             <p>مدت اشتغال: {item.duration}</p>
                             <button><Link to={`/article/${item.id}`}>اطلاعات بیشتر</Link></button>
                             <br></br>
                             <br></br>
                        </div>
            })}
            </div>
          <div className="notice">
            <h6>توجه</h6>
            <p>برای این صفحه من یک فایل database تشکیل داده ام و محتوای این صفحه با استفاده از json server از آن فایل گرفته می شود و همچنین برای اینکه بطور انلاین داده به ما بدهد و نیاز نباشد هر دفعه فایل json server باز کنیم من فایل db  را با استفاده از سایت mock API انلاین کرده ام</p></div>
        </div>
    )
}