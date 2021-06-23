import React from 'react' 
import '../App.css';
import '../Stocks.css'
import { Link } from 'react-router-dom'

const StocksCss = ({id, name, symbol, price}) => { 

    

    return (
        <div className="stocks-container"> 
            <div className="stocks-row">
                <div className="stocks-name">
                    <Link to={`/stocks/${id}`}> <h1>{name}</h1></Link> 
                </div>
                
                <div className="stocks-data">
                    <div className="stocks-symbol">{symbol}</div>
                    <div className="stocks-price">Price: {price}</div>
                </div>

               
                
            </div>
            
        </div>
    )
}

export default StocksCss; 

//<Link to={`/stocks/${stock.id}`}> {name}</Link> 
