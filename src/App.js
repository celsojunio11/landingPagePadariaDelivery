import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Services from './pages/Services';
// import Products from './pages/Products';
// import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />

        </Switch>
      </Router>
    </>
  );
}

export default App;