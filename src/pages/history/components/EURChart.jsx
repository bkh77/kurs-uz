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

function EURChart({ month, getEUR, EUR }) {
  // EUR.sort((a, b) => {
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
        data={EUR}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="Date" />
        <YAxis dataKey="Rate" type="number" domain={[12300, 12800]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Rate"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
}

export default connect(({ rateHistory: { EUR } }) => ({ EUR }))(EURChart);
