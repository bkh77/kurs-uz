import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getMarkaz } from "../../store/reducers/rateHistory";
import { saveBestBuy, saveBestSale } from "../../store/reducers/home";

import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

function BestRates({ markaz, getMarkaz, banks, saveBestBuy, saveBestSale }) {
  useEffect(() => {
    getMarkaz();
  }, [getMarkaz]);

  const [collapse, setcollapse] = useState(true);

  function colorDiff(value) {
    if (parseFloat(value) > 0) {
      return "#2ecc71";
    } else {
      return "#ff4757";
    }
  }

  function iconDiff(value) {
    return parseFloat(value) > 0;
  }

  // -----------------------------------------

  const bestBuyUSD = Math.max.apply(
    Math,
    banks.map(function (o) {
      return o.amount_buy_usd;
    })
  );
  const bestBuyEUR = Math.max.apply(
    Math,
    banks.map(function (o) {
      return o.amount_buy_eur;
    })
  );
  const bestBuyRUB = Math.max.apply(
    Math,
    banks.map(function (o) {
      return o.amount_buy_rub;
    })
  );

  const bestSaleUSD = Math.min.apply(
    Math,
    banks.map(function (o) {
      return o.amount_sale_usd;
    })
  );
  const bestSaleEUR = Math.min.apply(
    Math,
    banks.map(function (o) {
      return o.amount_sale_eur;
    })
  );
  const bestSaleRUB = Math.min.apply(
    Math,
    banks
      .filter((i) => i.amount_sale_rub !== 0 && i.amount_sale_rub > 0)
      .map((o) => {
        return o.amount_sale_rub;
      })
  );

  const filteredUSD = banks.filter((i) => i.amount_buy_usd === bestBuyUSD);
  const filteredEUR = banks.filter((i) => i.amount_buy_eur === bestBuyEUR);
  const filteredRUB = banks.filter((i) => i.amount_buy_rub === bestBuyRUB);

  const filteredSaleUSD = banks.filter(
    (i) => i.amount_sale_usd === bestSaleUSD
  );
  const filteredSaleEUR = banks.filter(
    (i) => i.amount_sale_eur === bestSaleEUR
  );
  const filteredSaleRUB = banks.filter(
    (i) => i.amount_sale_rub === bestSaleRUB
  );

  const markazBest = markaz.map((item) => {
    if (item.Ccy === "USD") {
      return {
        ...item,
        buy: { ...filteredUSD[0] },
        sale: { ...filteredSaleUSD[0] },
      };
    } else if (item.Ccy === "EUR") {
      return {
        ...item,
        buy: { ...filteredEUR[0] },
        sale: { ...filteredSaleEUR[0] },
      };
    } else if (item.Ccy === "RUB") {
      return {
        ...item,
        buy: { ...filteredRUB[0] },
        sale: { ...filteredSaleRUB[0] },
      };
    }
    return item;
  });

  function defRate(i) {
    switch (i) {
      case "840":
        return "usd";
      case "978":
        return "eur";
      case "643":
        return "rub";
      default:
    }
  }

  return (
    <div className="best-rates mb-5">
      <h3 className="text-center my-3">Bugungi eng yaxshi kurslar</h3>{" "}
      <div className="table-responsive">
        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Valyuta</th>
              <th>Olish</th>
              <th>Sotish</th>
              <th>Markaziy bank</th>
              <th>O'zgarish</th>
            </tr>
          </thead>
          <tbody>
            {markazBest.map((item) => (
              <tr key={item.id}>
                <td>{item.Ccy} </td>
                <td>
                  {item.buy["amount_buy_" + defRate(item.Code)]} so'm
                  <p>
                    {item.buy.bank}{" "}
                    {saveBestBuy(item.buy["amount_buy_" + defRate(item.Code)])}{" "}
                  </p>
                </td>
                <td>
                  {item.sale["amount_sale_" + defRate(item.Code)]} so'm
                  <p>
                    {item.sale.bank}{" "}
                    {saveBestSale(
                      item.sale["amount_sale_" + defRate(item.Code)]
                    )}
                  </p>
                </td>
                <td>{item.Rate} so'm</td>
                <td style={{ color: colorDiff(item.Diff) }}>
                  {item.Diff}{" "}
                  {iconDiff(item.Diff) ? (
                    <BsCaretUpFill />
                  ) : (
                    <BsCaretDownFill />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default connect(
  ({ rateHistory: { markaz }, home: { banks } }) => ({ markaz, banks }),
  {
    getMarkaz,
    saveBestBuy,
    saveBestSale,
  }
)(BestRates);
