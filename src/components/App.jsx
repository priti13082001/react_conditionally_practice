import React from "react";
import Login from "./Login";
var loggedin = true;
// function rendercondinationally() {
//   if (loggedin === true) {
//     return <h1>Hello </h1>;
//   } else {
//     return <Login />;
//   }
// }
// const currentime = new Date(2023, 11, 1, 23);
// const h = currentime.getHours();
function App() {
  return (
    <div className="container">
      {loggedin === true ? <h1>Hello </h1> : <Login />}
      {/* {h > 12 && <h1> are your work over time</h1>} */}
    </div>
  );
}

export default App;
