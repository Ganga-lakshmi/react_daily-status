import React from 'react';
import ReactDOM from 'react-dom/client';

//rendering a element in to browser
const root = ReactDOM.createRoot(document.getElementById('root'));
const obj3 = <h1>rendering elements</h1>
root.render(obj3);

const roots = ReactDOM.createRoot(
    document.getElementById('ptag')
  );
  
  function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}</h2>
      </div>
    );
    roots.render(element);
  }
  
  setInterval(tick, 1000);




//the function to execute in browser using index.js
function App() {
  return (
    <div className="App">
       welcome to React js

        
    </div>
  );
}



export default App;
