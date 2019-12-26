import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Landing from './components/Landing.jsx';
import Contact from './components/contact'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div>
        <HashRouter basename="/">
            <Route exact path="/" component={Landing} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/about" component={AboutMe} />
        </HashRouter>
    </div>
  );
}

export default App;
