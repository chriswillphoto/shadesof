import React, { PureComponent as Component } from 'react';
import '../App.css';

import Menu from './Menu.js'
import Viewer from './Viewer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Menu />
      <Viewer />
      </div>
    );
  }
}

export default App;
