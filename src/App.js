import React from 'react';
import logo from './logo.svg';
import './App.css';
import { selectUser, updateScore, updateTries, usersDara, storeUser } from './AvoidSideEffects/exerciseWithoutSideEffects';

function App() {
  return (
    <div className="App">
      <div>
        Side Effects and Pure Functions
      </div>
      <div> {Object.values(selectUser(usersDara, 0))} </div>
      <div> {Object.values(updateScore(selectUser(usersDara, 0), 70))} </div>
      <div> {Object.values(updateTries(selectUser(usersDara,0)))} </div>
      Stored

       {(storeUser(usersDara, selectUser(usersDara, 0), 0 )).forEach(user => {console.log(user)})}

    </div>
  );
}

export default App;
