import React from 'react'

const StocksList = (props) => {
    console.log(props)

    return(
       <div>{props.stocks.map( (stock) => <ol> {stock.symbol} - {stock.name} - {stock.price}</ol>)}</div>
    )
} 

export default StocksList;