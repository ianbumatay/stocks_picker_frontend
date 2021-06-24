import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search' 
import {useState} from 'react'
import Stocks from './Stocks'

import '../App.css';

const StocksList = (props) => {
    console.log(props) //stocks array of object

    const [search, setSearch] = useState('');
   
    const filteredStocks = props.stocks.filter( stock => stock.name.toLowerCase().includes(search.toLowerCase()))


    const handleChange = (e) => {
        setSearch(e.target.value)
    } 

    return(
       <div>
           <Search handleChange={handleChange}/>
         
              {filteredStocks.map( (stock) => 
                <div key={stock.id}> <Stocks
                    symbol={stock.symbol}
                    name={stock.name}
                    price={stock.price} 
                    id={stock.id}/>
                </div>
               )}
           
       </div>
    )
} 

export default StocksList; 

//<Link to={`/stocks/${stock.id}`}> name={stock.name}</Link> 