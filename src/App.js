import "antd/dist/antd.css";
import "App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "pages/Home";
import Post from "pages/Post";
import SlideRoutes from "react-slide-routes";
import Router from "./components/router";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { ViewportProvider } from "./components/ViewportProvider";
import { LoadingProvider } from "./components/LoadingProvider";
import User from "./pages/User";
import Buy from "./pages/Buy";
import Done from "pages/Done";

const SlideContainer = () => {
  const location = useLocation();
  return (
    <Switch>
      <SlideRoutes location={location}>
        <Route path="/" component={Home} exact />
        <Route path="/posts/:postId" component={Post} exact />
        <Route path="/user" component={User} />
        <Route path="/posts/:postId/buy" component={Buy} />
        <Route path="/done" component={Done} />
      </SlideRoutes>
    </Switch>
  );
};

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <LoadingProvider>
              <ViewportProvider>
                <SlideContainer />
              </ViewportProvider>
            </LoadingProvider>
          </Router>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
