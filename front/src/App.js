import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
