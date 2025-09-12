import {useState,useEffect} from "react"

const API_URL=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`;


const currecnyInfo = (currency) => {
    const [data,setData] = useState(0);
    useEffect(()=>{
        fetch(`${API_URL}/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        console.log(data);
  },[currency]);
  return data;
}

export default currecnyInfo;
