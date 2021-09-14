import React, { useState } from "react";
import SliderValue from "./SliderValue";
// import db from "../../data/db.json";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
// import EuroIcon from "@material-ui/icons/Euro";

function AllBanks({ banks }) {
  const getFormattedDate2 = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      day: "numeric",
      year: "numeric",
      month: "short",
      hour: "numeric", // numeric, 2-digit
      minute: "numeric", // numeric, 2-digit
      // second: "numeric", // numeric, 2-digit
    });
  };
  const [amount, setAmount] = useState(200);

  const [currentRate, setCurrentRate] = useState("usd");

  const [buySale, setBuySale] = useState("buy_");

  return (
    <div className="all-banks mb-5">
      <h3 className="text-center my-3">Barcha banklar valyuta kurslari</h3>

      <div className="control">
        <select
          value={buySale}
          onChange={(e) => setBuySale(e.target.value)}
          className="form-select"
          id="sotish-olish"
        >
          <option value="buy_">Olish</option>
          <option value="sale_">Sotish</option>
        </select>
        <select
          onChange={(e) => setCurrentRate(e.target.value)}
          value={currentRate}
          className="form-select"
          id="valyuta"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="rub">RUB</option>
        </select>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <SliderValue amount={amount} setAmount={setAmount} />
      </div>

      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Bank</th>
            <th>Valyuta</th>
            <th>Olish</th>
            <th>Sotish </th>
            <th>Miqdor </th>
            <th>Yangilangan</th>
          </tr>
        </thead>
        <tbody>
          {banks.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="bank-img">
                  <img
                    src={"http://valyuta-kurslari.uz" + item.image}
                    alt={item.bank}
                  />
                <p>{item.bank}</p>
                </div>
              </td>
              <td style={{ textTransform: "uppercase" }}>{currentRate}</td>
              <td>{item["amount_buy_" + currentRate]} so'm</td>

              <td>{item["amount_sale_" + currentRate]} so'm</td>

              <td>{amount * item["amount_" + buySale + currentRate]} so'm </td>
              <td className="update-date">
                {getFormattedDate2(item.update_at)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllBanks;
