import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch=(url)=>{
    const[data,setData]=useState(null)
    const[error,setError]=useState(null)
    useEffect(()=>{
        const fetchData=async()=>{
            axios.get(url).then((res)=>{
                setData(res.data)
            }).catch((err)=>{setError(err.message)})
        }
        fetchData()
    },[url])
    return{data,error}
}