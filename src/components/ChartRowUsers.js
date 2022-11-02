import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.first_name}</td>
                    <td>{props.last_name}</td>
                    <td>{props.email}</td>
                </tr>
            )
    }
    
        

export default ChartRow;