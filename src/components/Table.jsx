import React from 'react'
import Row from './Row'
import Col from './Col'
function Table(props) {
    
    function createRows()
    {
        let arrayRows = []
        console.log(props.RowNum)
            for(let i = 0;i<props.RowNum;i++)
            {
                arrayRows.push(<Row
                    Color = {props.Color}
                />)
            }
        return arrayRows
    }
    function createCol()
    {
        
        let arrayCols = []
        console.log(props.ColNum)
        console.log(props.Color)
            for(let i = 0;i<props.ColNum;i++)
            {
                arrayCols.push(<Col 
                RowNum = {props.RowNum}
                Color = {props.Color}
                
                />)
            }
            return arrayCols
        
    }

    
    return (
        <div className = "table-div">
            
        <table id = "table">
          <tr>
            {createRows()}
          </tr>
        </table>
            {createCol()}
        </div>
    )
}

export default Table
