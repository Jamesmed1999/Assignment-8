import React from 'react'
import '../App.css';
import Table from './Table'

class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      Color: "red",
      Row: [],
      Col: [],
      RowNum: 1,
      ColNum: 0
    };

    this.updateRowNum = this.updateRowNum.bind(this)
    this.updateColNum = this.updateColNum.bind(this)
    this.ColorPick = this.ColorPick.bind(this)
  }

 updateRowNum()
 {
  this.setState({RowNum: this.state.RowNum+1})
  
  
 }

 updateColNum()
 {
  this.setState({ColNum: this.state.ColNum+1})
  
 }

 ColorPick()
 {
  let e = document.getElementById("cp")
  let selectedColor = e.value
  this.setState({Color: selectedColor})
  alert("Click Color updated to: " + selectedColor)
 }

//these above methods update the state for the othe components 
  render()
  {
    
  return (
    <div className="App">
        <h1>Table Maker</h1>
        <button onClick = {this.updateRowNum}>Click Here to Add a Row</button> 
      <button onClick = {this.updateColNum}>Click Here to Add a column</button> 
      <button onClick = {this.ColorPick}>Click here to set the color from the menu</button> 
      <select id="cp">
  <option value="red" selected="selected" >Red</option>
  <option value="blue">Blue</option>
  <option value="yellow">Yellow</option>
  <option value="Green">Green</option>
</select>
       <Table
       Row = {this.state.Row}
       Color = {this.state.Color}
       Col = {this.state.Row}
       RowNum = {this.state.RowNum}
       ColNum = {this.state.ColNum}
        
       />
      

    </div>
  );
  }

}

export default App;
