/* App.js */
import React from "react";
import CanvasJSReact from "../../asset/canvas/canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends React.Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }

  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }

  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      toolTip: {
        shared: true,
      },
      // legend: {
      // 	cursor: "pointer",
      // 	itemclick: this.toggleDataSeries
      // },
      data: [
        {
          type: "spline",
          name: "This week",
          showInLegend: true,
          dataPoints: [
            { x: new Date(2020, 0, 1), y: 40 },
            { x: new Date(2020, 1, 1), y: 50 },
            { x: new Date(2020, 2, 1), y: 60 },
            { x: new Date(2020, 3, 1), y: 100 },
            { x: new Date(2020, 4, 1), y: 70 },
            { x: new Date(2020, 5, 1), y: 80 },
            { x: new Date(2020, 6, 1), y: 100 },
            { x: new Date(2020, 7, 1), y: 80 },
            { x: new Date(2020, 8, 1), y: 122 },
          ],
        },
        {
          type: "spline",
          name: "Last Month",
          axisYType: "secondary",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "$#,##0.#",
          dataPoints: [
            { x: new Date(2020, 0, 1), y: 19034.5 },
            { x: new Date(2020, 1, 1), y: 20015 },
            { x: new Date(2020, 2, 1), y: 22342 },
            { x: new Date(2020, 3, 1), y: 20088 },
            { x: new Date(2020, 4, 1), y: 16056 },
            { x: new Date(2020, 5, 1), y: 29034 },
            { x: new Date(2020, 6, 1), y: 30487 },
            { x: new Date(2020, 7, 1), y: 32523 },
            { x: new Date(2020, 8, 1), y: 20000 },
          ],
        },
      ],
    };

    return (
      <>
        <div className="row">
          <div className="col-12 order">
            <div className="card shadow">
              <div className="card-header bg-transparent">
                <h3>Revenue</h3>
                <select name="select" id="">
                  <option value="month">Month</option>
                  <option value="month">Year</option>
                </select>
              </div>
              <div className="card-body ">
                <div>
                  <CanvasJSChart
                    options={options}
                    onRef={(ref) => (this.chart = ref)}
                  />
                  {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
