import React from "react";
import { connect } from "react-redux";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

function USDChart({ month, getUSD, USD }) {

  const todayUSD = USD.filter((item) => new Date(item.Date) === new Date());

  console.log(USD);

  // USD.sort((a, b) => {
  //   return (
  //     new Date(...a.Date.split(".").reverse()) -
  //     new Date(...b.Date.split(".").reverse())
  //   );
  // });

  return (
    <div className="my-4">
      <AreaChart
        width={1200}
        height={450}
        data={USD}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="Date" />
        <YAxis dataKey="Rate" type="number" domain={[10500, 10800]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Rate"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
  );
}

export default connect(({ rateHistory: { USD } }) => ({ USD }))(USDChart);
