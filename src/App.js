import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/categories" component={Categories} />
        <Route path="/" component={Books} />
      </Switch>
    </Router>
  );
}

export default App;
