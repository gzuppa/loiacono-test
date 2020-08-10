import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './App.css';

import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';

import NavBar from './components/NavBar'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import SingleMission from './pages/SingleMission';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Container>
      <NavBar/>
      <Route exact path='/' component={Home} />
      <AuthRoute exact path='/login' component={Login} />
      <AuthRoute exact path='/register' component={Register} />
      <Route exact path="/missions/:missionId" component={SingleMission} />
      </Container>
    </Router>
    </AuthProvider>
  );
}

export default App;
