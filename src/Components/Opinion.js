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
                   <Button variant="success" onClick={this.bullishCount}>Bullish: {this.state.bullishCount}</Button>
                 </Col>
                <Col>
                   <Button variant="danger" onClick={this.bearishCount}>Bearish: {this.state.bearishCount}</Button>
                </Col>
              </Row>
          </Container>
        )
    }
}
