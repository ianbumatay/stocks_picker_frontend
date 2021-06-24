import React from 'react' 
// import '../App.css';
import '../Stocks.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Row, Col} from 'react-bootstrap'

const Stocks = ({id, name, symbol, price}) => { 

    

    return (
        <Container>
            <Row>
                <Col>
                <Link to={`/stocks/${id}`}> {name}</Link> 
                </Col>

            
        
                <Col>
                 <p className="stocks-symbol">{symbol}</p>
                </Col>

        
            
                <Col>
                <p className="stocks-price">{price}</p>
                </Col>

            </Row>
            
        
        </Container>
    )
}

export default Stocks; 

//<Link to={`/stocks/${stock.id}`}> {name}</Link> 
