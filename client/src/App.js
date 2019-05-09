import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar';

import API from './util/API';


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      
    };
  }

  render(){
    return (
        <div className="App">
          <Navbar />
          <Dropdown />
          <Form />
          <Button label='submit'/>
        </div>
    )
}
}

export default App;
