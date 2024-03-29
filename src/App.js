import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import LandingPage from "pages/LandingPage";

import DetailsPage from "pages/DetailsPage";

import "assets/scss/style.scss";
import Example from "pages/Example";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/properties/:id" component={DetailsPage} />
        <Route path="/example" component={Example} />
      </Router>

    
    </div>
  );
}

export default App;