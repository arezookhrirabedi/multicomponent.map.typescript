import React from 'react';
import Iperson from '../../App';
import Cm2 from '../cm2/cm2'
interface Iprops {
persons:Iperson
}
interface Istate{
}
class Cm1 extends React.Component<Iprops,Istate>{
    constructor(props:Iprops){
        super(props)
    }
    
    render(){
        return(
    <>
<Cm2 persons={this.props.persons}/>

    </>
        );
    }
    }
    export default Cm1