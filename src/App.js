import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Pages/Page';
import SearchPage from './components/Search/SearchPage';
import Show from './components/Show/Show';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Page />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/show/:id">
          <Show />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
