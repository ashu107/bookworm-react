import React, { Component } from 'react';
import logo from './logo.svg';
import { Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import './App.css';

const App = () => (
  <div >
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={LoginPage} />

    </div>
);

export default App;
