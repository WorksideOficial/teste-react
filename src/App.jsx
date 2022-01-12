import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { News } from "./components/News";
import { FormEdit } from './components/FormEdit';
import { Ver } from './components/ver';
import { Search } from './components/Search';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles/GlobalStyles.scss";


function App() {
  return (
    <Router>
       <ToastContainer autoClose={3000} />
      <Header />
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/listar" exact component={News} />
          <Route path="/pesquisa" exact component={Search} />
          <Route path="/edit/:id" exact component={FormEdit} />
          <Route path="/post/:id" exact component={Ver} />
        </Switch>
    </Router>
  );
}

export default App;
