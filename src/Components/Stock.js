import React from 'react' 
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Row, Col} from 'react-bootstrap'

const Stock = (props) => { 
  //console.log(props)
 

  

  // const clickFav = () => {
  //   console.log("clicked")
  // }

    

    return (
      <div>
        <Container>
            <Row>
                <Col>
                 <button>fav</button>
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