import React from "react";
import { Switch, Route } from "react-router-dom";

// Children
import Navbar from "./components/Navbar";
import List from "./components/List";
import Details from "./components/Details";
import Bag from "./components/bag";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/details" component={Details} />
        <Route path="/bag" component={Bag} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
