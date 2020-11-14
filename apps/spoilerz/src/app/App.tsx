import React from 'react';
import { Feed } from './Feed/Feed';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <Feed />;
  }
}
