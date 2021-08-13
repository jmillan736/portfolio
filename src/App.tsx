import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { About } from './component/About';
import { MainPage } from './component/MainPage';
import { SideBar } from './component/SideBar';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <SideBar/>
      <Switch>
        <Route exact path='/about' component={About}/>
        <Route component={MainPage}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
