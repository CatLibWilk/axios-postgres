import React from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Form />
      <Button label='submit'/>
    </div>
  );
}

export default App;
