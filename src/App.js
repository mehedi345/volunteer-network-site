import React, { createContext, useContext, useState } from 'react';
import './App.css';
import Categories from './components/Categories/Categories';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import EventTask from './components/EventTask/EventTask';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();
export const CategoryContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [work, setWork] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <CategoryContext.Provider value={[work, setWork]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Categories />
            </Route>
            <Route exact path="/">
              <Categories />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/register">
              <Register />
            </PrivateRoute>
            <PrivateRoute path="/admin">
               <Admin/>
            </PrivateRoute>
            <PrivateRoute path="/event">
              <EventTask/>
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </CategoryContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
