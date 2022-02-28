import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header></Header>
      <Note title="Title 1" subtitle="This is subtitle 1"></Note>
      <Note title="Title 2" subtitle="This is subtitle 2"></Note>
      <Footer></Footer>
    </div>
  );
}

export default App;
