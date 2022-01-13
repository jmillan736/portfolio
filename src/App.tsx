import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { About } from './component/About';
import { MainPage } from './component/MainPage';
import { Projects } from './component/Projects';
import { SideBar } from './component/SideBar';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <SideBar/>
      <Switch>
        <Route exact path='/about' component={About}/>
        <Route exact path='/projects' component={Projects}/>
        <Route component={MainPage}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
