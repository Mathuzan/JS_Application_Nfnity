import React from "react";
import { useState } from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
  const [count, setCount] = useState(0);
  return (

    <div>
      <Link to="/main">
        {" "}
        <button className="btn btn-danger mx-3" onClick={() => {setCount(count - 1);}}> Display Images </button>
      </Link>
      <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}> Increment </button>
      <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)} > Decrement</button>
      <button className="btn btn-secoundary mx-3" onClick={() => setCount(0)}> Reset </button>
    </div>
  );
};

export default Home;
