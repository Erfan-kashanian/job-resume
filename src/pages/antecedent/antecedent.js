import { Link } from "react-router-dom"
import { useFetch } from "../fetch"
import './antecedent.css'
import img21 from './img21.jpg'
export default function Antecedent({darkMode}){
    const url ="https://ukqstznhdtviecdtuebx.supabase.co/rest/v1/jobs";
    const options={
        headers :{
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrcXN0em5oZHR2aWVjZHR1ZWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODA1MjMsImV4cCI6MjA5Njc1NjUyM30.k8_9_xptMtLPEIDBw1J1r7IB5n7CXbNbSqAfes_sOrk",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrcXN0em5oZHR2aWVjZHR1ZWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODA1MjMsImV4cCI6MjA5Njc1NjUyM30.k8_9_xptMtLPEIDBw1J1r7IB5n7CXbNbSqAfes_sOrk "
    }}  
    const {data,error}=useFetch(url,options)
    return(
        <div className={darkMode ? "darkdiv" : "div"}>
            <div className="map">
            {error && <div>{error}</div>}
            {data && data.map((item)=>{
                return <div key={item.id}><h3>{item.id}-{item.title}</h3>
                             <p>مدت اشتغال: {item.duration}</p>
                             <Link to={`/article/${item.id}`}>اطلاعات بیشتر</Link>
                             <br></br>
                             <br></br>
                        </div>
            })}
            </div>
          <div className={darkMode ? "darknotice" : "notice"}>
            <h5>توجه</h5>
            <p>برای این صفحه من یک table در سایت supabase تشکیل داده ام و داده های این صفحه و همچنین داده های اطلاعات بیشتر بطور آنلاین از supabase فراخوانی میشوند</p></div>
        </div>
    )
}