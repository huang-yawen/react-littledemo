import { useState } from "react";

function ToDolist() {
  const [iptValue, setIptValue] = useState("");
  const [lis, setLis] = useState([
    { id: 1, name: "湖南" },
    { id: 2, name: "河南" },
    { id: 3, name: "河北" },
    { id: 4, name: "湖北" },
    { id: 5, name: "山西" },
    { id: 6, name: "山东" },
    { id: 7, name: "北京" },
    { id: 8, name: "上海" },
  ]);
  const toggleStyle={
    textDecoration:'line-through'
  }
  const handleSearch = () => {};
  const handleDelete=(id)=>{
    setLis(prev=>prev.filter(item=>item.id!==id))
  }
  const [showIds,setShowIds]=useState([])
  const handleToggle=(id)=>{
    setShowIds(prev=>prev.includes(id)?prev.filter(item=>item!=id):[...prev,id])
    // ！！！！
  }
  return (
    <>
      <div>
        <p>
          <input
            type="text"
            value={iptValue}
            onChange={(e) => setIptValue(e.target.value)}
          />
          <button onClick={handleSearch}>搜索</button>
        </p>
        <div>
          <ul>
            {lis.map((item) => (
              <li key={item.id}>
                <span style={showIds.includes(item.id)?toggleStyle:null}>{item.name}</span>
                <button onClick={()=>handleToggle(item.id)}>切换</button>
                <button onClick={()=>handleDelete(item.id)}>删除</button>
                {/* !!!!! */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default ToDolist;
