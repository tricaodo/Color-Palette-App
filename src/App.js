import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

function App() {
  generatePalette(seedColors[4])
  return (
    <div>
      <Palette colors={seedColors[4].colors} />
    </div>
  );
}

export default App;
