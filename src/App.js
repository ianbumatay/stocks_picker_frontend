
import './App.css';
import StockPage from './Containers/StockPage'
import {Component} from 'react';

class App extends Component {  



  // componentDidMount(){
  //   fetch('http://localhost:3000/api/v1/stocks')
  //   .then(resp => resp.json())
  //   .then( data => console.log(data))
  // }

  render(){
    return(
      <div className="App">
          <StockPage/>
      </div>
    )
  }
}

export default App;