import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Today from './Today';
import Tuesday from './Tuesday';



export default function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Today</Link>
            </li>
            <li>
              <Link to="/monday">Monday</Link>
            </li>
            <li>
              <Link to="/tuesday">Tuesday</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/monday">
            <Monday />
          </Route>
          <Route path="/tuesday">
            <Tuesday />
          </Route>
          <Route path="/">
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

function Monday() {
  return (
    <div>
      <h1>Monday</h1>
    </div>
  );
}

// function Tuesday() {
//   return (
//     <div>
//       <h1>Tuesday</h1>
//     </div>
//   );
// }