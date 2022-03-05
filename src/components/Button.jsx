import React from "react";

function Button() {
  const [count, setCount] = React.useState(0);

  function increase() {
    setCount(count + 1);
  }

  const [backgroundColor, setBackgroundColor] = React.useState("black");
  const [textColor, setTextColor] = React.useState("white");

  function mouseOver() {
    setBackgroundColor("white");
    setTextColor("black");
  }
  function mouseLeave() {
    setBackgroundColor("black");
    setTextColor("white");
  }

  // const backgroundColor = "black";
  // const textColor = "white";

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");

  function handleChange(event) {
    setFirstName(event.target.value);
  }
  function handleChange1(event) {
    setlastName(event.target.value);
  }
  function handleSubmit() {}

  return (
    <div>
      <h1>{count}</h1>
      <button
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
          padding: "12px",
        }}
        onClick={increase}
        onMouseOver={mouseOver}
        onMouseLeave={mouseLeave}
      >
        Click
      </button>
      <h3>
        Hello {firstName} {lastName}
      </h3>
      <input
        onChange={handleChange}
        type="text"
        placeholder="First Name"
        value={firstName}
      ></input>
      <input
        onChange={handleChange1}
        type="text"
        placeholder="Last Name"
        value={lastName}
      ></input>
      <button onSubmit={handleSubmit}>Submit</button>
    </div>
  );
}
export default Button;
