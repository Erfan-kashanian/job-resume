import { Link, useParams } from "react-router-dom";
import { useFetch } from "../fetch";
import './article.css'
import img23 from './img23.jpg'
export default function Article({darkMode}){
    const {id}=useParams()
    const url=`https://ukqstznhdtviecdtuebx.supabase.co/rest/v1/jobs?id=eq.${id}`
        const options={
        headers :{
        apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrcXN0em5oZHR2aWVjZHR1ZWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODA1MjMsImV4cCI6MjA5Njc1NjUyM30.k8_9_xptMtLPEIDBw1J1r7IB5n7CXbNbSqAfes_sOrk",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrcXN0em5oZHR2aWVjZHR1ZWJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODA1MjMsImV4cCI6MjA5Njc1NjUyM30.k8_9_xptMtLPEIDBw1J1r7IB5n7CXbNbSqAfes_sOrk "
    }}
    const {data,error}=useFetch(url,options);
    return(
        <div className={darkMode ? "darkarticle" : "article"}>
            <div className="item">
            {error && <div>{error.message}</div>}
            {data && <div className="part">
                <h4>نام شرکت: {data[0]?.company}</h4>
                <br></br>
                <h5>علت اتمام کار: {data[0]?.reason}</h5>
                <br></br>
                <h6>شماره محل کار: {data[0]?.phoneNumber}</h6>
                <br></br>
                <Link to='/antecedent'>بازگشت</Link>
                </div>}
                <div className={darkMode ? "darktext" : "text"}><p>حقیقتا خالی بودن و شلوغ نبودن این صفحه به علت نداشتن محتوای زیاد است در سایت واقعی اینچنین نخواهد بود</p></div>
            </div>
        </div>
    )
}