import React, { Component } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Row, Col, Button} from 'react-bootstrap'

export default class Opinion extends Component { 

    state = {
       bullishCount: 0,
       bearishCount: 0
    }
    

     bullishCount = () => {
        this.setState( prevState => {
            return {bullishCount: prevState.bullishCount + 1}
        })
    }   
      
     bearishCount = () => {
         this.setState( prevState => {
             return { bearishCount: prevState.bearishCount + 1}
         })
     }


    render() {
        return (
           <Container> 
              <Row>
              <Col>
                <Button variant="danger" onClick={this.bearishCount}>BULLISH <h2>{this.state.bearishCount}</h2></Button>
             </Col>
              <Col>
                <Button variant="success" onClick={this.bullishCount}>BEARISH <h2>{this.state.bullishCount}</h2></Button>
              </Col>
               
              </Row>
          </Container>
        )
    }
}
