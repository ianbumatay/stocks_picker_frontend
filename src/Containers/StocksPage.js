
import StocksForm from '../Components/StocksForm'
import StocksList from '../Components/StocksList'
import React,{Component} from 'react' 


class StockPage extends Component {

    render(){
        return(
            <div>
                Stocks Page
                <StocksForm/>
                <StocksList/>
            </div>
        )
    }
} 

export default StockPage;