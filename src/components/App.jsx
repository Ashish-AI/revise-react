import React from "react";
import Button from "./Button";
import details from "./details";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function createNote(detail) {
  return (
    <Note
      title={detail.title}
      subtitle={detail.subtitle}
      key={detail.id}
    ></Note>
  );
}

function App() {
  return (
    <div>
      <Header></Header>
      <p> {details.map(createNote)}</p>
      <Button></Button>
      <Footer></Footer>
    </div>
  );
}

export default App;
