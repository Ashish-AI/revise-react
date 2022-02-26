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

const customStyle = { color: "red", fontSize: "40px" };
customStyle.color = "green";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>
      Hello my name is {firstName} {lastName}
    </h1>
    <ul>
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
    </ul>
  </div>,
  document.getElementById("root")
);
