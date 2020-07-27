import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Today from './Today';
import Day2 from './Day2';
import Day3 from './Day3'
import Day4 from './Day4';
import Day5 from './Day5'
import Day6 from './Day6';




export default function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/today">Today</Link>
            </li>
            <li>
              <Link to="/day2">day2</Link>
            </li>
            <li>
              <Link to="/day3">day3</Link>
            </li>
            <li>
              <Link to="/day4">day4</Link>
            </li>
            <li>
              <Link to="/day5">day5</Link>
            </li>
            <li>
              <Link to="/day6">day6</Link>
            </li>
            <li>
              <Link to="/day7">day7</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/today">
            <Today />
          </Route>
          <Route path="/day2">
            <Day2 />
          </Route>
          <Route path="/day3">
            <Day3 />
          </Route>
          <Route path="/day4">
            <Day4 />
          </Route>
          <Route path="/day5">
            <Day2 />
          </Route>
          <Route path="/day6">
            <Today />
          </Route>
          <Route path="/day7">
            <Today /> 
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Home() {
//   return (
//     <div>
//       <Today />
//     </div>
//   );
// }

// function Monday() {
//   return (
//     <div>
//       <h1>Monday</h1>
//     </div>
//   );
// }

// function Tuesday() {
//   return (
//     <div>
//       <h1>Tuesday</h1>
//     </div>
//   );
// }