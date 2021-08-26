import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./routes/Home/Home";
import { Detail } from "./routes/Detail/Detail";
import { GlobalStyles } from "./Globalstyle";
import { Header } from "./components/Header";
import { Search } from "./routes/Search/Search";
import { ScrollMove } from "./components/ScrollMove";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <ScrollMove />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/detail/:movieId">
          <Detail />
        </Route>

        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
