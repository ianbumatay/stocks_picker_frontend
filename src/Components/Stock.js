import React from 'react'  
import {connect} from 'react-redux'
import {deleteStocks} from '../Actions/deleteStocks'
import { withRouter } from 'react-router'
import Opinion from './Opinion' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Row, Col, Card} from 'react-bootstrap'


const Stock = (props) => { 


    const handledelete = () => {
        props.deleteStocks(props.stock.id)
        props.history.push('/stocks')
    }

    return(
        <Container> 
            <Row>
                <Col>
                  <p className="stocks-symbol">{props.stock ? props.stock.symbol : null}</p>
                </Col>
                <Col>
                <p className="stocks-symbol">{props.stock ? props.stock.name : null}</p>
                </Col>
                <Col>
                  <p className="stocks-price">Price: {props.stock ? props.stock.price : null}</p>
                </Col>
            </Row>
            <Card className="'mb-3" style={{color: '#000'}}>
                <Card.Img src={props.imageSrc} />
                {/* <Card.Body>
                    <Card.Title>
                       {props.stock ? props.stock.name : null }
                    </Card.Title>
                    <Card.Text>
                    {props.stock ? props.stock.price : null }
                    </Card.Text>
                </Card.Body> */}
                <button onClick={handledelete}>Delete</button> 
                <Opinion/>
            </Card>
        </Container>
            
               
           
       
    )
}  

Stock.defaultProps = {
    imageSrc: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/D8qa-2E/videoblocks-animated-stock-market-data-infographics-background_s1n7ugj-f_thumbnail-180_13.jpg'
}

export default withRouter( connect(null, {deleteStocks})(Stock) );