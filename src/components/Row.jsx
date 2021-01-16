import React from 'react'
//this component adds the event handler to each td tag as it's created so when clicked the color is changed assuming the color is updated and adds cells to the table when the button is pressed
export default function row(props) {
    function changeColor()
    { 
        [].forEach.call(document.getElementsByTagName('td'), function(item) { 
            item.addEventListener('click', function() {
                item.style.backgroundColor = props.Color;
            }, false); 
         });
     
    }
   
    return (
        
            
            <td onClick ={changeColor()}></td>
       
    )
}
