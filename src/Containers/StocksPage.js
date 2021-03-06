
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import { fetchStocks } from '../Actions/fetchStocks'
import Home from '../Components/Home'
import StockShow from '../Components/StockShow'
import StocksForm from '../Components/StocksForm'
import Stocks from '../Components/Stocks'
import React,{Component} from 'react' 
import NavBar from '../Components/NavBar'
import Fav from '../Components/Fav'


class StockPage extends Component {  


    state ={
        favorites: []
    } 

    stocksPicker = (stock) => {
        const findStocks = this.state.favorites.find( fav => fav === stock )
        if(!findStocks){
            this.setState( prevState => {
                return {favorites: [...prevState.favorites, stock]}
            }) 
        } else {
          const filtered = this.state.favorites.filter( fav => fav !== stock)
            this.setState({favorites: filtered})
        }
    } 

    

    componentDidMount(){  
       this.props.fetchStocks()  
    }

    render(){
        return(
            <div>
                <NavBar/><br></br><br></br>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path='/stocks/new' component={StocksForm} />
                    <Route exact path="/stocks/:id" render={( (routerProps) => 
                        <StockShow stock={this.props.stocks.find( stock => stock.id === parseInt(routerProps.match.params.id) )} /> )}
                    /> 
                     <Route exact path='/stocks'>
                        <Stocks stocks={this.props.stocks} buy={this.stocksPicker}/>
                    </Route>
                        <Fav favorites={this.state.favorites} sell={this.stocksPicker}/>
                </Switch>
            </div>
        )
    }
}  

const mapStateToProps = (state) => {
    return{
        stocks: state.stocks
    }

}

export default connect(mapStateToProps, {fetchStocks})(StockPage)