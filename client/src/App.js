import React from 'react';
import './App.css';
import Table from "./components/Table";
import ChartHistogram from "./components/ChartHistogram";
import { HashRouter, Switch, Route } from "react-router-dom";
class App extends React.Component {
  
  state = {
      data:[]
  }
  componentDidMount(){
    fetch("/getdata")
      .then((res)=>res.json())
      .then((res)=>this.setState({data:res.data}))
  }
  render(){
    const {data} = this.state
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/home' render={(routeParams)=><Table headings={["Concept Name","Type","Unique Values","Missing Values"]} data={data} {...routeParams}/> } />
                <Route path='/chart' render={(routeParams)=><ChartHistogram data={data} {...routeParams}/> } />
            </Switch>
        </HashRouter>
      );
  }
}

export default App;
