import { useContext } from "react"
import { UserInfo } from "../context"
function UseContextPractise(){
    const info=useContext(UserInfo)
    return (<>
    <div>{info}</div>
    </>)
}
export default UseContextPractise