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

  // const [firstName, setFirstName] = React.useState("");
  // const [lastName, setlastName] = React.useState("");
  const [name, setName] = React.useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    // setFirstName(event.target.value);
    const name = event.target.name;
    const value = event.target.value;

    console.log(name);

    setName((prevValue) => {
      // console.log(name.fName);
      // console.log(name.lName);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue,
          lName: value,
        };
      }
    });
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
      <h3>{/* Hello {name.fName} {name.lName} */}</h3>
      <input
        name="fName"
        onChange={handleChange}
        type="text"
        placeholder="First Name"
        value={name.fName}
      ></input>
      <input
        name="lName"
        onChange={handleChange}
        type="text"
        placeholder="Last Name"
        value={name.lName}
      ></input>
      <button onSubmit={handleSubmit}>Submit</button>
    </div>
  );
}
export default Button;
