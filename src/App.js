import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    selectUser,
    updateScore,
    updateTries,
    usersDara,
    storeUser,
} from './AvoidSideEffects/exerciseWithoutSideEffects';
import { getObj, getObj2, changeObj2, obj, assignObject, obj0 } from './AvoidSharedState/avoidSharedState';

const Spacer = () => {
  return <div>----------------------</div>
}

const handleDeepAssign = () => {
  let obj1 = getObj(obj0)
  let obj2 = getObj2(assignObject(obj0))
  obj2.questions.q1.value = 10
  // even though we use assign, the deeply nested object is still changed in both
  console.log(obj1)
  console.log(obj2)

  // Json stringify allows us to clone the entire object including deep nested ones
  let obj3 = JSON.parse(JSON.stringify(obj2))
  // For ex run the following in place and all values ar ere 10
  //let obj3 = Object.assign(obj2)

  console.log(obj3)
  obj3.questions.q1.value = 5
  // value is 5
  console.log(obj3)
  // value is 10
  console.log(obj2)
  // value is 10
  console.log(obj1)

}

function App() {
    return (
        <div className='App'>
            <div>
              <Spacer/>
                <div>Side Effects and Pure Functions</div>
                Select User:
                <div> {Object.values(selectUser(usersDara, 0))} </div>
                Update Score:
                <div> {Object.values(updateScore(selectUser(usersDara, 0), 70))} </div>
                Update Tries:
                <div> {Object.values(updateTries(selectUser(usersDara, 0)))} </div>
                Store user console log:
                {storeUser(usersDara, selectUser(usersDara, 0), 0).forEach((user) => {
                    return <li>{user}</li>
                })}
            </div>
            <Spacer/>
            <div>
                <div>Side Effects and Pure Functions</div>
                <div>EXAMPLE OBJECT ASSSIGN</div>
                Print obj:
                <div>{Object.values(getObj(obj))}</div>
                Print obj 2:
                <div>{Object.values(getObj2(obj))}</div>
                Assign and Change obj 2:
                <div>{Object.values(changeObj2(assignObject(obj)))}</div>
                Print obj:
                <div>{Object.values(getObj(obj))}</div>
                <div>EXAMPLE OBJECT DEEP ASIGN</div>
                {handleDeepAssign()}
            </div>
        </div>
    );
}

export default App;
