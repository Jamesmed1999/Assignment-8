import React from 'react'
import Row from './Row'




export default function Col(props) {
    function createRows()
    {
        
    console.log(props.Color)
        let arrayRows = []
        
            for(let i = 0;i<props.RowNum;i++)
            {
                arrayRows.push(<Row/>)
            }
        return arrayRows
    }


    
    return (
        
        <table id = "table">
        <tr>
            {createRows()}
        </tr>
      </table>
       
    )
}
