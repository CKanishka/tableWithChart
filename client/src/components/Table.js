import React from "react";

const renderTableData = (data) => {
    return data.map((row) => {
    let cols = ["conceptName","statType","uniqueCount","nullCount"]
    return (
        <tr key={row["cid"]}>
            {cols.map((col,index)=> {
                if(col==="conceptName")
                    return (<td key={index}><a href={`/#/chart?cid=${row["cid"]}`}>{row[col]}</a></td>)
                return (
                    <td key={index}>{row[col]}</td>
                    )
                })
            }
        </tr>
        )
    })
}
const renderTableHeader = (headings) => {
    return headings.map((item, index) => (<th key={index}>{item}</th>))
 }

const Table = (props) => {

    return (
        <div className="table">
            <table id="table1">
               <tbody>
                  <tr>{renderTableHeader(props.headings)}</tr>
                  {renderTableData(props.data)}
               </tbody>
            </table>
         </div>
    );
}

export default Table