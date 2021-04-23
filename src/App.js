import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import "./App.scss";

//  const URL = "https://performance-analytic.herokuapp.com/"
 const URL = "http://localhost:3000/"

function App() {
  const [graphData, setGraphData] = useState();
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((result) => {
        setGraphData(result);
      });
  }, []);
  return (
    <>
      <div className="dashboard-wrapper">
        <div>
          <h3>TTFB</h3>
          <Dashboard dataToDraw={graphData && graphData.ttfbList} />
        </div>
        <div>
          <h3>FCP</h3>
          <Dashboard dataToDraw={graphData && graphData.fcpList} />
        </div>
        <div>
          <h3>DOM LOAD</h3>
          <Dashboard dataToDraw={graphData && graphData.domLoadList} />
        </div>
        <div>
          <h3>WINDOW LOAD</h3>
          <Dashboard dataToDraw={graphData && graphData.windowLoadList} />
        </div>
      </div>
    </>
  );
}

export default App;