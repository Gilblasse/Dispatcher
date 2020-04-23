import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store";
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router } from "react-router-dom";
import 'materialize-css/dist/js/materialize.min.js'
// Import Materialize
// import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// pick a date util library
import DateFnsUtils from '@date-io/date-fns';
// import '../node_modules/@semantic-ui-react/event-stack/src/l'

const RootApplication = <MuiPickersUtilsProvider utils={DateFnsUtils}><Provider store={store}><Router><App /></Router></Provider></MuiPickersUtilsProvider>
ReactDOM.render(RootApplication,document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
