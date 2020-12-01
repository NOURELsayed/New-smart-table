import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FormEdit from "./components/FormEdit";
import Home from "../src/components/Home"
import AddRow from "../src/components/AddRow"
function Routing(id) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/editform/:id" component={FormEdit}>
        </Route>
        <Route path="/add" component={AddRow}>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routing;
