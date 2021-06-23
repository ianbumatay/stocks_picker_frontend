import React from 'react'  
import {connect} from 'react-redux'
import {deleteStocks} from '../Actions/deleteStocks'
import { withRouter } from 'react-router'
import Opinion from './Opinion'


const Stock = (props) => { 

   
    const handledelete = () => {
        props.deleteStocks(props.stock.id)
        props.history.push('/stocks')
    }

    return(
        <div>
            <div>
                <h1>{props.stock ? props.stock.symbol : null }</h1> 
                <h4>{props.stock ? props.stock.name : null }</h4> 
                <p>{props.stock ? props.stock.price : null }</p>
                <button onClick={handledelete}>Delete</button> 
                <Opinion/>
            </div> 
        </div>
    )
} 

export default withRouter( connect(null, {deleteStocks})(Stock) );