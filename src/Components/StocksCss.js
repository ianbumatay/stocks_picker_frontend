import React from 'react' 
// import '../App.css';
import '../Stocks.css'
import { Link } from 'react-router-dom'

const StocksCss = ({id, name, symbol, price}) => { 

    

    return (
        <div className="stocks-container"> 
            <div className="stocks-row">
                
                   <Link to={`/stocks/${id}`}> {name}</Link> 
                   <p className="stocks-symbol">{symbol}</p>
                    <p className="stocks-price">{price}</p>
               
            </div>
        </div>
    )
}

export default StocksCss; 

//<Link to={`/stocks/${stock.id}`}> {name}</Link> 
