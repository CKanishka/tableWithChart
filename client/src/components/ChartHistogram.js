import React from "react";
//import Plot from "react-plotly.js";
const Plot = React.lazy(() => import("react-plotly.js"));
const numberOfDecimals = (value) => {
    if (Math.floor(value) !== value)
        return value.toString().split(".")[1].length || 0;
    return 0;
}
const roundOff = (values) => {
    let newvalues = values.map((value) => {
        let [val1,val2] = value.split("-")
        if(numberOfDecimals(Number(val1))!==0){
            val1 = Number(val1).toFixed(5)
            val2 = Number(val2).toFixed(5)
            return val1+"-"+val2
        }
        return value
    })
    return newvalues
}
const ChartHistogram = (props) => {
    let id = props.location.hash
    let chartData = [], title=""
     props.data.forEach((item)=>{
        if(item.cid===id){
            chartData =  [{
                x: roundOff(Object.keys(item.freqCount || item.graph)),
                y: Object.values(item.freqCount || item.graph),
                autobinx: false, 
                histnorm: "count", 
                marker: {
                  color: "rgba(255, 100, 102, 0.7)", 
                   line: {
                    color:  "rgba(255, 100, 102, 1)", 
                    width: 1
                  }
                },  
                opacity: 0.7, 
                type: "bar",   
              }]
            title = item.conceptName  
        }
    })
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
        <Plot
        data={chartData}
        layout={{
          bargap: 0.2,
          showlegend: false,
          title: title,
          xaxis: {title: "Value"}, 
          yaxis: {title: "Count"}
        }}
        config={{
            displayModeBar: false
        }}
      />
      </React.Suspense>
    )
}

export default ChartHistogram;