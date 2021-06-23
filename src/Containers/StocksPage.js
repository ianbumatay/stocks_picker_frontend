
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchStocks } from '../Actions/fetchStocks'
import Home from '../Components/Home'
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
                <Home/>
                <Route exact path='/stocks/new' component={StocksForm} />
                <Route exact path='/stocks'>
                   <StocksList stocks={this.props.stocks}/>
                </Route>
               
                
               
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