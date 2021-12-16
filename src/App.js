import React, { Component } from 'react'
import './App.css';


// Components
import Racing from './Racing';
import Basketball from './Basketball';
import Football from './Football';
import Esports from './Esports';
import Youtube from './Youtube';
import Cover from './Cover';
import Login from './Login';
import Forum from './Forum';
import InstaAlbum from './InstaAlbum';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Cover /> */}
        <InstaAlbum />
      </div>
    )
  }
}


export default App; //ES6 syntax for exporting

// functional component -> made out of a function
//class component -> is made out of a class