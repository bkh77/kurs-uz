import React, { useState } from "react";
import SliderValue from "./SliderValue";
// import db from "../../data/db.json";
// import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
// import EuroIcon from "@material-ui/icons/Euro";

function AllBanks({ banks }) {
  // console.log(banks);
  const getFormattedDate2 = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString();
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

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Bank</th>
            <th>Valyuta</th>
            <th>Olish</th>
            <th>Sotish </th>
            <th>Miqdor </th>
            <th>Yangilangan vaqt </th>
          </tr>
        </thead>
        <tbody>
          {banks.map((item) => (
            <tr key={item.bank}>
              <td>
                <div className="bank-img">
                  <img
                    src={"http://192.168.1.110:8000" + item.image}
                    alt={item.bank}
                  />
                </div>
              </td>
              <td style={{ textTransform: "uppercase" }}>{currentRate}</td>
              <td>{item["amount_buy_" + currentRate]} so'm</td>

              <td>{item["amount_sale_" + currentRate]} so'm</td>

              <td>{amount * item["amount_" + buySale + currentRate]} so'm </td>
              <td align="right">{getFormattedDate2(item.update_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllBanks;
