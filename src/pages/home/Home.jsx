import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBanks, getRatesHistory } from "../../store/reducers/home";
import AllBanks from "../components/AllBanks";
import BestRates from "../components/BestRates";

function Home({ getBanks, getRatesHistory }) {
  useEffect(() => {
    getBanks();
    getRatesHistory();
  }, [getBanks, getRatesHistory]);

  return (
    <div className="home">
          <BestRates />
          <AllBanks />
    </div>
  );
}

export default connect(null, {
  getBanks,
  getRatesHistory,
})(Home);
