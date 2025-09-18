import React, { useContext } from "react"

import userContext from "../context/userContext"

function Profile(){
    const {user} = useContext(userContext)
    
    if(!user) return <div>Please Login</div>
    return <div>Welcome {user.username} and your password: {user.password}</div>
}
export default Profile