import React, { Component, useState } from "react";

function Header({...props}) {
  const [symbol, setSymbol] = useState("GME")
  const handleSymbol = (symbol) =>{
    props.callbackSymbol(symbol);
  }
  return (
      <form onSubmit={((e) =>{
        e.preventDefault();
      })}>
        <div className="min-w-[300px] relative">
          <label
            htmlFor="email"
            className="absolute top-0 z-10 inline-block p-2 text-sm font-medium bg-white cursor-pointer left-4 -translate-y-2/4"
          >
            Enter Stock Symbol
          </label>
          <input
            type="text"
            value={symbol}
            onChange={((e) => {
              setSymbol(e.currentTarget.value);
              handleSymbol(e.currentTarget.value);
            })}
            placeholder="AAPL, NFLX, TSLA..."
            className="w-full p-4 text-sm font-medium transition-all bg-transparent border border-gray-200 rounded outline-none focus:border-blue-500 pr-14"
          />
          <span className="absolute top-2/4 right-4 -translate-y-2/4 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
        </div>
      </form>
  )
}

export default Header;