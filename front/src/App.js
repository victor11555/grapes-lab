import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/common/Navbar/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileAC } from './store/actions/getProfile.actions';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('jwt'))
    dispatch(getProfileAC({ token } ))
  }, [])

  return (
    <div className='App'>
      <NavBar/>
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
      </Switch>
    </div>
  );
}

export default App;
