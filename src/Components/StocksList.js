//import React from 'react'
import Search from './Search' 
//import {useState} from 'react'
import Stocks from './Stocks'
// React,{Component} from 'react'
import React,{Component} from 'react' 

import '../App.css';

class StocksList extends Component{
    

    //const [search, setSearch] = useState('');
   
    //const filteredStocks = props.stocks.filter( stock => stock.name.toLowerCase().includes(search.toLowerCase())) 

   
   
    state = { search: ''}

    


    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    } 

    render(){ 
        console.log(this.props.stocks)
        const filteredStocks = this.props.stocks.filter( stock => {
            return stock.name.toLowerCase().includes(this.state.search.toLowerCase())
        })

        return(
        <div>
            <Search handleChange={this.handleChange}/><br></br><br></br>
            
            {filteredStocks.map( (stock) => 
                <div key={stock.id}> 
                    <Stocks symbol={stock.symbol} name={stock.name} price={stock.price} id={stock.id}/>
                </div>
            )} 
        </div>
        )
   }
} 

export default StocksList; 

