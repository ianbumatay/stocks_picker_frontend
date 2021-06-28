import React from 'react' 
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Row, Col, Button} from 'react-bootstrap'

const Stock = (props) => { 
  console.log(props)
 

  const renderButtons = () => {
    if(props.buy){
      return (<Button variant="success" onClick={() => props.buy(props.stock)}> Buy </Button> )
    }else {
       return (<Button variant="danger" onClick={() => props.sell(props.stock)}>Sell</Button>)
    }
  }
  
      

    return (
      <div>
        <Container>
            <Row>
                <Col>
                  {renderButtons()}
               </Col>
                <Col>
                  <p className="stocks-symbol">{props.stock.symbol}</p>
                </Col>
                <Col>
                  <h4><Link to={`/stocks/${props.stock.id}`}> {props.stock.name}</Link> </h4>
                </Col>
                <Col>
                  <p className="stocks-price">Price: {props.stock.price}</p>
                </Col> 
            </Row>
        </Container>
      </div>
    )
}

export default Stock; 


// <Link to={`/boards/${board.id}`}> {board.name}  </Link></h2>)}

// {id, name, symbol, price, clickFav}