import React, { useContext,useState } from "react"
import userContext from "../context/userContext"


function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)
    
    const handleSubmit = (e) => {   
        e.preventDefault()
        setUser({username,password})
    }
    return(
        <>
            <h2>Login</h2>
            <input  type='text' 
                    placeholder='username'
                    onChange={(e)=> setUsername(e.target.value)}
                    value={username}/>{" "}
            <input  type='password' 
                    placeholder='password'
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}/>
            <button onClick={handleSubmit}>Login</button>
        </>
    )
}

export default Login