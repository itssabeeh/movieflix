import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Error from './components/Error/Error';
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
        <Route path="*">
          <Error msg={'Oops...nothing to see here'} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
