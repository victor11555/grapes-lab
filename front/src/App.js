import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/common/Navbar/Navbar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileAC } from './store/actions/getProfile.actions';
import Footer from './components/common/Footer/Footer';
import CabinetPage from './pages/CabinetPage/CabinetPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import Dashboard from './pages/Dashboard/Dashboard';
import EditProfile from './components/common/EditProfile/EditProfile';
import { initAllProjectsAC } from './store/actions/project.actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    dispatch(getProfileAC({ token }));
    dispatch(initAllProjectsAC([]));
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/editprofile' component={EditProfile} />
        <Route path='/cabinet' component={CabinetPage} />
        <Route path='/project/:id' component={ProjectPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
