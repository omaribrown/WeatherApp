import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
// import WeeklyForecast from './components/WeeklyForecast'

function App() {
  return (
    <div className="App">
      <h1>Check the weather for Atlanta!</h1>
      <NavBar />

      {/* <WeeklyForecast /> */}
      {/* <Test /> */}
    </div>
  );
}

export default App;
