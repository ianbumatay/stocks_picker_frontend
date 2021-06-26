import React from 'react'
import Search from './Search' 
import {useState} from 'react'
import Stocks from './Stocks'

import '../App.css';

const StocksList = (props) => {
    

    const [search, setSearch] = useState('');
   
    const filteredStocks = props.stocks.filter( stock => stock.name.toLowerCase().includes(search.toLowerCase()))


    const handleChange = (e) => {
        setSearch(e.target.value)
    } 

    return(
       <div>
           <Search handleChange={handleChange}/><br></br><br></br>
         
              {filteredStocks.map( (stock) => 
                <div key={stock.id}> 
                    <Stocks
                        symbol={stock.symbol}
                        name={stock.name}
                        price={stock.price} 
                        id={stock.id}
                    />
                </div>
               )}
           
       </div>
    )
} 

export default StocksList; 

