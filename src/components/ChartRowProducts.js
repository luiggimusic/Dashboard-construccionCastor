import React from 'react';


function ChartProducts(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.brand}</td>
                    <td>{props.price}</td>
                </tr>
            )
    }
    
        

export default ChartProducts;