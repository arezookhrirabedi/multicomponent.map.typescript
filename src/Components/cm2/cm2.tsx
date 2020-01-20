import React from "react";
import Cm1 from "../cm1/cm1";
import Iperson from "../../App";
interface Iprops {
  persons: Iperson;
}
interface Istate {}
class Cm2 extends React.Component<Iprops, Istate> {
  constructor(props: Iprops) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.persons.map((myFamily, index) => {
          return (
              <div>
            <li key={index}>
              name:{myFamily.name}
              age:{myFamily.age}
              dob:{myFamily.dob}
              rate:{myFamily.rate}
            </li>
            </div>
            );
        })}
      </>
    );
  }
}
export default Cm2;
