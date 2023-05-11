import React, { useState, useEffect, Component } from "react";

function Datas({ ...props }) {
  const [data, setData] = useState(null);
  const finances = props.financials[0];
  console.log(finances);

  useEffect(() => {
    async function makeDatas() {
      const data = await Promise.all(
        Object.entries(finances).map(([key, value]) => {
          return (
            <div
              key={key}
              className="flex justify-start col-span-1 p-4 text-left shadow-lg bg-slate-200 rounded-xl hover:bg-slate-300"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
            </div>
          );
        })
      );
      setData(data);
    }
    if (finances) {
      makeDatas();
    }
  }, [finances]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-start pb-8 text-2xl">
        GameStop Corporation ({props.symbol})
        <a className="h-[60px] block mb-5 w-[60px]" aria-label="link-wrap-image">
          <img
            src={props.logo}
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">{data}</div>
    </>
  );
}

export default Datas;
