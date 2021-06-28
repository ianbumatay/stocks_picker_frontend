
import Search from './Search' 
import Stocks from './Stocks'
import React,{Component} from 'react' 
import '../App.css';

class StocksList extends Component{
    
     
    state = {
         search: '',
    }

  
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }  

   

    render(){ 
        console.log(this.props)// favFunction /stocksList array or objects
        const filteredStocks = this.props.stocksList.filter( stock => (stock.name.toLowerCase().includes(this.state.search.toLowerCase()))) 

        return(
        <div>
            <Search handleChange={this.handleChange}/><br></br><br></br>
            
            {filteredStocks.map((stock) => 
                <div key={stock.id}> 
                    <Stocks favClick={stock.favFunction}symbol={stock.symbol} name={stock.name} price={stock.price} id={stock.id}/>
                </div>
            )}  
        </div>
        )
   }
} 

export default StocksList; 

// symbol={stock.symbol} name={stock.name} price={stock.price} id={stock.id}