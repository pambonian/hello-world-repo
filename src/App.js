import logo from './logo.svg';
import './App.css';

const student = {
  name: 'Bob',
  class: 'Software Engineering 700',
  semester: 'Fall 2022'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h1>{student.name}</h1>
        <p>{student.class}</p>
        <p>{student.semester}</p>
      </div>
      <div>
        {(student.name === 'Cameron' ? student.class = 'Art' : student.class = 'SEI')}
      </div>
    </div>
  );
}

export default App;
