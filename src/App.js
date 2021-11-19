import "antd/dist/antd.css";
import "App.css";
import { Route, Switch } from "react-router-dom";
import Router from "components/router";

import Timeline from "components/Timeline";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="">
            <Timeline />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
