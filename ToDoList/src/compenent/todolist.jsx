import { useState } from "react";

function ToDoList() {
  const [lis, setLis] = useState([
    { id: 1, name: "湖南" },
    { id: 2, name: "河南" },
    { id: 3, name: "江西" },
    { id: 4, name: "江苏" },
    { id: 5, name: "上海" },
    { id: 6, name: "北京" },
  ]);
  const largestId = Math.max(...lis.map((item) => item.id));
  const [searchValue, setSearchValue] = useState("");
  const [throughIds, setThroghIds] = useState([]);
  const [addValue, setAddValue] = useState("");
  const handleToggle = (id) => {
    setThroghIds((ids) =>
      ids.includes(id) ? ids.filter((item) => item != id) : [...ids, id],
    // ！！！有的话就过滤掉，让其不在选中的范围内，也就是说取消状态
    // 没有的话就加上去
    );
  };
  const handleDelete = (id) => {
    setLis((lis) => lis.filter((item) => item.id != id));
  };
  const handleSearch = () => {
    setLis((prev) => prev.filter((item) => item.name.includes(searchValue)));
  };
  const textStyle = {
    textDecoration: "line-through",
  };
  const handleAdd = () => {
    setLis((prev) => [...prev, { id: largestId + 1, name: addValue }]);
  };
  return (
    <>
      <div>
        <p>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button onClick={handleSearch}>开始查询</button>
        </p>
        <ul>
          {lis.map((item) => (
            <li key={item.id}>
              <span style={throughIds.includes(item.id) ? textStyle : null}>
                {item.name}
              </span>
              <button onClick={() => handleToggle(item.id)}>切换</button>
              <button onClick={() => handleDelete(item.id)}>删除</button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={addValue}
            onChange={(e) => setAddValue(e.target.value)}
          />
          <button onClick={handleAdd}>新增</button>
        </div>
      </div>
    </>
  );
}
export default ToDoList;
