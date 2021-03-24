import {
  Switch, Route, Redirect, NavLink,
} from 'react-router-dom';
import characterList from '../containers/characterList';
import character from '../containers/character';
import '../App.css';

const App = () => (
  <div className="App">
    <nav>
      <NavLink to="/">Search</NavLink>
    </nav>
    <Switch>
      <Route path="/" exact component={characterList} />
      <Route path="/character/:character" component={character} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
