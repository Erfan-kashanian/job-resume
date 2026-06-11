import { useParams } from "react-router-dom";
import { useFetch } from "../fetch";
import './article.css'
import img23 from './img23.jpg'
export default function Article(){
    const {id}=useParams()
    const url=`http://localhost:3000/josbs/${id}`
    const {data,error}=useFetch(url)
    return(
        <div className="article">
            <div className="item">
            {error && <div>{error.message}</div>}
            {data && <div>
                <h3>نام شرکت: {data.company}</h3>
                <h4>علت اتمام کار: {data.reason}</h4>
                <h5>شماره محل کار: {data.phoneNumber}</h5>
                </div>}
            </div>
        </div>
    )
}