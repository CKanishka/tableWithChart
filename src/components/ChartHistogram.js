import React from "react";
import Plot from "react-plotly.js";

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
    let chartData = [], title=""
     props.data.forEach((item)=>{
        if(item.cid===props.id){
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
    console.log(chartData)
    return (
        <Plot
        data={chartData}
        layout={{
          bargap: 0.2,
          showlegend: false,
          title: title
        }}
        config={{
            displayModeBar: false
        }}
      />
    )
}

export default ChartHistogram;