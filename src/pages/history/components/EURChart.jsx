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

function EURChart({  ratesHistory }) {
  
 

  return (
    <div className="my-4 table-responsive">
      <AreaChart
        width={1200}
        height={450}
        data={ratesHistory}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis dataKey="amount_eur" type="number" domain={[12000, 12900]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="amount_eur"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
}

export default connect(({ home: { ratesHistory } }) => ({ ratesHistory }))(EURChart);
