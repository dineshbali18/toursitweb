import React, { Component } from 'react';
import './App.css';
import Navi1 from './components/navi';
import Carousel from './components/carousel'; 
import Carder from './components/carder'
import Final from './components/final';

// import { render } from 'react-dom';

class App extends Component {
  render(){
  return (
    <div>
    <Navi1 />
    <Carousel />
    <h1>The Best Places To Visit In 2021.</h1>
    <span><Carder /></span>
    <span><Carder /></span>
    <Carder />
    <Final />

    </div>
  );
}
}


export default App;
