import React from "react";
import "./App.scss";
import Cm1 from "./Components/cm1/cm1";
import Cm2 from "./Components/cm2/cm2";
export interface Iperson {
  name: string;
  age: number;
  rate: number;
  dob: string;
}
const myFamily:Array<Iperson>=[
  {name:'janyar',age:0.9,rate:90,dob:'16/1/98'},
  {name:'radmehr',age:6,rate:100,dob:'16/9/92'},
  {name:'arezoo',age:35,rate:100,dob:'24/7/63'},
  {name:'mahdi',age:40,rate:100,dob:'24/9/58'}
]

class App extends React.Component {
  render() {
    return (
      <>
        <Cm1 persons={myFamily}  />
      </>
    );
  }
}

export default App;
