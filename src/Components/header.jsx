import React, { Component, useState } from "react";

function Header({...props}) {
  const [symbol, setSymbol] = useState("GME")
  return (
      <form onSubmit={((e) =>{
        e.preventDefault();
      })}>
        <div className="min-w-[300px] relative">
          <label
            htmlFor="email"
            className="cursor-pointer inline-block absolute left-4 top-0 -translate-y-2/4 bg-white p-2 z-10 text-sm font-medium"
          >
            Enter Stock Symbol
          </label>
          <input
            type="text"
            value={symbol}
            onChange={((e) => {
              setSymbol(e.currentTarget.value)
            })}
            placeholder="AAPL, NFLX, TSLA..."
            className="bg-transparent outline-none text-sm font-medium border border-gray-200 rounded p-4 w-full focus:border-blue-500 transition-all pr-14"
          />
          <span className="absolute top-2/4 right-4 -translate-y-2/4 text-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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