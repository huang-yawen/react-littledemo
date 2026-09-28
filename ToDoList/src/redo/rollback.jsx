import { useEffect, useState } from "react";

function RollBack() {
  const [timer, setTimer] = useState(10);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    let flag;
    if (running && timer > 0) {
      flag=setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      clearInterval(flag);
    };
  }, [running, timer]);
  return (
    <>
      倒计时：<span>{timer}</span>
      <button>开始</button>
      <button onClick={()=>setRunning(false)}>暂停</button>
      <button onClick={()=>{
        setRunning(false)
        setTimer(10)
      }}>重置</button>
    </>
  );
}
export default RollBack;
