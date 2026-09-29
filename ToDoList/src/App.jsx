import "./App.css";
// import ToDolist from "./redo/todolist";
// import ShopCar from "./compenent/shopcar"
// import Weather from "./compenent/weather";
// import ShopCar from "./redo/shopcar";
// import Weather from './redo/weather'
// import RollClock from "./compenent/rollclock";
// import UseRefPractise from "./compenent/useRefPractise";
import { UserInfo } from "./context";
import UseContextPractise from "./compenent/useContextPractise";
function App() {
  return (
    <>
      {/* <ToDolist /> */}
      {/* <Weather/> */}
    {/* <RollClock /> */}
      {/* <ShopCar /> */}
      {/* <UseRefPractise /> */}
      <UserInfo.Provider value="小红">
        <UseContextPractise />
      </UserInfo.Provider>
    </>
  );
}

export default App;
