import { useRef } from "react"

function UseRefPractise(){
    const iptRef=useRef(null)

    return (<>
        <div>
            <input type="text" ref={iptRef} />
            <button onClick={()=>iptRef.current.focus()}></button>
            {/* !!!!! */}
        </div>
    </>)
}
export default UseRefPractise