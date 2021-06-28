import React, { Component } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import { Container, Row, Col, Button} from 'react-bootstrap' 


class Opinion extends Component{ 

    state = {
      toggled: false
    } 
    
    handleClick = () => {
      this.setState( prevState => {
        return { toggled: !prevState.toggled }
      })
    }

     render(){
        return (
           <Container> 
              <Row>
                <Col><h4>Market Strategy</h4></Col>
                <Col>
                   <div onClick={this.handleClick}>{ this.state.toggled ? <Button variant="danger">BEARISH</Button> : <Button variant="success">BULLISH</Button>}</div>
                </Col>
             </Row>
          </Container>
        )
     }
}   

export default Opinion;