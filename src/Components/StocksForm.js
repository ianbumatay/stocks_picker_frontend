
import {connect} from 'react-redux'
import {addStocks} from '../Actions/addStocks'
import React, {Component} from 'react' 

class StocksForm extends Component {

    state = { symbol: '', name: '', price: '' } 

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addStocks(this.state)
    
    }



    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Symbol" name="symbol" value={this.state.symbol} onChange={this.handleChange}/>
                    <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/> 
                    <input type="text" placeholder="price" name="price" value={this.state.price} onChange={this.handleChange}/> 
                    <input type="submit"/>
                </form>
            </div>
        )
    }

} 

export default connect(null, {addStocks})(StocksForm);