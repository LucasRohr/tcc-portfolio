import "./app.scss";

import Begin from "./sections/Begin";
import Goals from "./sections/Goals";
import Observe from "./sections/Observe";
import People from "./sections/People";
import Care from "./sections/Care";
import Solution from "./sections/Solution";
import Prototypes from "./sections/Prototypes";
import End from "./sections/End";
import Audience from "./sections/Audience";
import Personas from "./sections/Personas";
import EmpathyMap from "./sections/Empathy-map";
import PersonaResearch from "./sections/Persona-research";
import GoldenCircle from "./sections/GoldenCircle";
import Storyboard from "./sections/Storyboard";
import Inclusion from "./sections/Inclusion";

function App() {
  return (
    <div className="container">
      <Begin />
      <Goals />
      <Observe />
      <People />
      <Care />
      <Solution />
      <Audience />
      <EmpathyMap />
      <Personas />
      <PersonaResearch />
      <GoldenCircle />
      <Storyboard />
      <Inclusion />
      <Prototypes />
      <End />
    </div>
  );
}

export default App;
