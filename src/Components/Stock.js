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
                <h2>{props.stock ? props.stock.name : null }</h2> <h4>{props.stock ? props.stock.symbol : null }</h4>  <p>{props.stock ? props.stock.price : null }</p>
                <div><img src={props.imageSrc} /></div>
                <button onClick={handledelete}>Delete</button> 
                <Opinion/>
            </div> 
        </div>
    )
}  

Stock.defaultProps = {
    imageSrc: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/D8qa-2E/videoblocks-animated-stock-market-data-infographics-background_s1n7ugj-f_thumbnail-180_13.jpg'
}

export default withRouter( connect(null, {deleteStocks})(Stock) );