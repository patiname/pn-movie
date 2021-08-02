import {HashRouter as Router, Route, Switch} from "react-router-dom"
import { Home } from "./routes/Home/Home"
import { Detail } from "./routes/Detail/Detail"
import { GlobalStyles } from "./Globalstyle"
import { Header } from "./components/Header"
import { Search } from "./routes/Search/Search"

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Header/>
      <Switch>
        <Route path="/" exact >
           <Home/>
        </Route>

        <Route path="/detail" >
           <Detail/>
        </Route>

        <Route path="/search" >
           <Search/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
