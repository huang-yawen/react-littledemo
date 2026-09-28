import { useState } from "react";

function Weather() {
  const [cityValue, setCityValue] = useState("");
  const [content, setContent] = useState("");
  const [loading,setLoading]=useState(false)
  const handleSearch = async () => {
    try{
        // 获取经纬度
        setLoading(true);
        let result=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityValue}&count=1&language=zh&format=json`)
        result=await result.json() 
        const data=result.results[0]
        const latitude=data.latitude
        const longitude=data.longitude
    // 获取天气
        let weather=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code`)
        weather=await weather.json()
        const current=weather.current
        setContent(`时间${current.time},湿度${current.relative_humidity_2m},温度${current.temperature_2m}`)
        console.log(weather)
    }catch{
        console.log('出错了！')
    }finally{
         setLoading(false)
    }
  };
//   添加loading逻辑，刚开始搜的时候显示加载中，然后由于无论请求成功还是失败，最后都会不再展示加载状态，所以放在finally里面是最符合常规的
  return (
    <>
      <div>
        <p>
          <input
            type="text"
            value={cityValue}
            onChange={(e) => setCityValue(e.target.value)}
          />
          <button onClick={handleSearch}>点击查询</button>
        </p>
        <p>{loading?'加载中':content}</p>
      </div>
    </>
  );
}
export default Weather;
