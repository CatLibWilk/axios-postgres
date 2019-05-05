import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import API from './util/API';


class App extends Component {
  
  componentDidMount(){
    API.test().then(result => console.log(result));
  }

  render(){
    return (
        <div className="App">
          <Form />
          <Button label='submit'/>
        </div>
    )
}
}

export default App;
