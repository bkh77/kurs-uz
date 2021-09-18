import React, { useState } from "react";
import SliderValue from "./SliderValue";

function AllBanks({ banks, bestBuy, bestSale }) {
  const getFormattedDate2 = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      day: "numeric",
      year: "numeric",
      month: "short",
      hour: "numeric",
      minute: "numeric",
    });
  };
  const [amount, setAmount] = useState(200);

  const [currentRate, setCurrentRate] = useState("usd");

  const [buySale, setBuySale] = useState("buy_");

  const style = {
    backgroundColor: "#FFC107",
    padding: "3px",
    borderRadius: "3px",
  };

  function optimalBuy(val, currentRate) {
    let id = 0;
    if (currentRate === "eur") {
      id = 1;
    } else if (currentRate === "rub") {
      id = 2;
    }
    return val === bestBuy[id];
  }

  function optimalSale(val, currentRate) {
    let id = 0;
    if (currentRate === "eur") {
      id = 1;
    } else if (currentRate === "rub") {
      id = 2;
    }
    return val === bestSale[id];
  }

  function symbols(i) {
    switch (i) {
      case "usd":
        return <span>&#36;</span>;
      case "eur":
        return <span>&euro;</span>;
      case "rub":
        return <span>&#8381;</span>;

      default:
        break;
    }
  }

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
          <span className="input-group-text"> {symbols(currentRate)} </span>
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
              <td>
                <span
                  style={
                    optimalBuy(item["amount_buy_" + currentRate], currentRate)
                      ? style
                      : null
                  }
                >
                  {item["amount_buy_" + currentRate]
                    ? item["amount_buy_" + currentRate] + " so'm"
                    : "--"}{" "}
                </span>
              </td>

              <td>
                <span
                  style={
                    optimalSale(item["amount_sale_" + currentRate], currentRate)
                      ? style
                      : null
                  }
                >
                  {item["amount_sale_" + currentRate]
                    ? item["amount_sale_" + currentRate] + " so'm"
                    : "--"}{" "}
                </span>
              </td>

              <td>
                {amount * item["amount_" + buySale + currentRate]
                  ? amount * item["amount_" + buySale + currentRate] + " so'm"
                  : "--"}{" "}
              </td>
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
