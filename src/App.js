import React from 'react';
import Header from './components/Header';
import Missons from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <Missons />
      </main>
    );
  }
}

export default App;
