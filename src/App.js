import React from 'react';
import './App.css';
import Table from "./components/Table";
import data from "./data/response.json";

function App() {
  return (
    <div className="App-container">
        <Table headings={["Concept Name","Type","Unique Values","Missing Values"]} data={data} />
    </div>
  );
}

export default App;
