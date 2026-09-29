import { useCallback, useState } from "react"

function UseCallBackPractise(){
    const [count,setCount]=useState(0)
    const handlleClick=useCallback(()=>{
        console.log("count增加了")
    },[count])
    return (<>
    <div>
        <button onClick={()=>{
            setCount(prev=>prev+1)
            handlleClick()
        }}>增加</button>
    </div>
    </>)
}
export default UseCallBackPractise