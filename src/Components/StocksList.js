import React from 'react'
import {Route, Link} from 'react-router-dom'

const StocksList = (props) => {
    console.log(props)

    return(
       <div>
           {props.stocks.map( (stock) => 
              <div> 
                 <Link to="`/stocks/${stock.id}`"> {stock.symbol} - {stock.name} - {stock.price} </Link>
              </div> 
            )} 
       </div>
    )
} 

export default StocksList;