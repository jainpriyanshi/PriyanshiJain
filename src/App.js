import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/Landing.jsx';
import Contact from './components/contact'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div>
        <Router>
            <Route exact path="/" component={Landing} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={AboutMe} />
        </Router>
    </div>
  );
}

export default App;
