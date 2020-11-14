import React from 'react';
import { Feed } from './Feed/Feed';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Feed />;
  }
}
