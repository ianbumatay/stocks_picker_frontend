import React from 'react' 
import {deleteStocks} from '../Actions/deleteStocks'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'

const Delete = (props) => {

    console.log(props)

    const handleDelete = () => {
        props.deleteStocks(props.stock.id)
        props.history.push('/stocks')
    }

    return(
        <div>
            <button onClick={handleDelete}> DELETE</button>
        </div>
    )
}  

export default withRouter( connect(null, {deleteStocks})(Delete) );