import React from "react";
import { Switch, Route } from "react-router-dom";

import Counter from "./pages/Counter";
import Todos from "./pages/Todos";
import MarkDownEditor from "./pages/MarkDownEditor";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Counter} />
      <Route path="/counter" component={Counter} />
      <Route path="/todos" component={Todos} />
      <Route path="/text" component={MarkDownEditor} />
    </Switch>
  );
}

export default Routes;
