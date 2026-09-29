import { useMemo, useState } from "react";

function UseMemoPractise() {
  const goods = [
    { id: 1, name: "苹果", price: 5 },
    { id: 2, name: "香蕉", price: 3 },
    { id: 3, name: "橘子", price: 4 },
  ];
  const [count,setCount]=useState(1)
  const totalPrice=useMemo(()=>{
    console.log("重新计算了总价")
    return goods.reduce((sum,item)=>sum+item.price*count,0)
  },[count])
  return (
    <>
      <div>商品总价：{totalPrice}</div>
      <button onClick={()=>setCount(prev=>prev+1)}>+1</button>
    </>
  );
}
export default UseMemoPractise;
