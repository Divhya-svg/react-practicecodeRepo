import React from 'react';

// function Greet(){
//     return <h1>Hello Function Component!</h1>
// }
//ES6 arrow functions and tags
//export const Greet = () => <h1>Hello Function Component!ES6</h1>
const Greet = (props) => {
    console.log(props)
    
    return(
        <div>
<h1>Hello {props.name} a.k.a{props.pair}</h1>
{props.children}
        </div>

    ) 
}
export default Greet