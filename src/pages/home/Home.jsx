import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBanks, getMarkaz } from "../../store/reducers/home";
import AllBanks from "../components/AllBanks";
import BestRates from "../components/BestRates";

function Home({ banks, getBanks, getMarkaz, markaz }) {

  useEffect(() => {
    getMarkaz();
    getBanks();
  }, [getBanks, getMarkaz]);

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
  ({ homeReducer: { banks, markaz } }) => ({
    banks,
    markaz,
  }),
  {
    getBanks,
    getMarkaz,
  }
)(Home);
