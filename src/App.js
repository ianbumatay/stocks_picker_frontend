
import './App.css';
import StocksPage from './Containers/StocksPage'
import {Component} from 'react';

class App extends Component {  



  render(){
    return(
      <div className="App">
          <StocksPage/>
      </div>
    )
  }
}

export default App;