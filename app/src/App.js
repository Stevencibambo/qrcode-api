import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Heard';
import Main from './components/Main';
import Encode from './components/Encode';
import Decode from './components/Decode';
import Api from './components/Api';

class App extends  Component{
  render(){
    return(
      <BrowserRouter >
        <Header />
        <Switch>
            <Route exact path ="/" component = {Main} />
            <Route exact path ="/encode" component = {Encode} />
            <Route exact path ="/decode" component = {Decode} />
            <Route exact path ="/api" component = {Api} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
