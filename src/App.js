import "./app.scss";

import Begin from "./sections/Begin";
import Goals from "./sections/Goals";
import Observe from "./sections/Observe";
import People from "./sections/People";
import Care from "./sections/Care";
import Solution from "./sections/Solution";
import Prototypes from "./sections/Prototypes";
import End from "./sections/End";

function App() {
  return (
    <div className="container">     
      <Begin/>
      <Goals/>
      <Observe/>
      <People/>
      <Care/>
      <Solution/>
      <Prototypes/>
      <End/>
    </div>
  );
}

export default App;
