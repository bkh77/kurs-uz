import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBanks, getMonth } from "../../store/reducers/home";
import AllBanks from "../components/AllBanks";
import BestRates from "../components/BestRates";
import { getUSD, getEUR, getRUB } from "../../store/reducers/rateHistory";


function Home({
  banks,
  getBanks,
  markaz,

  getMonth,
  month,

  getUSD,
  getEUR,
  getRUB,
}) {

  // console.log(month);

  useEffect(() => {
    getBanks();
    getMonth();

    month.forEach((element) => {
      getUSD(element.name);
    });

    month.forEach((element) => {
      getEUR(element.name);
    });

    month.forEach((element) => {
      getRUB(element.name);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <div className="row">
        <div className="col-md-9">
          <BestRates markaz={markaz} />
          <AllBanks banks={banks} />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default connect(
  ({ home: { banks, markaz, month } }) => ({
    banks,
    markaz,
    month,
  }),
  {
    getBanks,
    getMonth,
    getUSD,
    getEUR,
    getRUB,
  }
)(Home);
