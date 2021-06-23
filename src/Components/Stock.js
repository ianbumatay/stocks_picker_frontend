import React from 'react' 

const Stock = (props) => { 

    console.log("Stock Component",props)

    return(
        <div>
            <h1>{props.stock ? props.stock.symbol : null }</h1> 
            <h4>{props.stock ? props.stock.name : null }</h4> 
            <p>{props.stock ? props.stock.price : null }</p>
        </div>
    )
} 

export default Stock;