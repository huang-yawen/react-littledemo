import { useEffect, useState } from "react";

function RollClock() {
  const [timer, setTimer] = useState(10);
  const [running,setRunning]=useState(false)
  useEffect(()=>{
    let flag
    if(running===true){
        flag=setTimeout(()=>{
            // setTimer(0)
            setTimer(prev=>prev-1)
            clearTimeout(flag)
        },timer)
    }else{
        // clearTimeout(flag)
    }
  },[running])
  const handleStop=()=>{
    setRunning(false)
    setTimer(10)
  }
  return (
    <>
      <div>
        倒计时：<span>{timer}</span>
        <button onClick={()=>setRunning(true)}>开始</button>
        <button onClick={()=>setRunning(false)}>暂停</button>
        <button onClick={()=>handleStop()}>停止</button>
      </div>
    </>
  );
}
export default RollClock;
