import React, {Component} from 'react' 

class StocksForm extends Component {

    state = { symbol: '', name: '', price: '' } 

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    render(){
        return(
            <div>
                <form>
                    <input type="text" placeholder="Symbol" name="symbol" value={this.state.symbol} onChange={this.handleChange}/>
                    <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/> 
                    <input type="text" placeholder="price" name="price" value={this.state.price} onChange={this.handleChange}/>
                </form>
            </div>
        )
    }

} 

export default StocksForm;