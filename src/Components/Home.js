import React from 'react' 
import { Container, Card} from 'react-bootstrap'

const Home = (props) =>{

    return(
        <Container>
            <Card.Title>
                <h1>Stocks Picker</h1>
            </Card.Title>
            <Card.Img src={props.imageSrc}/>
        </Container>
        

    )
}

Home.defaultProps = {
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5e1j_EQ1tjx16MrCMur8L-b_FkO95qnb_g&usqp=CAU'
}

export default Home; 

