import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';

//rendering a element in to browser
const root = ReactDOM.createRoot(document.getElementById('root'));
// const obj3 = (
//              <div><h1>It is div section.</h1>
//               <p id='in-ptags'></p>
//               </div>
//               );
 const obj3 = <p id='in-ptags'></p>
root.render(obj3);

const roots = ReactDOM.createRoot(
    document.getElementById('ptag')
  );
  
  function tick() {
    const element = (
      <div>
        <h1>under paragraph section:</h1>
        <h2>Time is {new Date().toLocaleTimeString()}</h2>
      </div>
    );
    roots.render(element);
  }
  
  setInterval(tick, 1000);

  const rt = ReactDOM.createRoot(document.getElementById('in-ptags'));
  const obj4 = <p>rendering elements inside of paragrph section.</p>
  rt.render(obj4);
  




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// reportWebVitals();
