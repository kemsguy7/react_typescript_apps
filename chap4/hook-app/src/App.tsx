import React from 'react';
import './App.css';
// import { PersonScoreWithReducer } from './PersonScoreWithReducer';
import RefComponent from './components/ref';
import PersonScoreWithRef from './components/personScoreWithRef';

function App() {
  return (
    <div className="App">
      {/* <PersonScore /> */}

      <h1>Ref Component</h1>
      <RefComponent />

      <h1> PersonSCORE With rEF </h1>
      <PersonScoreWithRef />

      <hr />
      <br />
      {/* <PersonScoreWithReducer /> */}
    </div>
  );
}

export default App;
