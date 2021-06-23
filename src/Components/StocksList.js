import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search' 
import {useState} from 'react'

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
              <div key={stock.id}> 
                 <Link to={`/stocks/${stock.id}`}> <h2>{stock.name}</h2> {stock.symbol}  </Link> 
                 {stock.price} 
              </div> 
            )} 
       </div>
    )
} 

export default StocksList;