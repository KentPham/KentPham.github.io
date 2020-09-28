import React from 'react';

import "./App.css"

import TitleCard from './Components/Segments/TitleCard/';
import Education from './Components/Segments/Education/';
import Projects from './Components/Segments/Projects/';
import ContactMe from './Components/Segments/ContactMe/';
import Scroll from './Components/Scroll/'

function App() {
  return (
    <div>
      <div>
        <Scroll />
        <TitleCard />
        <Education />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
