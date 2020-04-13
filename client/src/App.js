import React from 'react';
import './App.css';
import Table from "./components/Table";
import ChartHistogram from "./components/ChartHistogram";
import data from "./data/response.json";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/home' render={(routeParams)=><Table headings={["Concept Name","Type","Unique Values","Missing Values"]} data={data} {...routeParams}/> } />
            <Route path='/chart' render={(routeParams)=><ChartHistogram data={data} {...routeParams}/> } />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
