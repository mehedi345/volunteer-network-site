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


export const UserContext = createContext();
export const CategoryContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [category, setCategory] = useState({});
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <CategoryContext.Provider value={[category, setCategory]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Categories />
        </Route>
        <Route exact path="/">
          <Categories />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
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
