
import './App.css';
import StocksPage from './Containers/StocksPage'
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
          <StocksPage/>
      </div>
    )
  }
}

export default App;