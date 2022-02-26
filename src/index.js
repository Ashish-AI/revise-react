// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";

const firstName = "Ashish";
const lastName = "Chaubey";

ReactDOM.render(
  <div>
    <h1>
      Hello my name is {firstName} {lastName}
    </h1>
    <p>My reg number is {11802480 + 2}</p>
  </div>,
  document.getElementById("root")
);
