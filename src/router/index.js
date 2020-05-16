import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Home, Detail} from './assembly'



export default class Router extends React.Component{
  render(){
    return(
      <BrowserRouter>
          <Switch>
            <Route path="/detail" component={Detail} />  
            <Route path="/" component={Home} />  
          </Switch>
      </BrowserRouter>
    )
  }
}

   