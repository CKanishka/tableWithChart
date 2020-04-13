import React from 'react';
import './App.css';
import Table from "./components/Table";
import ChartHistogram from "./components/ChartHistogram";
import data from "./data/response.json";

function App() {
  return (
    <div className="App-container">
        {/* <Table headings={["Concept Name","Type","Unique Values","Missing Values"]} data={data} /> */}
        <ChartHistogram id="#14:10" data={data}/>
    </div>
  );
}

export default App;
