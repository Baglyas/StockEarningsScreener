import React, {Component, useState, useEffect} from "react";

function Datas({...props}) {
  const datas = ["earnings", "price", "short rate", "Market Cap", "Price",	"Change%",	"Outstanding Shares"	 ,"Daily Average Vol" 	,"Actual Volume"	,"Debt/Eq"	,"EV/EBITDA",	"EV/REV",	"Short interest"	,"Insiders%",	"Instit%"	,"Price/sales"	,"P/B",	"Beta",	"Earnings Growth",	"Return on Assets"]
  
  return (
    <>
    <div className="flex justify-start text-2xl pb-8">
      GameStop Corporation (GME)
    </div>
    <div className="grid grid-cols-2 gap-4">
    {datas.map((data)=>{
      return(
        <div key={crypto.randomUUID()}
        className="col-span-1 p-4 bg-slate-200 shadow-lg rounded-xl hover:bg-slate-300 flex justify-start">
          {data}: 
        </div>
      )
    })}
    </div>
    </>
  )
}

export default Datas;