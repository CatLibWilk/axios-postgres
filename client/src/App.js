import React, {Component} from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import API from './util/API';


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      
    };
  }
  
  componentDidMount(){
    API.get_articles().then(result => console.log(result));

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
