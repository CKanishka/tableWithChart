import React from 'react';
import './App.css';
import Table from "./components/Table";
import ChartHistogram from "./components/ChartHistogram";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class App extends React.Component {
  
  state = {
      data:[]
  }
  componentDidMount(){
    fetch("http://localhost:5000/getdata")
      .then((res)=>res.json())
      .then((res)=>this.setState({data:res.data}))
  }
  render(){
    const {data} = this.state
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/home' render={(routeParams)=><Table headings={["Concept Name","Type","Unique Values","Missing Values"]} data={data} {...routeParams}/> } />
                <Route path='/chart' render={(routeParams)=><ChartHistogram data={data} {...routeParams}/> } />
            </Switch>
        </BrowserRouter>
      );
  }
}

export default App;
