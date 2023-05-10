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
  const [api, setApi] = useState(apiData.twelve);
  const [symbol, setSymbol] = useState("GME");
  const [logo, setLogo] = useState();
  const [insiderTransactions, setInsiderTransactions] = useState([]);
  const [financials, setFinancials] = useState({})

  useEffect(() => {
    async function stonk() {
      const url = `https://api.twelvedata.com/time_series?apikey=${api}&interval=30min&symbol=${symbol}&format=JSON`;

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

  useEffect(() => {
    async function getLogo() {
      const url = `https://api.twelvedata.com/logo?symbol=${symbol}&apikey=${api}`;

      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setLogo(result.url);
      } catch (error) {
        console.error(error);
      }
    }
    getLogo();
  }, []);

  useEffect(() => {
    async function getInsiderTransactions() {
      const url = `https://api.twelvedata.com/insider_transactions?symbol=${symbol}&apikey=${api}`;

      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setInsiderTransactions(result.insider_transactions);
      } catch (error) {
        console.error(error);
      }
    }
    getInsiderTransactions();
  }, []);

  const handleCallbackSymbol = (childData) =>{
    setSymbol(childData)
  }

// FMP API, NOT IN LIST YET
  
  useEffect(() => {
    async function getFinancials() {
      const url = `https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=294980f762a06ad7de0a229425388b2d`;

      try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        setFinancials(result);
      } catch (error) {
        console.error(error);
      }
    }
    getFinancials();
  }, []);


  return <div>--API
    <Header callbackSymbol={handleCallbackSymbol} setSymbol={setSymbol} stonkData={stonkData} />
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <Chart stonkData={stonkData}/>
      </div>
      <div className="col-span-1 m-8">
        <Datas logo={logo} symbol={symbol} financials={financials}/>
      </div>
      <div className="col-span-2">
        <Reviews insiderTransactions={insiderTransactions}/>
      </div>
    </div>
  </div>;
}

export default App;
