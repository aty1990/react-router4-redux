import React from "react";
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import './index.scss';
import Home from './home';


class App extends React.PureComponent {
  render() {
    return (
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    );
  }
}
export default App;


