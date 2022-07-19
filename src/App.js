import { useState } from "react";
import Todo from "./Todo";
import MainNavigation from "./components/layout/MainNavigation";
import mathu from './images/Mathushan.jpg';


// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes,
  Link,
} from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="Container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter APP</h1>
          <div className="my-5">
          <h2 className="my-5">{count}</h2>
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/main" element={<mainNavigation />}></Route>
              </Routes>
            </Router>
            <ul className="nav navbar-nav">
              <li><Link to ={"/home"}>HOME</Link></li>
              <li><Link to ={"/user"}>USER</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
