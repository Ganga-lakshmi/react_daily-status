import React from 'react';
//import Hello from './components/Hello'

let name = "ganga"

const user={
     fname:'GANGA',
     lname:'LAKSHMI'
};

//specifying attributes with jsx
const element = <img src="" alt=""></img>;
const ele2 = <a href='https://www.react.org'>link</a>
//creating objects
const object1 = (
  <h1>hello world</h1>
);
//react elemetns

const object2=React.createElement(
    'h1',{className:'greet'},'new react element'
)

// const object2 = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };
//the function to execute in browser using index.js
function App() {
  return (
    <div className="App">
       welcome to React js
        {/* specifying children with jsx */}

       <h1>hello  {name}</h1>
       <p><b>details:</b> {formatName(user)} {element}</p>
       <p><b>expressions</b>: {getGreet(user)}</p>
       <p>a tag : {ele2}</p>
       <p>objects : {object1}</p>
       <p>react element:{object2}</p>
    </div>
  );
}
function formatName(user){
  return 'fname:'+ user.fname + '  lname:'+ user.lname;
}

//JSX is an expression,args,
function getGreet(user){
  if(user){
    return <p>from if conditions {formatName(user)}!</p>
  }
  else{
    return <h3>not accessable</h3>
  }
}


export default App;
