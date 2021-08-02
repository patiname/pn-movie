import {HashRouter as Router, Route, Switch} from "react-router-dom"
import { Home } from "./routes/Home/Home"
import { Detail } from "./routes/Detail/Detail"
import { GlobalStyles } from "./Globalstyle"

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Switch>
        <Route path="/" exact >
           <Home/>
        </Route>

        <Route path="/detail" >
           <Detail/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
