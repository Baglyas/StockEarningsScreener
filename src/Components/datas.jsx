import React, {Component, useState, useEffect} from "react";

function Datas({...props}) {
  const datas = ["earnings", "price", "short rate", "Market Cap", "Price",	"Change%",	"Outstanding Shares"	 ,"Daily Average Vol" 	,"Actual Volume"	,"Debt/Eq"	,"EV/EBITDA",	"EV/REV",	"Short interest"	,"Insiders%",	"Instit%"	,"Price/sales"	,"P/B",	"Beta",	"Earnings Growth",	"Return on Assets"]

  return (
    <>
    <div className="flex justify-start pb-8 text-2xl">
      GameStop Corporation ({props.symbol}) 
      <a
        className="h-[60px] block mb-5 w-[60px]"
        aria-label="link-wrap-image"
      >
        <img
          src={props.logo}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </a>
    </div>
    <div className="grid grid-cols-2 gap-4">
    {datas.map((data)=>{
      return(
        <div key={crypto.randomUUID()}
        className="flex justify-start col-span-1 p-4 shadow-lg bg-slate-200 rounded-xl hover:bg-slate-300">
          {data}: 
        </div>
      )
    })}
    </div>
    </>
  )
}

export default Datas;