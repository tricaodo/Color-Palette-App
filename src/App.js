import React from 'react';
import Palette from "./Palette";
import seedColors from "./seedColors";

function App() {
  return (
    <div>
      <Palette colors={seedColors[4].colors}/>
    </div>
  );
}

export default App;
