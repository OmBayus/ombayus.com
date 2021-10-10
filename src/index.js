import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';

//Loading Page
import Loading from "./components/Loading/Loading"

ReactDOM.render(
  <Suspense fallback={<Loading/>}><Router><App /></Router></Suspense>,
  document.getElementById('root')
);
