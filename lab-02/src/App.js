import React from 'react';
import './App.css';
import Projects from './projects/Projects';
import ProjectRow from './projects/ProjectRow';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Projects />
        </div>
      </div>
    );
  }
}

// {/* <ProjectRow project={name: "cat", description: "magic}" /> */}

export default App;
