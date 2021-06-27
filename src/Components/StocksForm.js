
import {connect} from 'react-redux'
import {addStocks} from '../Actions/addStocks'
import React, {Component} from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container,Col} from 'react-bootstrap'

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
        this.setState({symbol: '', name: '', price: ''  })
        this.props.history.push('/stocks')
    }



    render(){
        return(
            <Container>
                <label>Add Your Stocks!</label>
                <form onSubmit={this.handleSubmit}>
                <label></label>
                <Col><input type="text" placeholder="Symbol" name="symbol" value={this.state.symbol} onChange={this.handleChange}/></Col>
                <label></label>
                <Col><input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/> </Col>
                <label></label>
                <Col><input type="text" placeholder="Price" name="price" value={this.state.price} onChange={this.handleChange}/></Col>
                 <label></label>
                <Col><input type="submit"/></Col>
                </form>
            </Container>
        )
    }

} 

export default connect(null, {addStocks})(StocksForm);