import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBanks, getRatesHistory } from "../../store/reducers/home";
import AllBanks from "../components/AllBanks";
import BestRates from "../components/BestRates";

function Home({ banks, getBanks, getRatesHistory, bestBuy, bestSale }) {
  useEffect(() => {
    getBanks();
    getRatesHistory();
  }, [getBanks, getRatesHistory]);

  return (
    <div className="home">
      <div className="row">
        <div className="col-md-10 offset-1">
          <BestRates />
          <AllBanks banks={banks} bestBuy={bestBuy} bestSale={bestSale} />
        </div>
      </div>
    </div>
  );
}

export default connect(
  ({ home: { banks, markaz, bestBuy, bestSale } }) => ({
    banks,
    markaz,
    bestBuy,
    bestSale,
  }),
  {
    getBanks,
    getRatesHistory,
  }
)(Home);
