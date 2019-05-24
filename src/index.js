//index.js

import React from "react";
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ReactDOM from "react-dom";

const Index = () => {
  return <BrowserRouter> <App /></BrowserRouter>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
