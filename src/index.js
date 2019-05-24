import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from "./redux/store";
import './animate.scss?v=2';
ReactDOM.render(
	<Provider store={store}>
	    <App />
	</Provider>,document.getElementById('root'));
