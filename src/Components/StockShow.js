import React from 'react'  
import {connect} from 'react-redux'
import {deleteStocks} from '../Actions/deleteStocks'
import { withRouter } from 'react-router'
import Opinion from './Opinion' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Row, Col, Card, Button} from 'react-bootstrap'


const StockShow = (props) => {  
  console.log(props)

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
                <h4 className="stocks-symbol">{props.stock ? props.stock.name : null}</h4>
                </Col>
                <Col>
                  <p className="stocks-price">Price:{props.stock ? props.stock.price : null}</p>
                </Col>
            </Row>
            <Card className='mb-3' style={{color: '#000'}}>
                <Card.Img src={props.imageSrc}/>
                <Card.Body>
                    <Card.Title>
                      
                    </Card.Title>
                      <Row>
                         <Col>
                            <Button varian="info" onClick={handledelete}>Delete</Button> 
                         </Col>
                         <Col>
                            <Opinion/>
                          </Col>
                        </Row>
                    </Card.Body>
             </Card>
        </Container>
                   
       
    )
}  

StockShow.defaultProps = {
    imageSrc: 'https://t3.ftcdn.net/jpg/03/10/46/56/360_F_310465670_Wy4QCEfxYU2ziHjbeZsNAumKhaZzZS1w.jpg'
}

export default withRouter( connect(null, {deleteStocks})(StockShow) );