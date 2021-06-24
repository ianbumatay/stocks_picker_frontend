
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchStocks } from '../Actions/fetchStocks'
import Home from '../Components/Home'
import Stock from '../Components/Stock'
import StocksForm from '../Components/StocksForm'
import StocksList from '../Components/StocksList'
import React,{Component} from 'react' 
import NavBar from '../Components/NavBar'


class StockPage extends Component { 

    componentDidMount(){
        console.log(this)
       this.props.fetchStocks()
    }

    render(){
        return(
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path='/stocks/new' component={StocksForm} />
                    <Route exact path="/stocks/:id" render={( (routerProps) => 
                        <Stock stock={this.props.stocks.find( stock => stock.id === parseInt(routerProps.match.params.id) )} /> )}
                    /> 
                     <Route exact path='/stocks'>
                        <StocksList stocks={this.props.stocks}/>
                    </Route>
                </Switch>
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