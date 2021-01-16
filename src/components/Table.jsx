import React from 'react'
import Row from './Row'
import Col from './Col'
function Table(props) {
    //this componet creates the table
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
        
    } // these functions create the rows and colunums based off of the state when the button is pressed

    
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
