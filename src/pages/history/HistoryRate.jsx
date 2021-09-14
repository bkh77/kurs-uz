import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import USDChart from "./components/USDChart";
import EURChart from "./components/EURChart";
import RUBChart from "./components/RUBChart";

function History({ month }) {
  return (
    <div className="history">
      <div className="header">
        <h3>Kurslar tarixi </h3>
        <div className="history-links">
          <Link to="/history">
            <button className="btn btn-outline-primary btn-sm">
              USD - AQSH dollori kurs tarixi
            </button>
          </Link>
          <Link to="/history/eur">
            <button className="btn btn-outline-success btn-sm">
              EUR - Yevro kurs tarixi
            </button>
          </Link>
          <Link to="/history/rub">
            <button className="btn btn-outline-danger btn-sm">
              RUB = Rubl kurs tarixi
            </button>
          </Link>
        </div>
      </div>

      <Switch>
        <Route path="/history/eur">
          <EURChart month={month} />
        </Route>
        <Route path="/history/rub">
          <RUBChart month={month} />
        </Route>
        <Route path="/history">
          <USDChart month={month} />
        </Route>
      </Switch>
    </div>
  );
}

export default History;
