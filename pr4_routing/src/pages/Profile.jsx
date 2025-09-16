import { useParams } from "react-router-dom"

function Profile(){
    // this id should be same name as defined in routes 
    const {id} = useParams();
    return(
        <>
            <div className="text-center">Hello : {id}
            <p > We hope you doing extremely well</p>
            </div>  
        </>
    )
}
export default Profile