import { useState } from "react";

function ShopCar() {
  const [lis, setLis] = useState([
    {
      id: 1,
      name: "苹果",
      price: 5,
      num: 0,
    },
    {
      id: 2,
      name: "香蕉",
      price: 3,
      num: 0,
    },
    {
      id: 3,
      name: "橘子",
      price: 4,
      num: 0,
    },
  ]);
  const [selected, setSelected] = useState([]);
  const handleDecrease = (id) => {
    setLis((prev) =>
      JSON.parse(JSON.stringify(prev)).map((item) => {
        if (item.id == id) {
          item.num = Math.max(item.num - 1, 0);
        }
        // !!!!!!!!
        return item;
      }),
    );
  };
  const handleIncrement = (id) => {
    setLis((prev) =>
      [...prev].map((item) => {
        if (item.id == id) {
          item = { ...item, num: item.num + 1 };
        }
        return item;
        // !!!!!!!!
      }),
    );
  };
  const handleDelete = (id) => {
    setLis((prev) => prev.filter((item) => item.id != id));
  };
  const handleToggle = (id) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((item) => item!= id) : [...prev,id]);
    
  };
  const paddingStyle = {
    paddingRight: "30px",
  };
  const totoalPrice = lis.reduce((sum, item) => sum + item.price * item.num, 0);
  const totalNum = lis.reduce((sum, item) => sum + item.num, 0);
  const selectTotalNum = lis.reduce((sum, item) => {
    if (selected.includes(item.id)) {
      sum += item.price * item.num;
    }
    return sum;
  }, 0);
  const selectTotalPrice = lis.reduce((sum, item) => {
    if (selected.includes(item.id)) {
      sum += item.num;
    }
    return sum;
  }, 0);
  const allCheck=lis.length==selected.length?true:false
  const handleAllCheck=(bl)=>{
    if(bl===true){
       setSelected(lis.map(item=>item.id))
    }else{
        setSelected([])
    }
    // !!!!!!
  }
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={allCheck}
          onChange={(e) => {
            handleAllCheck(e.target.checked)
          }}
        />
        <ul>
          {lis.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={selected.includes(item.id) ? true : false}
                // !!!!!!
                onChange={() => handleToggle(item.id)}
              />
              <span style={paddingStyle}>{item.name}</span>
              <span style={paddingStyle}>{item.price}</span>
              <span style={paddingStyle}>{item.num}</span>
              <button onClick={() => handleDecrease(item.id)}>-</button>
              <button onClick={() => handleIncrement(item.id)}>+</button>
              <button onClick={() => handleDelete(item.id)}>删除</button>
            </li>
          ))}
        </ul>
        <p>
          {" "}
          <span>总数量：{totalNum}</span>
          <span style={paddingStyle}>总金额：{totoalPrice}</span>
        </p>
        <p>
          已选择总数量：{selectTotalNum}{" "}
          <span style={paddingStyle}>已选择总价格：{selectTotalPrice}</span>
        </p>
      </div>
    </>
  );
}
export default ShopCar;
