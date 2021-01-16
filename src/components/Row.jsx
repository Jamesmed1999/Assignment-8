import React from 'react'

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
