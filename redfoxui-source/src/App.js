import React from 'react';
import './App.css';
import CoreComponent from './Core/CoreComponent';
import Text from './Core/Widgets/Text/Text'

function App() {
  return
    <div className="App">
      <header className="App-header">
        <h1>This Page Doesn't Have Any UI Content</h1>
        <h3>This Page Is The RedfoxUI Soucre Code And Thus Doesn't Have Any UI Content Here :)</h3>
        <CoreComponent />
        <Text />
      </header>
    </div>
  );
}

export default App;
