
import React from 'react';
import './App.css';
import {SecaoForm} from './components/SecaoForm/SecaoForm'
import {SecaoMensagens} from './components/SecaoMensagens/SecaoMensagens'

class App extends React.Component {
render(){
  return (
    <div className="todo">
      <SecaoMensagens>

      </SecaoMensagens></div>
  );
}
}

export default App;
