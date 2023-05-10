import React, { useState , Component} from "react";
import "./App.css";
import apiData from "./api.json";
import { useEffect } from "react";
import Header from "./Components/header";
import Chart from "./Components/chart";
import Datas from "./Components/datas";
import Reviews from "./Components/reviews";

function App() {
  const [stonkData, setStonkData] = useState();
  const [api, setApi] = useState(apiData.twelve)
  const [symbol, setSymbol] = useState("GME")
  useEffect(() => {
    async function stonk() {
      const url = `https://api.twelvedata.com/time_series?apikey=${api}&interval=1day&${symbol}=TSLA&outputsize=1
      `;

      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setStonkData(result);
      } catch (error) {
        console.error(error);
      }
    }
    stonk();
  }, []);

  return <div>--API
    <Header symbol={symbol} setSymbol={setSymbol} stonkData={stonkData}/>
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <Chart />
      </div>
      <div className="col-span-1 m-8">
        <Datas />
      </div>
      <div className="col-span-2">
        <Reviews />
      </div>
    </div>
  </div>;
}

export default App;
