import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import store from './redux/cofigureStore';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/categories" component={Categories} />
          <Route path="/" component={Books} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
