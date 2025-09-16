import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function GitHub(){
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('http://api.github.com/users/promt-l')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //             console.log(data)
    //             setData(data);
    //         })
    // },[])

    const data = useLoaderData()

    return( 
        <>
            <div className="text-center m-4 bg-amber-200">
                <div className="text-center bg-black text-white">
                    <h1 className="text-2xl">This is {data.name}</h1>
                </div>
                <h3>GitHub_Followers:{data.followers} </h3>
                <h3>GitHub_Following:{data.following} </h3>
            </div>
        </>
    )
}

export default GitHub

//Another method using Loader
export const gitHubInfo = async()=>{
    const response = await fetch('http://api.github.com/users/promt-l')
    return response;
}   