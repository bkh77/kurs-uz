import React from "react";

function BestRates({markaz}) {


  function getToday() {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dt = date.getDate();  
    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return year + "-" + month + "-" + dt;
  }
  
  
  return (
    <div className="best-rates mb-5">
      <h3 className="text-center my-3">Bugungi eng yaxshi kurslar</h3>

      <table className="table table-striped ">
        <thead>
          <tr>
            <th>Valyuta</th>
            <th>Sotib olish</th>
            <th>Sotish</th>
            <th>Markaziy bank</th>
            <th>Birja</th>
          </tr>
        </thead>
        <tbody>
          {markaz.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.buy_price} so'm </td>
              <td>{item.cell_price} so'm</td>
              <td>{item.cbr} so'm</td>
              <td>{item.exchange} so'm</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BestRates;
