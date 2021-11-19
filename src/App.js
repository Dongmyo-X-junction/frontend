import 'antd/dist/antd.css';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Dashboard from "./page/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
