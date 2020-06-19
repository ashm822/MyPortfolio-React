import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Resume from './components/Resume';
import Header from './components/Header';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <>
          <Header />                
          <Switch>
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />                
          </Switch>      
        </>
      </Router>
     
  );
}

export default App;
