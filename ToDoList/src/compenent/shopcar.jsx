import { useState } from "react";

function ShopCar() {
  const [goods, setGoods] = useState([
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
  const paddingStyle = {
    paddingRight: "20px",
  };
  const totalPrice = goods.reduce(
    (sum, item) => sum + item.num * item.price,
    0,
  );
  const totalNum = goods.reduce((sum, item) => sum + item.num, 0);
  const [checkBoxIds, setCheckBoxIds] = useState([]);
  const ids = goods.map((item) => item.id);
  const isAllChecked=ids.every((item) => checkBoxIds.includes(item))?true:false
  const hasSelectedNum=checkBoxIds.length
  const hasSelectedMoney=[...goods].filter(item=>checkBoxIds.includes(item.id)).reduce((sum,item)=>sum+item.price*item.num,0)
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={isAllChecked}
          onChange={(e) =>{
            if(e.target.checked){
                setCheckBoxIds(goods.map(item=>item.id))
            }else{
                setCheckBoxIds([])
            }
          }}
        />
        {goods.map((item, index) => (
          <p key={index}>
            <input
              type="checkbox"
              checked={checkBoxIds.includes(item.id) ? true : false}
              onChange={() => {
                setCheckBoxIds((prev) =>
                  prev.includes(item.id)
                    ? prev.filter((el) => el!== item.id)
                    : [...prev,item.id],
                );
              }}
            />
            <span style={paddingStyle}>{item.name}</span>
            <span style={paddingStyle}>{item.price}</span>
            <span>{item.num}</span>
            <button
              onClick={() =>
                setGoods((prev) =>
                  prev.map((el) =>
                    el.id === item.id
                      ? { ...el, num: Math.max(0, item.num - 1) }
                      : el,
                  ),
                )
              }
            >
              -
            </button>
            <button
              onClick={() =>
                setGoods((prev) =>
                  prev.map((el) =>
                    el.id === item.id
                      ? { ...el, num: Math.max(0, item.num + 1) }
                      : el,
                  ),
                )
              }
            >
              +
            </button>
            {/* react里面不能直接改变原state,而是要改变引用，返回一个新的 */}
            {/* 而且注意，数量不能低于0得使用Math.max(0,x)来进行区分*/}
            <button
              // 因为这里本身就在item的作用于里面，所以她现在还不用写item作为参数
              onClick={() => {
                setGoods((prev) => prev.filter((el) => el.id !== item.id));
              }}
              style={{ paddingRight: "30px" }}
            >
              删除
            </button>
          </p>
        ))}
        <p>
          <span style={paddingStyle}>总数量{totalNum}</span>
          <span>总价格{totalPrice}</span>
        </p>
        <p>
          <span style={paddingStyle}>已选择总数量{hasSelectedNum}</span>
          <span>已选择总价格{hasSelectedMoney}</span>
        </p>
      </div>
    </>
  );
}
// 你主要错在：直接改 state 并返回原引用，导致不渲染；
// setGoods(...goods, ...) 把数组变成对象，goods.map 报错；
// 渲染阶段 setState 造成死循环；
// 全选用了多余 state，应该用派生值；
// checkbox 该用 checked 和 includes，你却用 value 和 checkBoxIds[item.id]；
// 勾选更新时把 el 当对象、展开数字；受控组件漏 onChange；
// onClick={(item)=>...} 的事件对象遮蔽了外层商品，导致删除失效；key 用 index；
// 空数组 every 为 true；删除没同步清理勾选；更新数量用 item.num 而不是 el.num。
// 记住：state 只读、返回新引用、能推导不存 state、受控必须 onChange、判断有无用 includes、注意作用域、key 用 id
export default ShopCar;
