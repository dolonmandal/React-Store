import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import './App.css';
import Bookstore from './Bookstore';
import Moviestore from './Moviestore';



function App() {
  return (
    <Router>
    <div className="App">
    
    <nav >
      <ul className="nav-links">
    <li>REACT</li>
    <Link to="/Bookstore">
    <li>The BookStore</li></Link>
    <Link to="/Moviestore">
    <li>The MovieStore</li></Link>

      </ul>
    </nav>
    <Switch>
    <Route path="/" exact component={Bookstore}></Route>

    <Route path="/Bookstore" exact component={Bookstore}></Route>
    <Route path="/Moviestore" exact component={Moviestore}></Route>

    </Switch>
    
      
    </div>
    </Router>
  );
}

export default App;
