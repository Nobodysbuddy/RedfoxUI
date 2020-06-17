import React from 'react';
import './App.css';
import CoreComponent from './Core/CoreComponent';
import RfxText from './Core/Widgets/Text/Text'

var sampleText = 'Hello World!';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This Page Doesn't Have Any UI Content</h1>
        <h3>This Page Is The RedfoxUI Soucre Code And Thus Doesn't Have Any UI Content Here. :)</h3>
        <CoreComponent />
        <div>
          <h1>A Demo Of rfxText:</h1>
          <hr />
          <RfxText text={sampleText}/>
        </div>
      </header>
    </div>
  );
}

export default App;
