import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import "./App.scss";

//  const URL = "https://performance-analytic.herokuapp.com/"
 const URL = "http://localhost:3000/"

function App() {
  const [graphData, setLineChartData] = useState();
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        setLineChartData(result);
      });
  }, []);
  return (
    <>
      <div className="dashboard-wrapper">
        <div>
          <h3>TTFB</h3>
          <Dashboard dataToLineChart={graphData && graphData.ttfbList} />
        </div>
        <div>
          <h3>FCP</h3>
          <Dashboard dataToLineChart={graphData && graphData.fcpList} />
        </div>
        <div>
          <h3>DOM LOAD</h3>
          <Dashboard dataToLineChart={graphData && graphData.domLoadList} />
        </div>
        <div>
          <h3>WINDOW LOAD</h3>
          <Dashboard dataToLineChart={graphData && graphData.windowLoadList} />
        </div>
      </div>
    </>
  );
}

export default App;