import {useState} from 'react'
function Counter(){
    const [count,setcount] = useState(1);
    
    function Count(){
        // setcount(count + 1);
        // setcount(count + 1);
        // setcount(count + 1);

        setcount((prevCount) => prevCount + 1);
        setcount((prevCount) => prevCount + 1);
        setcount((prevCount) => prevCount + 1);
    }
    return (
        <>
            <button 
                type="submit" 
                className="flex w-50 justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={Count}>{count}
            </button>
            
        </>
    )
}
export default Counter;