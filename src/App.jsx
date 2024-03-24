import React from "react";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="App maxWidth">
      <Intro />

      <Skills />

      {/* <Experience /> */}

      <Projects />

    </div>
  );
};

export default App;
