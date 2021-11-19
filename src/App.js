import "antd/dist/antd.css";
import "App.css";
import { Route, Switch } from "react-router-dom";
import Router from "components/router";

import Home from "pages/Home";
import Post from "pages/Post";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/posts/:id" component={Post} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
