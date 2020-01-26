import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div>
      <Palette colors={generatePalette(seedColors[4]).colors[200]} />
    </div>
  );
}

export default App;
