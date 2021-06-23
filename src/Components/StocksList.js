import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'

const StocksList = (props) => {
    console.log(props)

    return(
       <div>
           <Search/>
           {props.stocks.map( (stock) => 
              <div key={stock.id}> 
                 <Link to={`/stocks/${stock.id} `} > {stock.symbol} - {stock.name} - {stock.price} </Link>
              </div> 
            )} 
       </div>
    )
} 

export default StocksList;