
import {connect} from 'react-redux'
import { fetchStocks } from '../Actions/fetchStocks'
import StocksForm from '../Components/StocksForm'
import StocksList from '../Components/StocksList'
import React,{Component} from 'react' 


class StockPage extends Component { 

    componentDidMount(){
        console.log(this)
       this.props.fetchStocks()
    }

    render(){
        return(
            <div>
                Stocks Page
                <StocksForm/>
                <StocksList stocks={this.props.stocks}/>
            </div>
        )
    }
}  

const mapStateToProps = (state) => {
    console.log("state", state) 
    return{
        stocks: state.stocks
    }

}

export default connect(mapStateToProps, {fetchStocks})(StockPage)