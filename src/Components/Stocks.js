
import Search from './Search' 
import Stock from './Stock'
import React,{Component} from 'react' 
import '../App.css';

class Stocks extends Component{
    
     
    state = {
         search: '',
    }

  
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }  

   

    render(){ 
        const filteredStocks = this.props.stocks.filter( stock => (stock.name.toLowerCase().includes(this.state.search.toLowerCase()))) 

        return(
            <div>
                <Search handleChange={this.handleChange}/><br></br><br></br>
                {filteredStocks.map((stock) => <div key={stock.id}> <Stock stock={stock} buy={this.props.buy}/> </div> )}  
            </div>
        )
    }
} 

export default Stocks; 

// symbol={stock.symbol} name={stock.name} price={stock.price} id={stock.id}