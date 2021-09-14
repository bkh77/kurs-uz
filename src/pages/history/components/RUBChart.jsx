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

// import { getRUB } from "../../../store/reducers/rateHistory";

function RUBChart({ month, getRUB, RUB }) {
  // RUB.sort((a, b) => {
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
        data={RUB}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#db7474" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#db7474" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="Date" />
        <YAxis dataKey="Rate" type="number" domain={[120, 160]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Rate"
          stroke="#db7474"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
}

export default connect(({ rateHistory: { RUB } }) => ({ RUB }))(RUBChart);
