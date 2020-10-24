import React from "react";
import Card from "./card";
import Table from "./table";
import Chart from "./chart";

class Main extends React.Component {
  render() {
    return (
      <>
        <main className="content">
          <div className="row">
            <Card />
          </div>
          <Chart />
          <Table />
        </main>
      </>
    );
  }
}
export default Main;
