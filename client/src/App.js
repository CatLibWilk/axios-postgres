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
      display_article: {}
    };
  }

select_id = (e, article_store) => {
  e.preventDefault();
  console.log(e.target.options['selectedIndex'])
  this.setState({ display_article: article_store[e.target.options['selectedIndex']-1] } )
}

  render(){
    return (
        <div className="App">
          <Navbar />
          <Dropdown function={this.select_id}/>
          <Form />
          <Button label='submit'/>
          <div class="mt-5">
            <h3>{this.state.display_article['first_author'] ? this.state.display_article['first_author'] : ''}</h3>
            <p>{this.state.display_article['study_title'] ? this.state.display_article['study_title'] : '' }</p>
          </div>
        </div>
    )
}
}

export default App;
