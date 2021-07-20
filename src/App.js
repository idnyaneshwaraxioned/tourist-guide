import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home';
import Guidelist from './pages/guidelist/Guidelist';
import Guidedetails from './pages/guidedetails/Guidedetails';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/guide/:guidelist' component={Guidelist}/>
          <PrivateRoute exact path='/guide/:guidelist/:guidename' component={Guidedetails}/>
          <Route exact path='/login' component={Login} />
          <Route component={()=><h1>Page not found...</h1>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
